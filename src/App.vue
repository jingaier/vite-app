<!--
 * @Author: Jingaier
 * @Date: 2022-05-07 23:36:15
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-04-19 00:46:56
 * @Descripttion: 
-->


<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">个人主页</router-link>
    <router-link to="/test">测试</router-link>
    <router-view></router-view>
    
  </div>
</template>
<script setup lang="ts">

</script>
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
