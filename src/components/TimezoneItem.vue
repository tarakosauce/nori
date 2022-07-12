<script setup lang="ts">
    import { DateTime } from 'luxon';
import { Timezone } from "../types";

    const { timezone } = defineProps<{
        timezone: Timezone
    }>()

    const region = computed(() => timezone.name.split('/')[0]);
    const city = computed(() => timezone.name.split('/')[1]);
    const offset = computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset);
    let time = computed(() => {
        let curDate = DateTime.now().setZone(timezone.name);
        let hours = curDate.hour;
        let minutes = curDate.minute;
        let AMPM = hours >= 12 ? 'PM' : 'AM';

        if (minutes < 10) {
            minutes = '0' + minutes;
        } else {
            minutes = minutes;
        }

        if (hours === 12) {
            hours=12;
        } else {
            hours = hours%12;
        }

        return `${hours}:${minutes}${AMPM}`
        });
</script>


<template>
    <div flex gap2 py1 pl5>
        <div text-lg w-10 pt-2>
            {{ offset }}
        </div>
        <div class="timemono" flex flex-row w-full justify-between>
            <div flex="~ col" text-left>
                <div class="cityname">
                    {{ city.replace(/_/g," ") }}
                </div>
                <div op50 leading-1em>
                    {{ region }}
                </div>
            </div>
            <div text-3xl font-mono>{{ time }}</div>
        </div>
    </div>
</template>
