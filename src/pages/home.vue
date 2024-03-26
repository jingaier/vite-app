

<template>
  <div>
    <h1>首页-拖拽组件</h1>
    <Props></Props>
    <TreeView :data="data1"></TreeView>
  </div>
  <div style="display:flex">
      <div @click="switchCom(item,index)" :class="[active == index?'tabs-active':'']" class="tabs" v-for="(item,index) in data" :key="index">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <div style="height:120px;">
      <component :is="comId"></component>
    </div>
    <!-- <Dialog>
      <template #header>
        <div>插入上面</div>
      </template>
      <template v-slot="{data}">
        <div>{{data.name}} --- {{ data.age }}</div>
      </template>
      <template #footer>
        <div>插入下面</div>
      </template>
    </Dialog> -->
</template>
<script setup lang="ts">
  import { ref, reactive, markRaw, shallowRef} from 'vue'
  import AVue from '../components/expame/A.vue'
  import BVue from '../components/expame/B.vue'
  import CVue from '../components/expame/C.vue'
  import Dialog from '../components/Dialog/index.vue'
  import TreeView from '../components/Tree.vue'
  import Props from '../components/Props.vue'
  interface Tree{
    name:string,
    checked:boolean,
    children?:Tree[]
  }
  const data1 = reactive<Tree[]>([
    {
      name:'1',
      checked:false,
      children:[
        {
          name:'1-1',
          checked:false
        }
      ]
    },
    {
      name:'2',
      checked:false,
    },
    {
      name:'3',
      checked:false,
      children:[
         {
          name: '3-1',
          checked: false,
          children: [
            {
              name: '3-1-1',
              checked: false
            }
          ]
         },
         {
           name: '3-2',
           checked: false,
           children: [
             {
               name: '3-2-1',
               checked: false
             }
           ]
         }
      ]
    }
  ])
  
  
  const comId = shallowRef(AVue)
  console.log('comId=',comId)
  const active = ref(0)
  const data = reactive([
    {
      name:'A组件',
      com:markRaw(AVue),
    },
    {
      name:'B组件',
      com:markRaw(BVue),
    },
    {
      name:'C组件',
      com:markRaw(CVue),
    }
  ])
  const switchCom = (item:any,index:number) => {
    console.log('----===',item,index)
    active.value = index
    comId.value = item.com

  }
//   const dragstart = (e, item)=> {
//   this.dragItem = item;
//   // 设置元素的放置行为——移动
//   this.$refs.targetContent.addEventListener("dragenter", this.dragenter);
//   // 在目标元素经过 必须要阻止默认行为 否则不能触发drop
//   this.$refs.targetContent.addEventListener("dragover", this.dragover);
//   // 离开目标元素时设置元素的放置行为——不能拖放
//   this.$refs.targetContent.addEventListener("dragleave", this.dragleave);
//   // 拖动元素在目标元素松手时添加元素到画布
//   this.$refs.targetContent.addEventListener("drop", this.drop);
// };
// const dragend = (e) =>{
//   this.$refs.targetContent.removeEventListener("dragenter", this.dragenter);
//   this.$refs.targetContent.removeEventListener("dragover", this.dragover);
//   this.$refs.targetContent.removeEventListener("dragleave", this.dragleave);
//   this.$refs.targetContent.removeEventListener("drop", this.drop);
// };
// const dragenter = (e)=> {
//   e.dataTransfer.dropEffect = "move";
// };
// const dragover = (e)=> {
//   e.preventDefault();
// };
// const dragleave = (e)=> {
//   e.dataTransfer.dropEffect = "none";
// };
// const drop= (e) =>{
//   const { code } = this.dragItem;
//   this.list2.push({
//     top: e.offsetY,
//     left: e.offsetX,
//     zIndex: 1,
//     code: code,
//     id: Date.parse(new Date())
//   });
//   this.dragItem = null;
// }
</script>

<style>
.tabs{
  border:1px solid #ccc;
  padding:5px 10px;
  margin:5px;
  cursor: pointer;
}

.tabs-active{
  background: #3386da;
  color:#fff;
  
}
</style>