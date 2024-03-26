<!--
 * @Author: Jingaier
 * @Date: 2023-04-17 23:19:59
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-04-18 23:35:04
 * @Descripttion: 
-->
<template>
<div>
    <div class="header">
        
        <div v-for="(item,index) in data" :key="index"> 
            <slot name="header" :index="index"></slot>
        </div>
    </div>
    <div class="main">
        
        <div v-for="(item,index) in data" :key="index">
            <slot :data="item"></slot>
        </div>
    </div>
    <div class="footer">
        <slot name="footer"></slot>
    </div>
</div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue'
type names = {
    name:string,
    age:number
}
const data = reactive<names[]>([
    {
        name:'我是水1',
        age:11
    },
    {
        name:'我是水2',
        age:12
    },
    {
        name:'我是水3',
        age:13
    },
    {
        name:'我是水4',
        age:14
    }
])
</script>
<style scoped>
    .header{
        background: red;
        height: 100px;
    }
    .main{
        background: green;
        height: 100px;
    }
    .footer{
        background: blue;
        height: 100px;
    }
</style>