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

        <UDropdown
          :items="items"
          :ui="{ item: { disabled: 'cursor-text select-text' }, width: 'w-72' }"
          :popper="{ offsetDistance: -30, placement: 'left-start' }"
        >
          <Icon
            name="gg:more-alt"
            size="20"
          />
          <template #item="{ item }">
            <div :click="item.click" class="items-center flex gap-3">
              <UIcon
                :name="item.icon"
                class="h-4 w-4 text-left"
                :class="item.class"
              />
              <div class="text-left font-semibold" :class="item.class">{{ item.label }}</div>
            </div>
          </template>
        </UDropdown>
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
    <UModal v-model="isOpen" :ui="{ width: 'w-[320px]', rounded: 'rounded-[20px]' } ">
      <div class="p-8">
        <Placeholder class="h-48">
          <div class="text-xl font-semibold">
            Delete post?
          </div>
          <div class="text-sm opacity-40 my-3">
            This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from search results.
          </div>
          <CommonPostButton
            name="Delete"
            :block="true"
            size="xl"
            color="red"
            type="submit"
            class="mb-4"
            @click="detelePost(props.id)"
          />
          <CommonPostButton
            name="Cancel"
            :block="true"
            size="xl"
            color="white"
            type="submit"
            @click="isOpen = false"
          />
        </Placeholder>
      </div>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import { icons, sharedAndBookmark } from '~/types/common/FeedPost/feed'

const isOpen = ref(false)

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

const formattedData = ref<string>('')

formattedData.value = MMDDFormater(props.postedAt)

const detelePost = async (id: number) => {
  const isDeleted = await $fetch(`/api/tweet/${id}`, {
    method: 'DELETE',
  })
  if (isDeleted) {
    isOpen.value = false
  }
}

const items = [
  [{
    label: 'Delete',
    icon: 'ic:sharp-delete-forever',
    class: 'text-red-500',
    click: () => {
      isOpen.value = true
    },
  },
  {
    label: 'Pin to your profil',
    icon: 'ic:baseline-push-pin',
    class: 'text-white',
    click: () => {
      console.log('Pin to your profil')
    },
  },
  {
    label: 'Highlight on your profile',
    icon: 'ic:baseline-star-rate',
    class: 'text-white',
    click: () => {
      console.log('Highlight on your profile')
    },
  },
  {
    label: 'Add/remove @xXkilin from Lists',
    icon: 'ic:outline-addchart',
    class: 'text-white',
    click: () => {
      console.log('Add/remove @xXkilin from Lists')
    },
  },
  {
    label: 'Change who can apply',
    icon: 'ic:outline-mode-comment',
    class: 'text-white',
    click: () => {
      console.log('Change who can apply')
    },
  },
  {
    label: 'View post engagements',
    icon: 'ic:baseline-equalizer',
    class: 'text-white',
    click: () => {
      console.log('View post engagements')
    },
  },
  {
    label: 'Embed post',
    icon: 'f7:chevron-left-slash-chevron-right',
    class: 'text-white',
    click: () => {
      console.log('Embed post')
    },
  },
  {
    label: 'View post analiytics',
    icon: 'i-heroicons-cog-8-tooth',
    class: 'text-white',
    click: () => {
      console.log('View post analiytics')
    },
  },
  {
    label: 'Request Community Note',
    icon: 'ic:outline-campaign',
    class: 'text-white',
    click: () => {
      console.log('Request Community Note')
    },
  },
  ],
]
</script>

<style>

</style>
