<template>
  <div class="flex gap-1">
    <div
      class="flex gap-1 relative transition-opacity duration-300"
      :class="{
        'hover:opacity-100 opacity-30': true,
        'reply': isReply,
        'retweet': isRetweet,
        'like': isLike,
      }"
    >
      <Icon
        :name="name"
        :size="size"
      />
      <div
        class="rounded-full w-10 h-10 absolute transition-opacity duration-300 -left-1/2 -top-1/2"
        :class="{
          'bg-blue-500 opacity-0 hover:opacity-20': isReply,
          'bg-green-500 opacity-0 hover:opacity-20': isRetweet,
          'bg-red-500 opacity-0 hover:opacity-20': isLike,
        }"
      />
    </div>
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
const isReply = ref(false)
const isRetweet = ref(false)
const isLike = ref(false)

if (props.fetchPath === 'reply') {
  isReply.value = true
}
else if (props.fetchPath === 'retweet') {
  isRetweet.value = true
}
else if (props.fetchPath === 'like') {
  isLike.value = true
}

try {
  const data = await $fetch<number>(`/api/${props.fetchPath}/${props.tweetId}`)
  count.value = data
}
catch (e) {
  console.log(e)
}
</script>

<style>
.reply:hover {
  color: skyblue;
  opacity: 1;
}
</style>
