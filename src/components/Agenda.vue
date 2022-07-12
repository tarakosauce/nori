<script setup lang="ts">
</script>

<template>
<div p4>
    <div v-for="zone, idx of allZones" :key="zone.name" relative>
        <TimezoneItem :timezone="zone" />
        <div absolute left="-5" top-0 bottom-0 flex flex-col justify-center items-center w-8>
            <button i-teenyicons:x-circle-solid hover:text-green-400 @click="remove(zone)" />
            <div flex flex-row>
                <button v-if="idx !== 0" i-teenyicons:arrow-up-outline @click="move(zone, -1)" />
                <button v-if="idx !== allZones.length -1" i-teenyicons:arrow-down-outline @click="move(zone, 1)" />
            </div>
        </div>
    </div>
</div>
</template>