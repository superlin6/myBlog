<template>
     <nav-bar/>
    <cube/>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
import Cube from './components/content/animate/Cube.vue'
import NavBar from './components/content/navbar/NavBar.vue'
export default {
  components: { Cube,NavBar },
  name: 'App',
  setup() {
    console.log('1-开始创建组件-setup')
    const data = reactive({})
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style>

</style>
