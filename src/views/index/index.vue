<template>
	<div class="experiment">
		<h2>Trial {{ currentTrial }} / {{ totalTrials }}</h2>
		<van-progress :percentage="experimentProgress" :stroke-width="8" />
		<van-row class="content">
			<van-col span="24">
				<h1 class="prompt">
					请点击看起来<span class="highlight-text">更难</span>导航的图片
				</h1>
			</van-col>
			<van-col span="24" class="image-choice">
				<van-image
					v-for="(img, index) in currentImages"
					:key="index"
					:src="img.image_url"
					:width="imageWidth"
					:height="imageHeight"
					fit="contain"
					:radius="imageRadius"
					:class="{ disabled: isClicked }"
					@click="handleClick(img.id, index)"
				/>
			</van-col>
		</van-row>
	</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
import { checkApiStatus } from '@/utils/apiCheck'

const router = useRouter()

const allImages = ref<{ id: number, image_url: string }[]>([])
const currentImages = ref<{ id: number | string, image_url: string }[]>([])
const catchImages = ref<{ id: string, image_url: string }[]>([])
const currentTrial = ref(1)
const trialData = ref<any[]>([])

const imageWidth = ref('80%')
const imageHeight = ref('35vh')
const maxImageWidth = 400
const imageRadius = ref('12px')

const startTime = ref(0)
const trialStartDateTime = ref('') // 记录每个trial的开始时间（中国时区）

const totalTrials = ref(105) // 100 regular trials + 5 catch trials
const catchTrialIndices = ref<number[]>([]) // Array to store the indices of catch trials

// Add these lines to define loading and loadingProgress
const loading = ref(false)
const loadingProgress = ref(0)

// Add this line to prevent multiple clicks
const isClicked = ref(false)

// Calculate experiment progress
const experimentProgress = computed(() => Math.floor((currentTrial.value - 1) / totalTrials.value * 100))

const catchTrialEasyIndex = ref(0) // 用于存储 catch trial 中 easy 图片的索引

// 记录实验开始时间（中国时区和时间戳）
const experimentStartTime = ref(new Date().toLocaleString('zh-CN', { participantInfo: 'Asia/Shanghai' }))
const experimentStartTimestamp = ref(Date.now())

// Add a variable to track catch trial results
const catchTrialResults = ref<string[]>([])

function calculateImageSize() {
	const screenHeight = window.innerHeight
	const screenWidth = window.innerWidth

	// 统一桌面和移动设备的处理逻辑
	imageHeight.value = `${screenHeight * 0.35}px`

	// 计算图片宽度，但不超过maxImageWidth
	const calculatedWidth = Math.min(screenWidth * 0.8, maxImageWidth)
	imageWidth.value = `${calculatedWidth}px`

	// 根据屏幕宽度动态设置圆角大小
	imageRadius.value = screenWidth < 768 ? '12px' : '24px'
}

// Load saved state from localStorage
function loadSavedState() {
	const savedState = localStorage.getItem('experimentState')
	if (savedState) {
		const parsedState = JSON.parse(savedState)
		currentTrial.value = parsedState.currentTrial
		trialData.value = parsedState.trialData
		allImages.value = parsedState.allImages
		catchTrialIndices.value = parsedState.catchTrialIndices
		catchImages.value = parsedState.catchImages
		experimentStartTime.value = parsedState.experimentStartTime || new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
		experimentStartTimestamp.value = parsedState.experimentStartTimestamp || Date.now()
		catchTrialResults.value = parsedState.catchTrialResults || []
	}
}

// Save current state to localStorage
function saveState() {
	const state = {
		currentTrial: currentTrial.value,
		trialData: trialData.value,
		allImages: allImages.value,
		catchTrialIndices: catchTrialIndices.value,
		catchImages: catchImages.value,
		experimentStartTime: experimentStartTime.value,
		experimentStartTimestamp: experimentStartTimestamp.value,
		catchTrialResults: catchTrialResults.value,
	}
	localStorage.setItem('experimentState', JSON.stringify(state))
}

// Watch for changes in currentTrial and trialData
watch([currentTrial, trialData, totalTrials, catchTrialResults], saveState, { deep: true })

function startTrial() {
	if (currentTrial.value > totalTrials.value) {
		submitData()
		return
	}

	trialStartDateTime.value = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) // 记录每个trial的开始时间（中国时区）

	if (catchTrialIndices.value.includes(currentTrial.value)) {
		// Set up catch trial
		const easyImage = catchImages.value.find(img => img.id === 'empty')!
		const hardImage = allImages.value[Math.floor(Math.random() * allImages.value.length)]
		currentImages.value = [easyImage, hardImage]
		// 随机决定 easy 图片的位置（0 或 1）
		catchTrialEasyIndex.value = Math.random() < 0.5 ? 0 : 1
		// 如果 easy 图片不在第一个位置，则交换两张图片的顺序
		if (catchTrialEasyIndex.value === 1) {
			[currentImages.value[0], currentImages.value[1]] = [currentImages.value[1], currentImages.value[0]]
		}
	}
	else {
		// Set up regular trial
		if (allImages.value.length >= 2) {
			// 不放回采样
			const shuffled = [...allImages.value].sort(() => 0.5 - Math.random())
			currentImages.value = shuffled.slice(0, 2)
			// 从 allImages 中移除已使用的图片
			allImages.value = allImages.value.filter(img => !currentImages.value.includes(img))
		}
		else if (allImages.value.length === 1) {
			// 如果只剩一张图片，使用这张图片并从其他已使用的图片中随机选择一张
			currentImages.value = [...allImages.value]
			const usedImages = trialData.value.flatMap(trial => [trial.image1_id, trial.image2_id])
			const randomUsedImage = usedImages[Math.floor(Math.random() * usedImages.length)]
			currentImages.value.push({ id: randomUsedImage, image_url: `https://image.blog1.top/${randomUsedImage.toString().padStart(5, '0')}.jpg` })
			allImages.value = []
		}
		else {
			// 如果没有剩余图片，从已使用的图片中随机选择两张
			const usedImages = trialData.value.flatMap(trial => [trial.image1_id, trial.image2_id])
			const shuffledUsedImages = usedImages.sort(() => 0.5 - Math.random())
			currentImages.value = shuffledUsedImages.slice(0, 2).map(id => ({ id, image_url: `https://image.blog1.top/${id.toString().padStart(5, '0')}.jpg` }))
		}
	}
	startTime.value = Date.now()
	isClicked.value = false // Reset isClicked at the start of each trial
}

function checkExperimentStatus() {
	const hasSeenInstructions = localStorage.getItem('hasSeenInstructions')
	const participantInfo = localStorage.getItem('participantInfo')

	if (!hasSeenInstructions || !participantInfo) {
		showToast('实验流程异常，请重新开始实验')
		router.push('/instructions')
		return false
	}

	return true
}

function handleClick(imageId: number | string, index: number) {
	if (isClicked.value) {
		return
	} // Prevent multiple clicks

	if (!checkExperimentStatus()) {
		return
	}

	isClicked.value = true // Set isClicked to true to prevent further clicks
	const endTime = Date.now()
	const reactionTime = endTime - startTime.value
	const trialEndDateTime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) // 记录每个trial的结束时间（中国时区）

	const trialType = catchTrialIndices.value.includes(currentTrial.value) ? 'catch' : 'regular'

	let catchTrialCorrect: string | null = null
	if (trialType === 'catch') {
		// 判断是否正确选择了 hard 图片
		catchTrialCorrect = index !== catchTrialEasyIndex.value ? 'true' : 'false'
		catchTrialResults.value.push(catchTrialCorrect)
	}

	trialData.value.push({
		trial_id: currentTrial.value,
		trial_type: trialType,
		image1_id: currentImages.value[0].id,
		image2_id: currentImages.value[1].id,
		selected_index: index,
		selected_image_id: imageId,
		reaction_time: reactionTime,
		timestamp: endTime,
		catch_trial_correct: catchTrialCorrect,
		trial_start_datetime: trialStartDateTime.value, // 记录每个trial的开始时间（中国时区）
		trial_end_datetime: trialEndDateTime, // 记录每个trial的结束时间（中国时区）
	})

	currentTrial.value++
	if (currentTrial.value <= totalTrials.value) {
		startTrial() // 直接开始下一个试验，不使用延迟
	}
	else {
		submitData()
	}
}

async function submitData() {
	const participantInfo = JSON.parse(localStorage.getItem('participantInfo') || '{}')

	const experimentEndTime = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
	const experimentEndTimestamp = Date.now()
	const experimentDuration = experimentEndTimestamp - experimentStartTimestamp.value

	// 判断catch trial是否全部正确
	const allCatchTrialsCorrect = catchTrialResults.value.every(result => result === 'true')

	// 将 catch trial 正确性添加到 participantInfo 中
	const updatedParticipantInfo = {
		...participantInfo,
		catchTrialCorrect: allCatchTrialsCorrect.toString(),
		experimentStartDateTime: experimentStartTime.value, // 记录实验开始时间（中国时区）
		experimentEndDateTime: experimentEndTime, // 记录实验结束时间（中国时区）
		experimentDuration, // 记录实验总时长（毫秒）
	}

	const experimentData = {
		participantInfo: updatedParticipantInfo,
		trialData: trialData.value,
	}

	loading.value = true
	loadingProgress.value = 0
	try {
		const response = await fetch('https://map.blog1.top/api/submit_data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(experimentData),
			mode: 'cors',
			credentials: 'same-origin',
		})

		if (!response.ok) {
			throw new Error('Failed to submit data')
		}

		const result = await response.json()
		console.log('Data submitted successfully:', result)

		// Mark data as submitted
		localStorage.setItem('dataSubmitted', 'true')
		// 更新 participantInfo 以包含 catchTrialCorrect
		localStorage.setItem('participantInfo', JSON.stringify(updatedParticipantInfo))

		showToast('数据提交成功')
		router.push('/experiment-end')
	}
	catch (error) {
		console.error('Error submitting data:', error)
		showToast('数据提交失败，请重试')
	}
	finally {
		loading.value = false
	}
}

// Modify the checkAndSubmitData function
function checkAndSubmitData() {
	const savedState = localStorage.getItem('experimentState')
	if (savedState) {
		const parsedState = JSON.parse(savedState)
		if (parsedState.currentTrial > parsedState.totalTrials) {
			// Experiment is complete, check if data was submitted
			const dataSubmitted = localStorage.getItem('dataSubmitted')
			if (dataSubmitted !== 'true') {
				// Data was not submitted successfully, try to submit again
				loadSavedState()
				submitData()
			}
			else {
				// Data was submitted successfully, redirect to experiment end page
				router.push('/experiment-end')
			}
		}
		else {
			// Experiment is not complete, resume from where it left off
			loadSavedState()
			startTrial()
		}
	}
	else {
		// No saved state, start a new experiment
		loadImages()
	}
}

// Modify the onMounted function
onMounted(async () => {
	if (!checkExperimentStatus()) {
		return
	}

	const apiIsWorking = await checkApiStatus()
	if (!apiIsWorking) {
		router.push('/network-error')
		return
	}

	calculateImageSize()
	window.addEventListener('resize', calculateImageSize)
	checkAndSubmitData()
})

onUnmounted(() => {
	window.removeEventListener('resize', calculateImageSize) // 添加这一行
})

function loadImages() {
	// 检查是否有保存的图片数据
	const savedState = localStorage.getItem('experimentState')
	if (savedState) {
		const parsedState = JSON.parse(savedState)
		allImages.value = parsedState.allImages
		catchImages.value = parsedState.catchImages
		currentTrial.value = parsedState.currentTrial
		trialData.value = parsedState.trialData
		catchTrialIndices.value = parsedState.catchTrialIndices
		totalTrials.value = parsedState.totalTrials || 105 // 修改为105
		experimentStartTime.value = parsedState.experimentStartTime || new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
		experimentStartTimestamp.value = parsedState.experimentStartTimestamp || Date.now()
		catchTrialResults.value = parsedState.catchTrialResults || []
	}
	else {
		// 如果没有保存的数据，初始化图片数组
		for (let i = 0; i < 500; i++) {
			allImages.value.push({ id: i, image_url: `https://image.blog1.top/${i.toString().padStart(5, '0')}.jpg` })
		}
		catchImages.value = [
			{ id: 'empty', image_url: 'https://image.blog1.top/empty.jpg' },
		]
		// 随机生成5个catch trial的索引
		while (catchTrialIndices.value.length < 5) {
			const randomIndex = Math.floor(Math.random() * 100) + 1
			if (!catchTrialIndices.value.includes(randomIndex)) {
				catchTrialIndices.value.push(randomIndex)
			}
		}
		experimentStartTime.value = new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
		experimentStartTimestamp.value = Date.now()
	}
	startTrial()
}
</script>

<style lang="less" scoped>
.experiment {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;

	h2 {
		margin-bottom: 10px;
		font-size: 24px;
		color: #333;
	}
}

.content {
	width: 100%;
	max-width: 800px;
	margin-top: 20px;
}

.prompt {
	text-align: center;
	font-size: 20px;
	margin-bottom: 20px;
	color: #444;
}

.image-choice {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;

	.van-image {
		margin: 10px;
		cursor: pointer;

		&.disabled {
			pointer-events: none;
			opacity: 0.5;
		}
	}
}

.van-progress {
	margin-top: 20px;
	width: 100%;
}

.loading-text {
	margin-top: 10px;
	font-size: 16px;
	color: #666;
}

.highlight-text {
	font-size: 30px;
	font-weight: bold;
	color: #1989fa;
}
</style>
