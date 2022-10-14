<script setup>
import { useStore } from "vuex";
const store = useStore();
store.dispatch("fetchPokemons");
</script>

<template>
  <RouterView />
</template>
