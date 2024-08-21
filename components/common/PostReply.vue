<template>
  <div>
    <UForm
      :state="state"
      class="flex"
    >
      <UAvatar
        size="md"
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <UInput
        color="primary"
        variant="none"
        placeholder="Post your reply"
      />
    </UForm>
    <div class="mt-3 text-right">
      <CommonPostButton
        name="Reply"
        padding="px-4"
        text-color="text-white"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const state = reactive({
  reply: undefined,
})
</script>

<style>

</style>
