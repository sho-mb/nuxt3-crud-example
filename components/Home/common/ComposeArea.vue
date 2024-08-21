<template>
  <div class="flex p-4 border-b border-opacity-20 border-white">
    <UAvatar
      :src="accountData.avatar"
      :alt="accountData.alt"
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
        :placeholder="props.placeholder"
        variant="none"
        @click="isActive = true"
      />
      <div
        v-if="isActive"
        class="border-b border-opacity-20 border-white mb-3"
      />
      <div class="flex ml-auto w-fit gap-4 items-center">
        <CommonCircleProgressBar
          v-if="isActive"
          :characters="state.discription"
        />
        <CommonPostButton
          size="xl"
          padding="py-2 px-4"
          name="Post"
          text-color="text-white"
          :disabled="state.discription.length <= 0 || isDisabled"
          type="submit"
        />
      </div>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { accountData, type Account } from '~/types/account'

const props = defineProps<{
  state: Record<string, string>
  placeholder: string
  account: Account
}>()
const isActive = ref(false)
const model = defineModel<string>()

console.log(props.account)

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
