<template>
  <div class="flex w-full p-4 border-b border-opacity-20 border-white">
    <div class="mr-2">
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="avotar"
        size="md"
        class="w-fit"
      />
    </div>
    <div class="w-[90%]">
      <div class="flex justify-between">
        <div class="flex gap-3 items-center">
          <div class="font-semibold">
            {{ account.username }}
          </div>
          <div class="text-md opacity-30 font-light">
            @{{ account.userId }}
          </div>
          <div class="text-md opacity-30 font-light">
            • {{ formattedData }}
          </div>
        </div>
        <div class="opacity-30">
          <Icon
            name="gg:more-alt"
            size="20"
          />
        </div>
      </div>
      <div class="w-full break-words"> {{ discription }} </div>
      <div class="flex justify-between opacity-30 mt-3">
        <CommonIconFlex
          v-for="icon in icons"
          :key="icon.name"
          :name="icon.name"
          :size="icon.size"
          :count="icon.count"
        />
        <div class="flex gap-3">
          <CommonIconFlex
            v-for="item in sharedAndBookmark"
            :key="item.name"
            :name="item.name"
            :size="item.size"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps < {
  id: number
  discription: string
  postedAt: string
  account: {
    id: number
    username: string
    userId: string
    profileDisc: string | null
    profileImgUrl: string
    livingLocation: string
    createdAt: string
  }
}>()

console.log(props)

const formattedData = ref<string>('')

formattedData.value = MMDDFormater(props.postedAt)

const icons = [
  {
    name: 'ri:chat-1-line',
    size: 20,
    count: 23,
  },
  {
    name: 'ri:repeat-fill',
    size: 20,
    count: 23,
  },
  {
    name: 'ri:heart-3-line',
    size: 20,
    count: 40,
  },
  {
    name: 'ri:rhythm-line',
    size: 20,
    count: 600,
  },
]

const sharedAndBookmark = [
  {
    name: 'ri:bookmark-line',
    size: 20,
  },
  {
    name: 'ri:upload-2-line',
    size: 20,
  },
]
</script>

<style>

</style>
