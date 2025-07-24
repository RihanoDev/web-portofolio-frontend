<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue'
import './styles/variables.css'
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: white;
  color: #111827;
}
</style>
