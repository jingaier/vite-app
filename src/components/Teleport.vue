<template>
    <div class="dialog1">
        <div>我是弹框</div>
        <div>
            <button>开始</button>
            <button>取消</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'

</script>
<style scoped>
    .dialog1{
        width:400px;
        height:400px;
        background:#ccc;
        position: absolute;
        left:50%;
        top:50%;
        margin-left:-200px;
        margin-top:-200px;
        z-index: 999999;
    }
</style>