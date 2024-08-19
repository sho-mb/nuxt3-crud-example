<template>
  <div class="flex gap-1">
    <Icon
      :name="name"
      :size="size"
    />
    <div
      v-if="count"
      class="text-sm"
    >
      {{ count }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  name: string
  size: number
  tweetId: number
  fetchPath: string
}>(),
{
  name: 'ri:chat-1-line',
  size: 20,
  count: undefined,
})
const count = ref<number>()

try {
  const data = await $fetch<number>(`/api/${props.fetchPath}/${props.tweetId}`)
  count.value = data
}
catch (e) {
  console.log(e)
}
</script>

<style>

</style>
