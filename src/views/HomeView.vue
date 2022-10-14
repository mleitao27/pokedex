<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const randomPokemon = () => {
  store.dispatch("fetchPokemon", Math.floor(Math.random() * total.value));
};

const total = computed(() => {
  return store.state.pokemon.total;
});

const pokemon = computed(() => {
  return store.state.pokemon.pokemon;
});

const hp = computed(() => {
  return store.getters.getHp;
});

const types = computed(() => {
  return store.getters.getType;
});
</script>

<template>
  <div
    class="bg-red-300 w-24 text-center hover:bg-red-600 cursor-pointer rounded"
    @click="randomPokemon"
  >
    Random
  </div>
  <div v-if="pokemon">
    <img
      :src="pokemon.sprites.other['official-artwork'].front_default"
      alt="pokemon"
    />
    <p>{{ pokemon.name }}</p>
    <p>Hp: {{ hp }}</p>
    <div class="flex items-center">
      <div v-for="type in types" :key="type" class="bg-red-300 px-1 mr-2">{{ type }}</div>
    </div>
  </div>
</template>
