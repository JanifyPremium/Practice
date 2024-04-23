<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      
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
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}


.routerView {
    margin-top: 90px;
}
</style>
