<template id="">
<p>
</p>

</template>
<script>
import { ref } from 'vue'


export default { 
	name: 'HelloVue',
	setup() { 
		const mes = ref('Word');
		return { 
			mes
		}
	},
	data() {
		return {
			global_store: document.getElementById('global_store')
		};
	},
	created() { 
		console.log(global_store.dataset.globalStore);
	}
}
</script>

<style scoped>
p { 
	font-size: 2em;
	text-align: center;
}
</style>
