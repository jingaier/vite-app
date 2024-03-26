<!-- 
    事件:
    @before-enter
    @before-leave
    @enter
    @leave
    @appear
    @after-enter
    @after-leave
    @after-appear
    @enter-cancelled
    @leave-cancelled (v-show only)
    @appear-cancelled
    属性：
    /**
   * 用于自动生成过渡 CSS class 名。
   * 例如 `name: 'fade'` 将自动扩展为 `.fade-enter`、
   * `.fade-enter-active` 等。
   */
  name?: string
  /**
   * 是否应用 CSS 过渡 class。
   * 默认：true
   */
  css?: boolean
  /**
   * 指定要等待的过渡事件类型
   * 来确定过渡结束的时间。
   * 默认情况下会自动检测
   * 持续时间较长的类型。
   */
  type?: 'transition' | 'animation'
  /**
   * 显式指定过渡的持续时间。
   * 默认情况下是等待过渡效果的根元素的第一个 `transitionend`
   * 或`animationend`事件。
   */
  duration?: number | { enter: number; leave: number }
  /**
   * 控制离开/进入过渡的时序。
   * 默认情况下是同时的。
   */
  mode?: 'in-out' | 'out-in' | 'default'
  /**
   * 是否对初始渲染使用过渡。
   * 默认：false
   */
  appear?: boolean

  /**
   * 用于自定义过渡 class 的 prop。
   * 在模板中使用短横线命名，例如：enter-from-class="xxx"
   */
  enterFromClass?: string
  enterActiveClass?: string
  enterToClass?: string
  appearFromClass?: string
  appearActiveClass?: string
  appearToClass?: string
  leaveFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
 -->
<template>
    <button @click="flag = !flag">切换</button>
    <transition enter-active-class="animate__animated animate__fadeIn">
        <div v-if="flag" class="box"></div>
    </transition>
    <div>
        <div><button @click="add">增加</button><button @click="pop">删除</button></div>
        <transition-group enter-active-class="animate__animated animate__zoomInDown" leave-active-class="animate__animated animate__slideOutDown">
            <div class="item" v-for="item in list" :key="item">{{ item }}</div>
        </transition-group>
    </div>
    <div>
        <div><button @click="shuffle">打乱你</button></div>
        <transition-group class="wraps" tag="div" move-class="mmm">
            <div class="items" v-for="item in randomList" :key="item.id">{{ item.number }}</div>
        </transition-group>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
import _ from "lodash"
import 'animate.css'
const flag = ref<boolean>(true)
const list = reactive<number[]>([1,2,3,4,5,6,7])
// 这操作 真骚
const randomList = ref(Array.apply(null,{length:81} as number[]).map((_,index) => {
    return {
        id: index,
        number: (index % 9)+1
    }
}))
const add = () => {
    list.push(list.length+1)
}
const pop = () => {
    list.pop()
}

const shuffle = () => {
    randomList.value = _.shuffle(randomList.value)
}
</script>
<style scoped>
    .wraps{
        display: flex;
        flex-wrap: wrap;
        width: calc(25px *10 +9px);
    }
    .wraps .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
    }
    .mmm {
        transition: all 1s;
    }
    .box{
        height:200px;
        width: 200px;
        background:green;
    }
    /* 
    使用下面这几个.fade-enter-from .fade-enter-active .fade-enter-to  只需要在transition 添加name="fade"
    也可以自定义class 可以用 enter-active-class="自定义的类名" 此处现在是结合了animate.css
    */
    .fade-enter-from{
        width:0;
        height:0;
        transform: rotate(360deg);
    }
    .fade-enter-active{
        transition: all 1.5s ease-in;
    }
    .fade-enter-to{
        width:200px;
        height:200px;
        transform: rotate(360);
    }
</style>