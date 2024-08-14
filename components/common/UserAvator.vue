<template>
  <div class="flex items-center w-[90%] justify-between p-3">
    <div class="flex">
      <UAvatar
        size="md"
        :src="account.avatar"
        :alt="account.alt"
      />
      <div class="text-left text-sm ml-4">
        <div class="font-bold">
          {{ account.accName }}
        </div>
        <div class="opacity-40">
          {{ account.userId }}
        </div>
      </div>
    </div>
    <NuxtLink>
      <Icon
        name="gg:more-alt"
        size="20"
      />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { account } from '~/types/account'
</script>

<style>

</style>
