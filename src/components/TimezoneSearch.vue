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
  return fuse.search(input.value);
});

const add = (t: Timezone) => {
    addToTimes(t);
    input.value = '';
    index.value = 9;
}
</script>

<template>
<div relative>
  <input v-model="input" type="text" placeholder="search for a time..." px2 py1 bg-black dark:bg-white border-none text-white dark:text-black w-full />
  <div v-show="input" absolute top-full bg-black dark:bg-white text-white dark:text-black left-0 right-0 flex flex-col max-h-100 overflow-auto z-10>
  <button v-for="i of result" :key="i.refIndex" @click="add(i.item)">
    <TimezoneItem :timezone="i.item" />
  </button>
  </div>
  </div>
</template>