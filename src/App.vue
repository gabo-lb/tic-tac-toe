<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="flex justify-center pb-2">
      <RouterLink to="/" class="text-2xl text-slate-800">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
