import axios from "axios";

export default {
  state: {
    pokemons: null,
    pokemon: null,
    total: 0,
    next: null,
    previous: null,
  },
  mutations: {
    SET_POKEMONS(state, pokemons) {
      if (state.pokemons) state.pokemons.push(pokemons);
      else state.pokemons = pokemons;
    },
    SET_POKEMON(state, pokemon) {
      state.pokemon = pokemon;
    },
    SET_TOTAL(state, total) {
      state.total = total;
    },
    SET_NEXT(state, next) {
      state.next = next;
    },
    SET_PREVIOUS(state, previous) {
      state.previous = previous;
    },
  },
  actions: {
    fetchPokemons({ commit, state }) {
      return axios
        .get(state.next ?? "https://pokeapi.co/api/v2/pokemon")
        .then(({ data }) => {
          commit("SET_TOTAL", data.count);
          commit("SET_POKEMONS", data.results);
          commit("SET_NEXT", data.next);
          commit("SET_PREVIOUS", data.previous);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchPokemon({ commit }, pokemonId) {
      return axios
        .get(
          "https://pokeapi.co/api/v2/pokemon/" +
            (pokemonId < 906 ? pokemonId : parseInt(pokemonId) + 9096)
        )
        .then(({ data }) => {
          commit("SET_POKEMON", data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  getters: {
    getPokemontHp(state) {
      const hpStat = state.pokemon.stats.filter((stat) => {
        return stat.stat.name === "hp";
      });
      return hpStat[0].base_stat;
    },
    getPokemonType(state) {
      return state.pokemon.types.map((type) => {
        return type.type.name;
      });
    },
    getPokemonGeneration(state) {
      return state.pokemon.game_indices.length
        ? state.pokemon.game_indices[0].version.name
        : null;
    },
  },
};
