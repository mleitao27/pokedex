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
  return store.getters.getPokemontHp;
});

const types = computed(() => {
  return store.getters.getPokemonType;
});

const generation = computed(() => {
  return store.getters.getPokemonGeneration;
});
</script>

<template>
  <div class="min-h-screen bg-primary p-6">
    <div
      class="
        bg-pokegrey
        w-32
        px-2
        py-2
        text-center
        hover:bg-pokered
        cursor-pointer
        rounded-full
        mb-6
        mx-auto
        text-xl
        font-medium
      "
      @click="randomPokemon"
    >
      Random
    </div>
    <div v-if="pokemon">
      <div class="bg-secondary w-2/3 lg:w-max p-4 rounded-3xl mx-auto">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          alt="pokemon"
        />
      </div>
      <div class="flex items-center justify-center py-6">
        <p class="text-white mr-4 text-xl">
          {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
        </p>
        <div
          v-for="type in types"
          :key="type"
          :class="`bg-type-${type}`"
          class="px-1 mr-2 text-lg rounded-lg"
        >
          {{ type }}
        </div>
      </div>
      <div class="text-white text-center">
        <p>Hp: {{ hp }}</p>
        <p v-if="generation">
          First appearance: Pokemon
          {{ generation.charAt(0).toUpperCase() + generation.slice(1) }}
        </p>
      </div>
    </div>
  </div>
</template>
