<template>
    <!-- <div class="parent">
        
        <Teleport :disable="false" to="body">
           <dialog></dialog>
        </Teleport>
    </div> -->
    <!-- 动画 -->
    <!-- <Transition1></Transition1> -->
    <!-- 注入 -->
    <ProInject></ProInject>
</template>

<script setup lang='ts'>
import {ref,reactive, defineAsyncComponent} from 'vue'
// const dialog = defineAsyncComponent(() => import('../components/Teleport.vue'))
// const Transition1 = defineAsyncComponent(() => import('../components/Transition.vue'))
// import Transition1 from '../components/Transition.vue' 
import ProInject from '../components/provide-inject/ProInject.vue'   
</script>
<style scoped>
    .parent{
        width:100%;
        height:50vh;
        background:yellow;
        position: relative;
    }
</style>