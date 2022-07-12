<script setup lang="ts">
import Fuse from 'fuse.js'
import { computed, ref } from 'vue'
import { zone } from '../composable/data'
import { addToTimes } from '../composable/state'
import { Timezone } from "../types";

const fuse = new Fuse(zone, {
  keys: ['name']
})

const input = ref('');
const index = ref(0);
const result = computed(() => {
  return fuse.search(input.value)
});

const add = (t: Timezone) => {
    addToTimes(t);
    input.value = '';
    index.value = 9;
}
</script>

<template>
<div relative>
  <input v-model="input" type="text" placeholder="search" px2 py1 border bg-transparent />
  <div v-show="input" absolute top-full bg-black text-white left-0 right-0>
  <button v-for="i of result" :key="i.refIndex" flex gap2 @click="add(i.item)">
    <div font-mono w-10 text-right>{{ i.item.offset }}</div>
    <div>{{ i.item.name }}</div>
  </button>
  </div>
  </div>
</template>

<style>
html {
  background: #222;
  color: #fff;
  color-scheme: dark;
}
</style>
