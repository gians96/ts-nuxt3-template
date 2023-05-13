<script setup lang="ts">
// definePageMeta({
//   pageTransition: {
//     name: 'intro'
//   }
// })
</script>

<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <h1 class="title">Intro</h1>
          <h2 class="subtitle">This is intro page.</h2>
          <div class="links">
            <nuxt-link to="/" class="button--green">Index</nuxt-link>
            <nuxt-link to="/test" class="button--grey">Test</nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<style lang="scss">
$t-duration: 800ms;
$t-delay: 300ms;

.intro-enter-active,
.intro-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #2e2e2e;
  }

  &::after {
    top: 50%;
    background-color: #2e2e2e;
  }
}

.intro-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.intro-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.intro-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.intro-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.intro-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>