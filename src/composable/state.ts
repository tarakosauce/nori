import { deflate } from "zlib";
import { Timezone } from "../types";

export const allZones = ref<Timezone[]>([]);
export const currentZone = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;

export const addToTimes = (zone: Timezone) => {
    allZones.value.push(zone)
  }

if (!allZones.value.length) {
  allZones.value.push(zone.find(i => i.name === currentZone));
}

export const remove = (zone: Timezone) => {
  allZones.value = allZones.value.filter(name => name !== zone)
}

export const move = (zone: Timezone, delta: 1 | -1) => {
  const i = allZones.value.indexOf(zone);
  if (i === -1) {
    return
  }

  const target = i + delta;
  const other = allZones.value[target];
  allZones.value[target] = zone;
  allZones.value[i] = other;
}