import { ref } from 'vue'

const isPreloaded = ref(false)

export function preloadImages(progressCallback: (_progress: number) => void): Promise<void> {
	if (isPreloaded.value) {
		return Promise.resolve()
	}

	return new Promise((resolve) => {
		const totalImages = 502 // 500 regular images + 2 catch images
		let loadedCount = 0

		const updateProgress = () => {
			loadedCount++
			const progress = Math.floor((loadedCount / totalImages) * 100)
			progressCallback(progress)
			if (loadedCount === totalImages) {
				isPreloaded.value = true
				resolve()
			}
		}

		for (let i = 0; i < 500; i++) {
			const img = new Image()
			img.src = `https://image.blog1.top/${i.toString().padStart(5, '0')}.jpg`
			img.onload = img.onerror = updateProgress
		}

		// Preload catch trial images
		const catchImageUrls = ['https://image.blog1.top/empty.jpg', 'https://image.blog1.top/hard.jpg']
		catchImageUrls.forEach((url) => {
			const img = new Image()
			img.src = url
			img.onload = img.onerror = updateProgress
		})
	})
}

export function getPreloadStatus() {
	return isPreloaded
}

export function setPreloadStatus(status: boolean) {
	isPreloaded.value = status
}

export function ensurePreloading() {
	if (!isPreloaded.value) {
		preloadImages((progress) => {
			console.log(`Preloading progress: ${progress}%`)
		})
	}
}
