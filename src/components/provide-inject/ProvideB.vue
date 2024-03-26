<template>
    <div>
        <h3>孙子级别人物</h3>
        <button @click="changeColor">修改颜色</button>
        <div class="box"></div>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive,inject} from 'vue'
import type {Ref} from 'vue'
const color = inject<Ref<string>>('color')
const changeColor = () => {
    color!.value = 'gray'
}
</script>
<style scoped>
.box{
        height: 50px;
        width: 50px;
        border:1px solid #ccc;
        background: v-bind(color);
    }
</style>