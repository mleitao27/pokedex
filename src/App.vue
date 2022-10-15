<script setup>
import { useStore } from "vuex";
const store = useStore();
store.dispatch("fetchPokemons");
</script>

<template>
  <div
    class="
      hidden
      bg-type-normal
      bg-type-fire
      bg-type-water
      bg-type-electric
      bg-type-grass
      bg-type-flying
      bg-type-rock
      bg-type-steel
      bg-type-ground
      bg-type-bug
      bg-type-poison
      bg-type-ice
      bg-type-fighting
      bg-type-psychic
      bg-type-dark
      bg-type-ghost
      bg-type-dragon
      bg-type-fairy
    "
  />
  <RouterView />
</template>
