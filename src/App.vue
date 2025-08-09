<script setup lang="ts">
  import { RouterView } from "vue-router"
  import NavbarOrganism from "./components/organisms/NavbarOrganism.vue"
  import ToastMolecule from "./components/molecules/ToastMolecule.vue"
</script>

<template>
  <section>
    <NavbarOrganism />
    <p>I am a root folder</p>
    <RouterView />
    <ToastMolecule />
  </section>
</template>
