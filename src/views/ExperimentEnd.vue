<template>
	<div class="experiment-end">
		<h1>实验结束</h1>
		<p>感谢您的参与！</p>
		<div v-if="participantInfo" class="participant-info">
			<p><strong>姓名：</strong>{{ participantInfo.name }}</p>
			<p><strong>年龄：</strong>{{ participantInfo.age }}</p>
			<p><strong>性别：</strong>{{ participantInfo.gender }}</p>
		</div>
		<van-button type="primary" :disabled="isSubmitting" @click="goToSurvey">
			领取被试费
		</van-button>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { useRouter } from 'vue-router'
import { showToast } from 'vant'

// const router = useRouter()
const participantInfo = ref<any>(null)
const isSubmitting = ref(false)

onMounted(() => {
	const storedInfo = localStorage.getItem('participantInfo')
	if (storedInfo) {
		participantInfo.value = JSON.parse(storedInfo)
	}
	checkAndSubmitData()
})

function checkAndSubmitData() {
	const dataSubmitted = localStorage.getItem('dataSubmitted')
	const experimentState = localStorage.getItem('experimentState')

	if (dataSubmitted !== 'true' && experimentState) {
		submitData(JSON.parse(experimentState))
	}
}

function submitData(experimentData: any) {
	isSubmitting.value = true
	showToast('正在提交数据...')

	// TODO: 实现向服务器提交数据的逻辑
	console.log('Submitting data:', experimentData)

	// 模拟数据提交
	setTimeout(() => {
		localStorage.setItem('dataSubmitted', 'true')
		// 不再删除 experimentState，保留实验状态
		isSubmitting.value = false
		showToast('数据提交成功')
	}, 2000)
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
	window.location.href = 'https://www.wjx.cn/vm/PKcoqGV.aspx#'
}
</script>

<style scoped>
.experiment-end {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-size: 18px;
	text-align: center;
}

h1 {
	font-size: 24px;
	margin-bottom: 20px;
}

.participant-info {
	margin: 20px 0;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background-color: #f9f9f9;
}

.van-button {
	margin-top: 20px;
}
</style>
