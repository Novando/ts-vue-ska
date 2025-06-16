<script setup lang="ts">
  import { useToaster } from "../stores/toaster.store.ts"


  const toaster = useToaster()

  function popErrNoty() {
    toaster.notyErr("The Error Notification")
  }

  function popWarnNoty() {
    toaster.notyWarn("The Warn Notification")
  }

  function popInfoNoty() {
    toaster.notyInfo("The Info Notification")
  }
</script>

<template>
  <main>
    <p>Hello From 2nd Page</p>
    <button @click="popErrNoty">
      Test Error Noty
    </button>
    <button @click="popWarnNoty">
      Test Warn Noty
    </button>
    <button @click="popInfoNoty">
      Test Info Noty
    </button>
  </main>
</template>
