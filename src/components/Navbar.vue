<script setup lang="ts">
const props = defineProps<{
    modelValue?: boolean
}>()
</script>

<template>
    <div border="~ gray/15" p2>
    <TimezoneSearch />
    </div>
</template>