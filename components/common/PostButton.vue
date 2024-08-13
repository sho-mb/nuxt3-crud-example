<template>
  <UButton
    :block="block"
    :size="size"
    color="sky"
    variant="solid"
    :class="padding"
    :ui="{ rounded: 'rounded-full' }"
    :to="path"
    :disable="disable"
  >
    <div class="text-white text-md font-bold">
      {{ name }}
    </div>
  </UButton>
</template>

<script lang="ts" setup>
import type { ButtonSize } from '/Users/kisho/eclipse-workspace/crud-example/node_modules/@nuxt/ui/dist/runtime/types/button'

withDefaults(
  defineProps<{
    size?: ButtonSize | undefined
    path?: string | undefined
    padding?: string | undefined
    name: string
    block?: boolean
    disable?: boolean
  }>(),
  {
    size: undefined,
    path: undefined,
    padding: undefined,
    name: 'Post',
    block: false,
    disable: false,
  },
)
</script>

<style>

</style>
