<!--
 * @Author: Jingaier
 * @Date: 2023-03-02 23:05:17
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-03-06 23:27:42
 * @Descripttion: 
-->
<template>

<div>
    <div ref="demo">{{man}}-名字：{{title}}</div>
    <button @click="send">给父组件传值</button>
    
</div>

</template>

<script setup lang='ts'>
import {ref,reactive, defineProps, defineEmits, defineExpose} from 'vue'

withDefaults(defineProps<{
    title:string,
    arr:number[]
}>(),{
    title:'888',
    arr:()=>[999]
})
const emit = defineEmits(['on-click'])
const send=()=>{
    emit('on-click','红军')
}
defineExpose({
    name:'xiaoman',
    fn:()=>console.log(111)
})
// defineProps({
//     title:{
//         type:String,
//         default:'aa'
//     }
// })
</script>
<style scoped>

</style> 