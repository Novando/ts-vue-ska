<script setup lang="ts">

import {envConfig} from "../configs/config.config.ts";
</script>

<template>
  <p>Hello From 1st Page</p>
  <p>sekarang environmentnya: <b>{{ envConfig.env }}</b></p>
</template>