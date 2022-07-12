import { Timezone } from "../types";

export const allZones = ref<Timezone[]>([]);

export const addToTimes = (zone: Timezone) => {
    allZones.value.push(zone)
  }

