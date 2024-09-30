<template>
	<div class="network-error">
		<van-empty
			image="network"
			description="服务器已关, 请稍后再试"
		>
			<template #bottom>
				<p class="error-message">
					检测到网络异常，请检查您的网络连接
				</p>
				<van-button round type="primary" @click="retryConnection">
					重试
				</van-button>
			</template>
		</van-empty>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { checkApiStatus } from '@/utils/apiCheck'

const router = useRouter()

function retryConnection() {
	// 重定向到实验页面，它会再次检查网络连接
	router.push('/experiment')
}

onMounted(async () => {
	const apiIsWorking = await checkApiStatus()
	if (apiIsWorking) {
		router.push('/')
	}
})
</script>

<style scoped>
.network-error {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
}

.error-message {
	margin-bottom: 20px;
	color: #666;
	font-size: 16px;
}
</style>
