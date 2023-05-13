<script setup lang="ts">
import { useTheme } from "vuetify";
// meta
definePageMeta({
  layout: "default",
});
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark
    ? "myCustomLightTheme"
    : "dark");
</script>
<template lang="">
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="268">
            <!--  -->{{ theme.global.current.value.dark }}
            <v-btn @click="toggleTheme">toggle theme</v-btn>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="8">
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="268">
            <!--  -->
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
