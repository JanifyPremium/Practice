<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="routerView">
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/provision">Provisionsrechner</RouterLink>
        <RouterLink to="/parkhaus">Parkhaus</RouterLink>
        <RouterLink to="/about">N/A</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

