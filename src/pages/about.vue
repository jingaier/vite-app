<template>
  <div>
    <Quanju></Quanju>
    <h1>个人主页页面组件</h1>
    <h1 v-text='num'></h1>
    <button @click='add'>自增</button>
    <costom ref="costomRef" @on-click="getName"/>
    <div>--------------------------------------骨架屏-------------------------------------------</div>
    <Suspense>
      <template #default>
        <syncVue></syncVue>
      </template>
      <template #fallback>
        <skeleton></skeleton>
      </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">

  import { ref,onMounted, defineAsyncComponent } from 'vue'
  import costom from '../components/Costom.vue'
  import skeleton from '../components/skeleton.vue'
  const num = ref(1)
  const add = () => {
    num.value++
  }
  const title = '供应商'
  const getName=(name)=>{
    console.log('emit===',name);
  }
  const costomRef = ref()
  onMounted(() => {
    
    console.log('111=',costomRef.value.name,costomRef.value.fn)
  })
  const syncVue = defineAsyncComponent(()=>import('../components/sync.vue'))
</script>

