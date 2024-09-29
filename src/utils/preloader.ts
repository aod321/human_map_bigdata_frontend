import { ref } from 'vue'

const isPreloaded = ref(false)

export function preloadImages() {
	if (isPreloaded.value) {
		return
	}

	const totalImages = 500
	let loadedCount = 0

	for (let i = 0; i < totalImages; i++) {
		const img = new Image()
		img.src = `/images/${i}.jpg`
		img.onload = img.onerror = () => {
			loadedCount++
			if (loadedCount === totalImages) {
				isPreloaded.value = true
			}
		}
	}

	// Preload catch trial images
	const catchImageUrls = ['/catch_images/empty.jpg', '/catch_images/hard.jpg']
	catchImageUrls.forEach((url) => {
		const img = new Image()
		img.src = url
		img.onload = img.onerror = () => {
			loadedCount++
			if (loadedCount === totalImages + 2) {
				isPreloaded.value = true
			}
		}
	})
}

export function getPreloadStatus() {
	return isPreloaded
}
