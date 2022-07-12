<script setup lang="ts">

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
 
<template>
    <div h-full flex flex-row justify-center items-center>
    <button text-center text-7xl i-teenyicons:moon-solid dark:i-teenyicons:sun-solid pr-20 @click="toggleDark()" />
    </div>
</template>