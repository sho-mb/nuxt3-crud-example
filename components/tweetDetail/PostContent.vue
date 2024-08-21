<template>
  <div>
    <div>{{ props.discription }}</div>
    <div class="flex gap-2">
      <div
        v-for="(tag, index) in props.hashtags"
        :key="index"
      >
        <NuxtLink>
          {{ tag }}
        </NuxtLink>
      </div>
    </div>
    <div class="mt-4 opacity-30">
      {{ props.postedAt }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  discription: string
  hashtags?: string[]
  postedAt: string
}>()
</script>

<style>

</style>
