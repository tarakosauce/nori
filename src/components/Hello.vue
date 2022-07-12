<script setup lang="ts">
const props = defineProps<{
    name: string
}>()

const uppercase = computed(() => props.name.toLocaleUpperCase());
</script>

<template>
  <div text="red-400 3xl" font="serif bold">Hello, {{ uppercase }}</div>
  <div i-teenyicons:globe-americas-solid text-5xl text-blue-300></div>
</template>