
<template>
  <span :class="btn == item.id?'isActive':''" v-for="(item, index) in title" :key="index" @click="getName(item)">{{
    item.name }}</span>
  <div>
    <component :is="com"></component>
  </div>
</template>

<script setup lang='ts'>
import A from './a.vue'
import B from './b.vue'
import { ref } from 'vue'
const com = ref(A)
const btn = ref(null)
const title = ref([
  {
    name: 'A',
    id: 1,
    component: A
  },
  {
    name: 'B',
    id: 2,
    component: B
  }
])

const getName = (e) => {
  console.log(e);
  btn.value = e.id
  com.value = e.component


}

</script>

<style  scoped>
.isActive {
  color: red
}
</style>