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
        v-model="model"
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

const props = defineProps<{
  state: Record<string, string>
}>()

const model = defineModel<string>()

// Emitの定義
const emit = defineEmits<{
  (e: 'submit'): void
}>()

const isDisabled = computed(() => {
  return countCharacters(props.state.discription) > Math.min(280, 240 * 2)
})

const onSubmit = () => {
  emit('submit')
}
</script>

<style>

</style>
