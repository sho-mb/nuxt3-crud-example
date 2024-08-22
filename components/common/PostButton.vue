<template>
  <UButton
    :block="block"
    :size="size"
    :color="color"
    variant="solid"
    :class="padding"
    :ui="{ rounded: 'rounded-full' }"
    :to="path"
    :disable="disable"
    :type="type"
  >
    <div
      class="text-md font-bold"
      :class="textColor"
    >
      {{ name }}
    </div>
  </UButton>
</template>

<script lang="ts" setup>
import type { ButtonSize, ButtonColor } from '/Users/kisho/eclipse-workspace/crud-example/node_modules/@nuxt/ui/dist/runtime/types/button'

withDefaults(
  defineProps<{
    size?: ButtonSize | undefined
    path?: string | undefined
    padding?: string | undefined
    name: string
    block?: boolean
    disable?: boolean
    type?: string
    textColor?: string
    color?: ButtonColor | undefined
  }>(),
  {
    size: undefined,
    path: undefined,
    padding: undefined,
    name: 'Post',
    block: false,
    disable: false,
    type: 'submit',
    color: 'sky',
  },
)
</script>

<style>

</style>
