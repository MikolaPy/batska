<template id="">
<p>
 {{ mes }}
</p>
<p>
 {{ mes2 }}
</p>

</template>
<script>
import { ref } from 'vue'

export default { 
	name: 'HelloVue',
	setup() { 
		const mes = ref('Word');
		console.log(mes);
		return { 
			mes
		}
	},
	data() {
		return {
			mes2: 'mes2'
		};
	}
}
</script>

<style scoped>
p { 
	font-size: 2em;
	text-align: center;
}
</style>
