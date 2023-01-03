<template >
  <v-app>
    <NavBar></NavBar>
    <slot />
    <NuxtLink to="/"> Back to home </NuxtLink>
  </v-app>
</template>
<style>
body {
  font-family: "Poppins", sans-serif;
}

</style>