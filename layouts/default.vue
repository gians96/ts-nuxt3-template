<script setup lang="ts">
import { routeLinks } from '~~/components/shared/link-routes';
</script>


<template >
  <v-app>
    <NavBar :links="routeLinks"></NavBar>
    <slot />
    <NuxtLink to="/"> Back to home </NuxtLink>
  </v-app>
</template>
<style>
body {
  font-family: "Poppins", sans-serif;
}

</style>