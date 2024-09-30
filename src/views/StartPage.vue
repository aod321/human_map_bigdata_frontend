<template>
	<div class="start-page">
		<h1 class="title">
			实验指导
		</h1>
		<div class="instruction-content">
			<p>亲爱的参与者，欢迎您参加我们的实验！在接下来的任务中，您将看到两张不同的地图。我们希望您能想象自己在这些地图中进行导航，并判断哪张地图更容易完成导航任务。</p>
			<p>您的任务是：从展示的两张地图中，选择一张您认为<strong class="highlight">更容易</strong>进行导航的地图。</p>
			<p>在本实验中，我们定义导航任务的难度为：在地图上选择任意两个点作为起点和终点，从起点到达终点的难易程度。</p>
			<p>举个例子：屏幕上会显示上下两张地图。如果您觉得上面的地图更<strong class="highlight">容易</strong>导航，就请点击上面的图片；如果您认为下面的地图更<strong class="highlight">容易</strong>导航，则点击下面的图片。</p>
			<div class="image-container">
				<img v-for="(image, index) in instructionImages" :key="index" :src="image" :alt="`示例图片 ${index + 1}`" class="instruction-image">
			</div>
			<p class="note">
				如果您有任何疑问，请随时向我们的工作人员寻求帮助，我们很乐意为您解答。
			</p>
		</div>
		<van-button type="primary" size="large" :disabled="!canStartExperiment" class="start-button" @click="startExperiment">
			开始实验
		</van-button>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const canStartExperiment = ref(false)
const instructionImages = ref([
	'/instruction/empty.jpg',
	'/instruction/hard.jpg',
])

function startExperiment() {
	if (canStartExperiment.value) {
		localStorage.setItem('hasSeenInstructions', 'true')
		router.replace({ name: 'Experiment' })
	}
}

onMounted(() => {
	const participantInfo = localStorage.getItem('participantInfo')
	if (!participantInfo) {
		// 如果没有参与者信息，重定向到参与者信息页面
		router.replace({ name: 'ParticipantInfo' })
	}
	else {
		// 如果有参与者信息，允许开始实验
		canStartExperiment.value = true
	}
})
</script>

<style scoped>
.start-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: 100vh;
	padding: 32px 16px;
	box-sizing: border-box;
	background-color: #f8f9fa;
}

.title {
	margin-bottom: 24px;
	font-size: 28px;
	color: #2c3e50;
	text-align: center;
}

.instruction-content {
	max-width: 800px;
	width: 100%;
	margin-bottom: 30px;
	background-color: #ffffff;
	padding: 32px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

p {
	margin-bottom: 20px;
	font-size: 18px;
	line-height: 1.8;
	color: #34495e;
	text-align: justify;
}

.highlight {
	color: #3498db;
	font-weight: 600;
}

.image-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 32px 0;
}

.instruction-image {
	width: 100%;
	max-width: 250px;
	height: auto;
	object-fit: contain;
	margin-bottom: 16px;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.3s ease,
		box-shadow 0.3s ease;
}

.instruction-image:hover {
	transform: scale(1.05);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.note {
	font-style: italic;
	color: #7f8c8d;
	font-size: 16px;
}

.start-button {
	margin-top: 24px;
	width: 100%;
	max-width: 300px;
	height: 48px;
	font-size: 20px;
	border-radius: 4px;
}

@media (max-width: 768px) {
	.start-page {
		padding: 24px 16px;
	}

	.title {
		font-size: 24px;
	}

	.instruction-content {
		padding: 24px;
	}

	p {
		font-size: 16px;
		line-height: 1.6;
	}

	.instruction-image {
		max-width: 70%;
	}

	.start-button {
		max-width: 100%;
		font-size: 18px;
	}
}
</style>
