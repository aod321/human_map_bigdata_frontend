<template>
	<div class="wechat-only">
		<h1>请在微信中打开</h1>
		<p>抱歉,本实验只能在微信浏览器中进行。</p>
	</div>
</template>

<script lang="ts" setup>
// No script needed for this simple component
</script>

<style scoped>
.wechat-only {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
}
</style>
