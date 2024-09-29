/*
 * @Author: DaiYu
 * @Date: 2022-02-18 17:29:40
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-13 10:42:46
 * @FilePath: \src\router\index.ts
 */
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import baseRoutes from './modules/base' // 确保正确导入
import NProgress from '@/plugins/progress'
import { preloadImages } from '@/utils/preloader' // 假设我们将预加载函数移到了单独的文件中
import ExperimentView from '@/views/index/index.vue'

// 批量加载路由模块
const modules: Record<string, any> = import.meta.glob(
	// ['./modules/**/*.ts', '!**/dashboard.ts', '!**/about.ts'],
	['./modules/**/*.ts'],
	{
		eager: true,
	},
)
const routes: RouteRecordRaw[] = [
	...baseRoutes,
	{
		path: '/experiment',
		name: 'Experiment',
		component: ExperimentView,
		meta: {
			title: '实验',
		},
	},
]

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
	const mod = modules[key].default || {}
	const modList = Array.isArray(mod) ? [...mod] : [mod]
	routes.push(...modList)
})

const router = createRouter({
	history: createWebHistory(),
	routes,
})

let isPreloading = false

// 创建一个新的函数来处理预加载
async function ensurePreloading() {
	if (!isPreloading) {
		isPreloading = true
		try {
			await preloadImages()
		}
		catch (error) {
			console.error('预加载图片时出错:', error)
		}
		finally {
			isPreloading = false
		}
	}
}

router.beforeEach(async (to, from, next) => {
	NProgress.start()

	const savedState = localStorage.getItem('experimentState')
	const participantInfo = localStorage.getItem('participantInfo')
	const dataSubmitted = localStorage.getItem('dataSubmitted')

	if (to.name === 'ParticipantInfo') {
		if (dataSubmitted === 'true') {
			// 如果实验已结束且数据已提交，重定向到实验结束页面
			next({ name: 'ExperimentEnd' })
		}
		else if (savedState) {
			const parsedState = JSON.parse(savedState)
			if (parsedState.currentTrial > 101) {
				// 如果实验已结束但数据未提交，重定向到实验页面
				next({ name: 'Experiment' })
			}
			else {
				await ensurePreloading()
				next()
			}
		}
		else {
			await ensurePreloading()
			next()
		}
	}
	else if (to.name === 'StartPage') {
		if (!participantInfo) {
			next({ name: 'ParticipantInfo' })
		}
		else {
			await ensurePreloading()
			next()
		}
	}
	else if (to.name === 'Experiment') {
		if (!participantInfo) {
			next({ name: 'ParticipantInfo' })
			await ensurePreloading()
		}
		else if (!localStorage.getItem('hasSeenInstructions')) {
			next({ name: 'StartPage' })
		}
		else {
			await ensurePreloading()
			next()
		}
	}
	else {
		next()
	}
})

router.afterEach((_to) => {
	NProgress.done()
})

export default router
