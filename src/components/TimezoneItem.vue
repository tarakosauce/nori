<script setup lang="ts">
    import { Timezone } from "../types";

    const { timezone } = defineProps<{
        timezone: Timezone
    }>()

    const region = computed(() => timezone.name.split('/')[0]);
    const city = computed(() => timezone.name.split('/')[1]);
    const offset = computed(() => timezone.offset > 0 ? `+${timezone.offset}` : timezone.offset);
</script>


<template>
    <div flex gap2 hover:bg-green-500 py1>
        <div text-lg w-10>
            {{ offset }}
        </div>
        <div flex="~ col" text-left>
            <div text-xl>
                {{ city }}
            </div>
            <div op50 leading-1em>
                {{ region }}
            </div>
        </div>
    </div>
</template>