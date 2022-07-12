<script setup lang="ts">

</script>
 
<template>
    <div justify-between w-full flex flex-row text-white dark:text-black bg-black dark:bg-white>
        <div flex flex-row p2>
            <div class="nori" text="black-400 3xl">Nori</div>
            <div i-teenyicons:globe-americas-solid text-5xl text-blue-300 p2x></div>
        </div>
        <DarkMode />
    </div>
</template>

<style scoped>
div {
    font-family: "Patua One", sans-serif;
}

.nori {
    height: 100%;
    padding-top: 7px;
    text-transform: uppercase;
    font-size: 5em;
}
</style>