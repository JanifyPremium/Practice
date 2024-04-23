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

<style scoped>


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  position: fixed;
  left: 0%;
  top: 0%;
  padding: 0 1rem;
  display: flexbox;
  border-left: 1px solid var(--color-border);
  margin-top: 10px;
  
}
</style>
