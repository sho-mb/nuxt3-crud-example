<template>
  <div class="pt-1 border-opacity-10 border-x border-x-white h-screen">
    <UTabs
      :items="items"
      class="w-full"
    >
      <template #item="{ item }">
        <HomeComposeArea />
        <div>
          <div v-if="item.key === 'forYou'">
            Timeline 1
          </div>
          <div v-else-if="item.key === 'following'">
            Timeline 2
          </div>
          <div v-else-if="item.key === 'softwareEngineering'">
            Timeline 3
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<script lang="ts" setup>
const items = [{
  key: 'forYou',
  label: 'For you',
  description: 'Make changes to your account here. Click save when you\'re done.',
}, {
  key: 'following',
  label: 'Following',
  description: 'Change your password here. After saving, you\'ll be logged out.',
}, {
  key: 'softwareEngineering',
  label: 'Software Engineering',
  description: 'Change your password here. After saving, you\'ll be logged out.',
},
]
</script>

<style>

</style>
