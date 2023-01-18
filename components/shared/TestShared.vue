<script setup lang="ts">
//const props = defineProps({ title: { type: String, default: "Hola mundo" } });
interface Props {
  title?: string;
}
const props = defineProps<Props>();
</script>
<template>
  <p>{{ props.title || "no Title" }}</p>
</template>
