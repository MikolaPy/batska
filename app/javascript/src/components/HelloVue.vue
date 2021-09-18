<template id="">
<p>
 {{ mes}}
</p>

</template>
<script>
import { ref } from 'vue'

export default { 
	name: 'HelloVue',
	setup() { 
		const mes = ref('Word')
		return { 
			mes
		}
	}
}
</script>

<style scoped>
p { 
	font-size: 2em;
	text-align: center;
}
</style>
