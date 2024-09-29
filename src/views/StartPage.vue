<template>
	<div class="start-page">
		<h1>实验指导语</h1>
		<p>这里是实验的详细指导语，请仔细阅读。</p>
		<van-button type="primary" size="large" :disabled="!canStartExperiment" @click="startExperiment">
			开始实验
		</van-button>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const canStartExperiment = ref(false)

function startExperiment() {
	if (canStartExperiment.value) {
		localStorage.setItem('hasSeenInstructions', 'true')
		// 使用 replace 而不是 push，以防止用户通过浏览器的后退按钮返回到指导页
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
	justify-content: center;
	height: 100vh;
	text-align: center;
	padding: 20px;
}

h1 {
	margin-bottom: 20px;
}

p {
	margin-bottom: 30px;
}
</style>
