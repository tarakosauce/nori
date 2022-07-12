import { Timezone } from "../types";

export const allZones = ref<Timezone[]>([]);
export const currentZone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;

export const addToTimes = (zone: Timezone) => {
    allZones.value.push(zone)
  }

if (!allZones.value.length) {
  allZones.value.push(zone.find(i => i.name === currentZone));
}