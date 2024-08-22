<template>
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
      <div
        :click="item.click"
        class="items-center flex gap-3"
      >
        <UIcon
          :name="item.icon"
          class="h-4 w-4 text-left"
          :class="item.class"
        />
        <div
          class="text-left font-semibold"
          :class="item.class"
        >
          {{ item.label }}
        </div>
      </div>
    </template>
  </UDropdown>
</template>

<script lang="ts" setup>
const modal = defineModel<boolean>('modal')
const targetId = defineModel<number>('targetId')

const props = defineProps<{
  id: number
}>()

const items = [
  [{
    label: 'Delete',
    icon: 'ic:sharp-delete-forever',
    class: 'text-red-500',
    click: () => {
      modal.value = true
      targetId.value = props.id
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
