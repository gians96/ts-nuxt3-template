<script setup lang="ts">
//const { data: mountains, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains')
///////////////////////////////////////////////////////////////////////
//! 1 uso de Componibles, se puede usar con el fecth
// import { useCharacters } from '~/composables/useCharacters';
// const { pendingRM, errorRM, characters, refreshRM } = await useCharacters()
//! 2 useFetch
import type { Character, Result } from '~/interfaces/Character';
import type { User } from '~/interfaces/User';
//Esta API en lado del servidor maneja una configuracion para cache en disco
const { data: characters, pending: pendingRM, error: errorRM, refresh: refreshRM } = await useFetch<Character>('https://rickandmortyapi.com/api/character', { method: 'GET' })

//Es una API simple
const { data: usersTS, pending: pendingTS, error: errorTS, refresh: refreshTS } = await useFetch<User[]>('https://template-api-rest-ts-production.up.railway.app/test', { method: 'GET' })



//Resfresca en especifico la data useFetch, useAsyncData
// const { data: characters, pending: pendingRM, error: errorRM } = await useLazyAsyncData<Character>('characters', () => $fetch('https://rickandmortyapi.com/api/character'))
// const refreshRM = () => refreshNuxtData('characters')

//Resfresca toda la data useFetch, useAsyncData
const refreshing = ref(false)
const refreshAll = async () => {
  refreshing.value = true
  try {
    await refreshNuxtData()
  } finally {
    refreshing.value = false
  }
}
</script>

<template>
  <v-main>
    <v-container>
      <v-row cols="12" sm="2">
        <div v-if="pendingRM">Loading...</div>
        <div v-if="errorRM">Error</div>
        <!-- <v-btn @click="refreshRM">Refresh (con cache)</v-btn> -->
        <v-btn :disabled="refreshing" @click="refreshAll"> Refetch All Data</v-btn>
      </v-row>
      <v-row v-if="!pendingTS" cols="12" sm="2">
        <ul>
          <li v-for="{ name, _id } of usersTS" :key="_id">
            <pre class="text-left"><code>{{ name }}</code></pre>
          </li>
        </ul>
      </v-row>
      <v-row v-if="!pendingRM" cols="12" sm="2">
        <ul>
          <li v-for="{ id, name } of characters?.results" :key="id">
            <pre class="text-left"><code>{{ name }}</code></pre>
          </li>
        </ul>

      </v-row>
    </v-container>
  </v-main>
</template>



<style scoped></style>