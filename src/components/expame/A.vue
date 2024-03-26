<!--
 * @Author: Jingaier
 * @Date: 2023-04-17 22:18:32
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-04-20 23:39:30
 * @Descripttion: 
-->
<template>
<div>我是A组件啊</div>
<button @click="fEmit">发送</button>
</template>

<script setup lang='ts'>
// 引入vue的 getCurrentInstance 方法
import {ref,getCurrentInstance} from 'vue'
// 获取当前组件实例
const { appContext } = getCurrentInstance();
const $bus = appContext.config.globalProperties
const defaultVal = ref<string>('111')
console.log('实例=',appContext)
const fEmit = () => {
    $bus.$bus.emit('handle-click',defaultVal)
}
console.log('$bus=',$bus);

</script>
<style scoped>
    
</style>