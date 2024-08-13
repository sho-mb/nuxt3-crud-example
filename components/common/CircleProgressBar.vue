<template>
  <div class="relative w-fit">
    <CircleProgress
      :percent="limitOfContent"
      :size="40 as number"
      :viewport="true"
      :border-width="2"
      :border-bg-width="2"
      :fill-color="fillColor"
    />
    <div
      v-if="currentCharacters <= 21"
      class="text-sm w-fit h-fit absolute top-1/4 left-1/2 transform -translate-x-1/2"
    >
      {{ currentCharacters }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import CircleProgress from 'vue3-circle-progress'
import 'vue3-circle-progress/dist/circle-progress.css'

const props = withDefaults(defineProps<{
  characters: string
}>(), {
  characters: '',
})

const limitOfContent = computed(() => {
  const charCount = countCharacters(props.characters)
  const halfWidthProgress = (charCount / 280) * 100
  const fullWidthProgress = (charCount / 240) * 100
  return Math.min(halfWidthProgress, fullWidthProgress)
})

const currentCharacters = computed(() => {
  return 280 - countCharacters(props.characters)
})

const fillColor = computed(() => {
  if (currentCharacters.value < 21 && currentCharacters.value > 0) {
    return '#ffff00'
  }
  else if (currentCharacters.value <= 0) {
    return '#ff0000'
  }
  else {
    return '#288feb'
  }
})
</script>

<style>

</style>
