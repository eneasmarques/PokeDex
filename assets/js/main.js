const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
let limit = 10;
let offset = 0;
const maxRecods = 151;

function loadMorePokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map((pokemon) => {
        return `
          <li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.number
                .toString()
                .padStart(3, "0")}</span>
              <span class="name">${pokemon.name}</span>

              <div class="detail">
              <ol class="types">
                  ${pokemon.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
              </ol>
              <img src="${pokemon.photo}"
                  alt="${pokemon.name}" />
              </div>
          </li>`;
      })
      .join("");
    pokemonList.innerHTML += newHtml;
  });
}

window.onload = () => {
  loadMorePokemonItens(offset, limit);
};

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  if (offset + limit >= maxRecods) {
    limit = maxRecods - offset;
    loadMoreButton.remove();
  }

  if (limit > 0) loadMorePokemonItens(offset, limit);
});
