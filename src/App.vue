<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavbarComponent from './components/Navbar.component.vue'
</script>

<template>
  <section>
    <NavbarComponent />
    <p>I am a root folder</p>
    <RouterView />
  </section>
</template>
