<template>
	<div class="thank-you">
		<h1>感谢参与</h1>
		<p>实验已经结束，感谢您的宝贵时间和贡献。</p>
		<p>如果您有任何问题，请联系实验管理员。</p>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
// import { useRouter } from 'vue-router'

// const router = useRouter()

onMounted(() => {
	// 防止用户通过后退按钮返回到之前的页面
	window.history.pushState(null, '', window.location.href)
	window.onpopstate = function () {
		window.history.pushState(null, '', window.location.href)
	}
})
</script>

<style scoped>
.thank-you {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	text-align: center;
}

h1 {
	font-size: 24px;
	margin-bottom: 20px;
}

p {
	margin-bottom: 10px;
}
</style>
