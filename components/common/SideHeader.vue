<template>
  <header class="text-center flex-grow">
    <div class="w-[275px] ml-[60px]">
      <div class="h-screen">
        <div class="w-[275px] px-2">
          <div class="flex flex-col h-screen justify-between">
            <div class="flex items-start flex-col">
              <h1 class="p-2 pt-4">
                <Icon
                  name="i-flowbite:twitter-solid"
                  size="40"
                />
              </h1>
              <div class="mt-[2px] mb-1">
                <CommonSideMenuIteam
                  v-for="item in menuItems"
                  :key="item.id"
                  :path="item.path"
                  :size="item.size"
                  :icon-name="item.iconName"
                  :title="item.title"
                />
              </div>
              <CommonPostButton class="my-4"/>
            </div>
            <CommonUserAvator class="my-3" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { menuItems } from '~/types/menuItems'
</script>

<style>

</style>
