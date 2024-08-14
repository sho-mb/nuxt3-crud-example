<template>
  <div class="max-w-full py-1">
    <NuxtLink :to="path">
      <div class="flex items-center w-full p-3 flex-grow">
        <Icon
          :name="iconName"
          :size="size"
        />
        <div class="text-xl ml-5 mr-4">
          {{ title }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  path: string
  size: string
  iconName: string
  title: string
}>()
</script>

<style>

</style>
