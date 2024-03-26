<!--
 * @Author: Jingaier
 * @Date: 2023-03-13 13:40:59
 * @LastEditors: Jingaier
 * @LastEditTime: 2023-03-13 14:05:14
 * @Descripttion: 
-->
<template>
<div class="tree" @click.stop="handleTap(item)" v-for="item in data"> 
    <input v-model="item.checked" type="checkbox" />
    <span>{{item.name}}</span>
    <Tree v-if="item?.children?.length" :data="item?.children"></Tree>
</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
interface Tree{
    name:string,
    checked:boolean,
    children?:Tree[]
  }
defineProps<{
    data?:Tree[]
}>()
const handleTap = (item:Tree)=>{
 console.log(item,'===')
}
</script>
<style scoped>
    .tree{
        margin-left: 50px;
    }
</style>