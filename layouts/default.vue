<template>
  <div class="flex flex-grow">
    <CommonSideHeader />
    <main class="w-[1050px] flex justify-between">
      <div class="max-w-[600px]">
        <slot />
      </div>
      <CommonNewsBar />
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
