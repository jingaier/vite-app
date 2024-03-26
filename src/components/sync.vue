<!--
 * @Author: Jingaier
 * @Date: 2023-04-19 00:11:31
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-04-19 00:52:21
 * @Descripttion: 
-->
<template>
<div class="sync">
    <div class="sync-content">
        <div><img :src="data.url" alt=""></div>
        <div class="sync-pop">
            <div>{{ data.name }}</div>
            <div>{{ data.age }}</div>
        </div>
    </div>
    <div>{{ data.desc }}</div>
</div>
</template>

<script setup lang='ts'>
import {axios} from '../server/axios'
import {ref,reactive} from 'vue'
interface Data{
    data:{
        name:string,
        age:number,
        url:string,
        desc:string
    }
}
// 顶层 await
const {data} = await axios.get<Data>('./data.json')
</script>
<style scoped>
.sync{
    background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
    background-size: 400% 100%;
    animation: el-skeleton-loading 1.4s ease infinite;
}
</style>