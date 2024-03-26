<!--
 * @Author: Jingaier
 * @Date: 2023-03-02 23:05:17
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-03-06 23:27:42
 * @Descripttion: 
-->
<template>

<div>
    <div ref="demo">全面了解Vue3的组件的Props</div>
    
</div>

</template>

<script setup lang='ts'>
import {ref,reactive, defineProps, shallowReadonly} from 'vue'
const ret = reactive({name:'reactive'})
const sr = shallowReadonly(ret)

const props = defineProps({
    name:{
        type:String,
        default:'aa'
    }
})
console.log('props=',sr, props)
</script>
<style scoped>

</style> 