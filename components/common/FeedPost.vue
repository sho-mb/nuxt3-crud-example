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
        <HomeCommonDropdownMenu
          :id="props.id"
          v-model:modal="modal"
          v-model:targetId="targetId"
        />
      </div>
      <div class="w-full break-words">
        {{ discription }}
      </div>
      <div class="flex justify-between opacity-30 mt-3">
        <HomeCommonTweetReaction
          v-for="(icon, index) in icons"
          :key="index"
          :size="20"
          :name="icon.name"
          :fetch-path="icon.fetchPath"
          :tweet-id="id"
        />
        <!-- <div class="flex gap-3">
          <CommonIconFlex
            v-for="item in sharedAndBookmark"
            :key="item.name"
            :name="item.name"
            :size="item.size"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { icons } from '~/types/common/FeedPost/feed'

// import { sharedAndBookmark } from '~/types/common/FeedPost/feed'

const modal = defineModel<boolean>('modal')
const targetId = defineModel<number>('targetId')

const props = defineProps < {
  id: number
  discription: string
  postedAt: string
  account: {
    id: number
    username: string
    userId: string
    profileDisc: string | ''
    profileImgUrl: string | ''
    livingLocation: string
    createdAt: string
  }
}>()

const formattedData = ref<string>('')

formattedData.value = MMDDFormater(props.postedAt)
</script>

<style>

</style>
