<template>
<div>我是B组件啊{{ dval }}</div>
</template>

<script setup lang='ts'>
// 引入vue的 getCurrentInstance 方法
import {ref,getCurrentInstance,onMounted} from 'vue'
const dval = ref<string>('dd')
// 获取当前组件实例
const { appContext } = getCurrentInstance();
const $bus = appContext.config.globalProperties
$bus.$bus.on('handle-click',(val:string) => {
    console.log('aaaa1=',val)
    dval.value = val
})
onMounted(() => {
})
</script>
<style scoped>

</style>