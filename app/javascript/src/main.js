import { createApp } from 'vue'
import HelloVue from '@/components/HelloVue.vue'

export default () => {
	document.addEventListener('DOMContentLoaded', () => {
		const app = createApp(HelloVue);
		app.mount('#vue-app')
	})
}
