<template>
  <div class="flex p-4 border-b border-opacity-20 border-white">
    <UAvatar
      :src="account.avatar"
      :alt="account.alt"
      size="md"
      class="w-fit"
    />
    <UForm
      :state="state"
      class="w-full"
      @submit.prevent="onSubmit"
    >
      <UTextarea
        v-model="state.discription"
        autoresize
        placeholder="What is happerning?!"
        variant="none"
      />
      <div class="border-b border-opacity-20 border-white mb-3" />
      <div class="flex ml-auto w-fit gap-4 items-center">
        <CommonCircleProgressBar
          :characters="state.discription"
        />
        <CommonPostButton
          size="xl"
          padding="py-2 px-4"
          name="Post"
          :disabled="state.discription.length <= 0 || isDisabled"
          type="submit"
        />
      </div>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { account } from '~/types/account'

const getInitialData = () => {
  return { discription: '' }
}

const state = ref(getInitialData())
const id = 1

const onSubmit = () => {
  $fetch(`/api/tweet/${id}`, {
    method: 'POST',
    body: state.value,
  })
  state.value = getInitialData()
}

const isDisabled = computed(() => {
  return countCharacters(state.value.discription) > Math.min(280, 240 * 2)
})
</script>

<style>

</style>
