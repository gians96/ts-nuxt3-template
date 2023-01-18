<script setup lang="ts">
const counter = ref(4);
const increase = () => {
  counter.value++;
};
</script>
<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <p>{{ counter }}</p>
          <v-btn @click="increase()">+1</v-btn>
          <LazySharedTestShared title="Hola Mundo"></LazySharedTestShared>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
</style>