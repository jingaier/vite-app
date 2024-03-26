<template>
    <div>
        <h3>爸爸级别人物</h3>
        <div>
            <div class="box"></div>
            <ProvideB></ProvideB>
        </div>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive,inject} from 'vue'
import ProvideB from './ProvideB.vue' 
import type {Ref} from 'vue'
const color = inject<Ref<string>>('color')
</script>
<style scoped>
    .box{
        height: 50px;
        width: 50px;
        border:1px solid #ccc;
        background: v-bind(color);
    }
</style>