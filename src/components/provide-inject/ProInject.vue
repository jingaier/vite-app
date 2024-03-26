<template>
    <div>
        <h3>爷爷级别人物</h3>
        <el-radio-group v-model="colorVal" @change="handleChange">
            <el-radio label="red">红色</el-radio>
            <el-radio label="pink">粉色</el-radio>
            <el-radio label="yellow">黄色</el-radio>
        </el-radio-group>
        <div class="box"></div>
    </div>
    <div>
       <ProvideA></ProvideA>
    </div>
    <div>
        
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive,provide,readonly} from 'vue'
import ProvideA from './ProvideA.vue'  
const colorVal = ref<string>('red')
const handleChange = (val) => {
    colorVal.value = val
}
 // 可以修改颜色，如不让修改 在provide注入时 使用readonly
provide('color',readonly(colorVal))

</script>
<style scoped>
    .box{
        height: 50px;
        width: 50px;
        border:1px solid #ccc;
        background: v-bind(colorVal);
    }
</style>