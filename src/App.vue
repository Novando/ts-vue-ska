<script setup lang="ts">
  import { RouterView } from "vue-router"
  import NavbarComponent from "./components/NavbarComponent.vue"
  import ToastComponent from "./components/ToastComponent.vue"
</script>

<template>
  <section>
    <NavbarComponent />
    <p>I am a root folder</p>
    <RouterView />
    <ToastComponent />
  </section>
</template>
