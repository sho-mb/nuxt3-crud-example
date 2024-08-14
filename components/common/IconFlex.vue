<template>
  <div class="flex gap-1">
    <Icon
      :name="name"
      :size="size"
    />
    <div v-if="count" class="text-sm">{{ count }}</div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  name: string
  size: number
  count?: number | undefined
}>(),
{
  name: 'ri:chat-1-line',
  size: 20,
  count: undefined,
})
</script>

<style>

</style>
