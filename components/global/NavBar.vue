<template>
  <v-app-bar class="px-3" color="transparent" flat density="compact" append>
    <v-avatar color="grey-darken-1" size="32"></v-avatar>

    <v-spacer></v-spacer>

    <v-tabs centered color="grey-darken-2">
      <v-tab v-for="link in links" :key="link" to="/app">
        {{ link }}
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <div v-for="btn in authBtn" :key="btn">
      <v-btn :variant="btn.variant" v-if="btn.active" :color="btn.color" :class="btn.colorText">
        {{ btn.name }}
      </v-btn>
    </div>

    <v-avatar
      class="hidden-sm-and-down"
      color="grey-darken-1"
      size="32"
      v-if="false"
    ></v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
    authBtn: [
      {
        name: "Inciar Sesion",
        active: true,
        color: "green-accent-4",
        variant: "text",
      },
      {
        name: "Cerrar Sesion",
        active: false,
        color: "default",
        variant: "text",
      },
      {
        name: "Resgistro",
        active: true,
        color: "green-accent-4",
        colorText:"text-white",
        variant: "flat",
      },
    ],
  }),
};
</script>
<style lang="scss">
</style>