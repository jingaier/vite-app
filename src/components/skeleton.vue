<!--
 * @Author: Jingaier
 * @Date: 2023-04-19 00:11:31
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-04-19 00:19:08
 * @Descripttion: 
-->
<template>
<div class="sk">
    <div class="sk-content sk-2">
        <div><img src="" alt=""></div>
        <div class="sk-pop">
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="sk-2"></div>
    <div class="sk-2"></div>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'

</script>
<style scoped>
.sk-2{
    background: linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);
    background-size: 400% 100%;
    animation: el-skeleton-loading 1.4s ease infinite;
}
</style>