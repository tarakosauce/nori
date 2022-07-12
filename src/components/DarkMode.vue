<script setup lang="ts">

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
 
<template>
    <button i-teenyicons:moon-solid dark:i-teenyicons:sun-solid @click="toggleDark()" />
</template>