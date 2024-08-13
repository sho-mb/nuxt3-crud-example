<template>
  <div class="flex flex-grow">
    <CommonSideHeader />
    <main class="items-start flex-grow flex-shrink flex">
      <div class="w-[1050px] flex justify-between flex-grow flex-shrink">
        <div class="min-h-full justify-between items-stretch flex w-full">
          <div class="max-w-[600px] w-full flex-grow">
            <slot />
          </div>
          <CommonNewsBar />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
