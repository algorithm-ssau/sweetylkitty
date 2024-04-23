<script setup>
import HeaderMenu from './components/HeaderMenu.vue';
import Footer from './components/Footer.vue';
import MainApp from './components/Main.vue'
</script>

<template>
  <HeaderMenu />
  <MainApp />
      
  <Footer />
</template>

<style scoped>
  body {
      margin: 0;
      padding: 0;
      height: fit-content;
      display: block;
      position: absolute;
      width: 100%;
    
  }
</style>
