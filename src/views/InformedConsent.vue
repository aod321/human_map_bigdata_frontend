<template>
	<div class="informed-consent">
		<h1 class="title">
			知情同意书
		</h1>
		<div class="consent-content">
			<p>您好，我们是来自清华大学心理与认知科学系的研究团队，欢迎您参加我们的心理学实验。本实验旨在研究影响人类导航难度判断的心理因素。我们将收集您的性别、年龄和手机号，以便后续数据分析和被试费发放的资质验证。其中，<strong class="highlight">您的手机号仅用于被试费发放审核</strong>，不做其他用途。所有数据将严格保密，仅用于学术研究，不会与第三方共享。</p>
			<p>请注意，您的参与是完全自愿的。您有权在任何时候退出实验，而不会受到任何形式的惩罚或损失。</p>
			<p>
				如对实验流程有疑问和建议，欢迎联系我们:<br>
				<a href="mailto:wwd22@mails.tsinghua.edu.cn">wwd22@mails.tsinghua.edu.cn</a><br>
				<a href="mailto:z-yin21@mails.tsinghua.edu.cn">z-yin21@mails.tsinghua.edu.cn</a>
			</p>
			<p>点击下一步，表示您已知情同意，自愿参与后续研究。</p>
		</div>
		<van-button type="primary" size="large" class="consent-button" @click="proceedToNextStep">
			下一步
		</van-button>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { checkApiStatus } from '@/utils/apiCheck'

const router = useRouter()

function proceedToNextStep() {
	localStorage.setItem('hasGivenConsent', 'true')
	router.push('/participant-info')
}

onMounted(async () => {
	const apiIsWorking = await checkApiStatus()
	if (!apiIsWorking) {
		router.push('/network-error')
	}
})
</script>

<style scoped>
.informed-consent {
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
	font-size: 36px;
	color: #2c3e50;
	text-align: center;
}

.consent-content {
	max-width: 1000px;
	width: 100%;
	margin-bottom: 30px;
	background-color: #ffffff;
	padding: 32px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

p {
	margin-bottom: 20px;
	font-size: 22px;
	line-height: 1.8;
	color: #34495e;
	text-align: justify;
}

.highlight {
	color: #3498db;
}

.consent-button {
	margin-top: 24px;
	width: 100%;
	max-width: 400px;
	height: 60px;
	font-size: 24px;
	border-radius: 4px;
}

@media (max-width: 768px) {
	.informed-consent {
		padding: 24px 16px;
	}

	.title {
		font-size: 28px;
	}

	.consent-content {
		padding: 24px;
	}

	p {
		font-size: 18px;
		line-height: 1.6;
	}

	.consent-button {
		max-width: 100%;
		font-size: 20px;
		height: 48px;
	}
}
</style>
