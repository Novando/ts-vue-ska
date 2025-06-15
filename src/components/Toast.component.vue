<script setup lang="ts">
import {useToaster} from '../stores/toaster.store.ts'
import {computed} from 'vue'
import CloseCircle from './svg/CloseCircle.svg.vue'


const toaster = useToaster()

const noties = computed(() => toaster.toasts)
</script>

<template>
  <section class="fixed bottom-4 right-4">
    <div
      v-for="(noty, key) in noties"
      :key="key"
      class="relative w-96 min-h-24 rounded-xl drop-shadow-md px-8 py-4 mb-4"
      :class="
        noty.type === 'ERR' ? 'bg-red-800 text-white' :
        noty.type === 'WARN' ? 'bg-amber-600 text-white' :
        noty.type === 'INFO' ? 'bg-sky-800 text-white' :
        'bg-green-700 text-white'
    ">
      <CloseCircle @click="toaster.delNoty(noty.id)" class="absolute right-4 top-4 w-6 cursor-pointer" />
      <div class="flex gap-2">
        <div>
          <p class="font-medium text-lg">{{ noty.title }}</p>
          <p>{{ noty.message }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>