<template>
	<div class="experiment-end">
		<h1>实验结束</h1>
		<p>感谢您的参与！</p>
		<div v-if="participantInfo" class="participant-info">
			<p><strong>年龄：</strong>{{ participantInfo.age }}</p>
			<p><strong>性别：</strong>{{ participantInfo.gender }}</p>
			<p><strong>实验总时长：</strong>{{ formatDuration(participantInfo.experimentDuration) }}</p>
		</div>
		<van-button type="primary" :disabled="isSubmitting" @click="goToSurvey">
			领取被试费
		</van-button>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

const router = useRouter()
const participantInfo = ref<any>(null)
const isSubmitting = ref(false)

onMounted(() => {
	checkExperimentCompletion()
})

function checkExperimentCompletion() {
	const storedInfo = localStorage.getItem('participantInfo')
	const experimentState = localStorage.getItem('experimentState')
	const hasSeenInstructions = localStorage.getItem('hasSeenInstructions')
	if (storedInfo) {
		participantInfo.value = JSON.parse(storedInfo)
	}
	if (!storedInfo || !experimentState || hasSeenInstructions !== 'true') {
		showToast('实验流程未完成')
		// clean all local storage
		localStorage.clear()
		router.push('/instructions')
	}
}

function goToSurvey() {
	if (isSubmitting.value) {
		return
	}
	// 不再清除所有与实验相关的数据
	// 只设置一个标志表示实验已完成
	localStorage.setItem('experimentCompleted', 'true')
	// 显示提示信息
	showToast('正在跳转到问卷星...')
	// 跳转到问卷星链接
	window.location.href = 'https://www.wjx.cn/vm/hjEA9e3.aspx'
}

function formatDuration(duration: number): string {
	const minutes = Math.floor(duration / 60000)
	const seconds = Math.floor((duration % 60000) / 1000)
	return `${minutes}分${seconds}秒`
}
</script>

<style scoped>
.experiment-end {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-size: 24px;
	text-align: center;
}

h1 {
	font-size: 36px;
	margin-bottom: 30px;
}

.participant-info {
	margin: 30px 0;
	padding: 30px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f9f9f9;
}

.participant-info p {
	font-size: 24px;
	margin-bottom: 15px;
}

.van-button {
	margin-top: 30px;
	font-size: 24px;
	padding: 15px 30px;
}
</style>
