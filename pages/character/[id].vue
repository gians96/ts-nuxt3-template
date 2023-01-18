<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>

<template>
  <v-main>
    <v-container>
      <v-row cols="12" sm="2">
        <p>{{ route.params.id }}</p></v-row
      >
    </v-container>
  </v-main>
</template>


<style scoped>
</style>