/*
 * @Author: DaiYu
 * @Date: 2022-10-15 16:45:41
 * @LastEditors: DaiYu
 * @LastEditTime: 2022-10-18 11:29:00
 * @FilePath: \src\router\modules\base.ts
 */
import type { RouteRecordRaw } from 'vue-router'

const baseRoutes: Array<RouteRecordRaw> = [
	{
		path: '/participant-info',
		name: 'ParticipantInfo',
		component: () => import('@/views/ParticipantInfo.vue'),
		meta: {
			title: '被试信息',
		},
	},
	{
		path: '/informed-consent',
		name: 'InformedConsent',
		component: () => import('@/views/InformedConsent.vue'),
		meta: {
			title: '知情同意',
		},
	},
	{
		path: '/',
		redirect: '/informed-consent',
	},
	{
		path: '/instructions',
		name: 'Instructions',
		component: () => import('@/views/Instructions.vue'),
		meta: {
			title: '实验指导语',
		},
	},
	{
		path: '/experiment',
		name: 'Experiment',
		component: () => import('@/views/index/index.vue'),
	},
	{
		path: '/experiment-end',
		name: 'ExperimentEnd',
		component: () => import('@/views/ExperimentEnd.vue'),
	},
	{
		path: '/thank-you',
		name: 'ThankYou',
		component: () => import('@/views/ThankYou.vue'),
		meta: {
			title: '感谢参与',
		},
	},
]

export default baseRoutes
