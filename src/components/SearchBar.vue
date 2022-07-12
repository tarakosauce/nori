<script setup lang="ts">
const props = defineProps<{
    modelValue?: boolean
}>()
</script>

<template>
    <div border black dark:border white p2>
    <TimezoneSearch />
    </div>
</template>