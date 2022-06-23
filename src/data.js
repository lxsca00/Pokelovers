export const createPokemonCard = function(pokemon) { //Recibe un objeto del array 
  const {img, num, name} = pokemon //Se accede a la imagen, número y nombre del Pokemon
    return `
    <figure class="onePokemon">
      <p id="pokemonNumber"> ${num} </p>
      <p id="pokemonName"> ${name} </p>
      <img alt="This is a pokemon" src="${img}">
    </figure>`
}

export const createModal = function(pokemon){
  const {num, name, img, type, about} = pokemon;
  return `
    <div class="modal-container" id="modalContainer">
      <div class="modal">
        <p> ${num} ${name} </p>
        <div class="imgAndType">
          <img alt="This is a pokemon" src="${img}">
          <p> Type:${type}</p>
          <p> Generation I: Kanto</p>
        </div>
        <p>${about}</p>
      </div>
    </div>
    `
 }

export const filterByType = function (allPokemon, type) {
  let pokemonByType = allPokemon.filter(function (pokemon) {
    if (pokemon.type.includes(type)) {
      return pokemon
    }
  })
  return pokemonByType
}

export const createFilteredCards = function(filterArr){
  let newCards = filterArr.map(function(pokemon){
    return createPokemonCard(pokemon)
  })
  return newCards
}

export const pokeSearch = (allPokemon,name) => {
  let searchPokeName=allPokemon.filter(function(pokemon) {
    return pokemon.name.startsWith(name);
  })
  return searchPokeName;
}

export const sort = function (selectionTypeArray1,SelectSort) {
  let sortPokemon='';
  if(SelectSort=="orderAtoZ"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => a.name.localeCompare(b.name));
  }
  if(SelectSort=="orderZtoA"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => b.name.localeCompare(a.name));
  }
  if(SelectSort=="sortAscending"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => a.num-b.num);
  }
  if(SelectSort=="sortDescending"){ 
    sortPokemon= selectionTypeArray1.sort((a, b) => b.num-a.num);
  }
  return sortPokemon;
}; 
