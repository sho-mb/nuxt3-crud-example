<template>
  <div class="flex items-center gap-8" @click="returnToFeed">
    <Icon
      name="codicon:arrow-left"
      size="20"
    />
    <div class="text-xl font-semibold">
      Post
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const returnToFeed = () => {
  router.back()
}
</script>

<style>

</style>
