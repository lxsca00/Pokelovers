import {createPokemonCard, filterByType, sort, createFilteredCards, pokeSearch} from './data.js';

import data from './data/pokemon/pokemon.js';

const allPokemon = data.pokemon //Data de todos los pokemon y características

const container = document.querySelector('.pokemonContainer');

const selectionType = document.querySelector('.selectionByType');

const sortPoke=document.querySelector('.sort');

const searchInput = document.querySelector('.card-search');

document.getElementById('goPokedex').addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".formWelcome").style.display = "none";
    document.getElementById("pokedex").style.display = "block";
})

const pokemonCards = allPokemon.map(function(pokemon){ 
    return createPokemonCard(pokemon)
})

container.insertAdjacentHTML("afterbegin",pokemonCards.join(''))

let selectedType='';

selectionType.addEventListener('change', function (){
    selectedType = this.options[this.selectedIndex].value;
        if(selectedType === ""){
            return container.innerHTML=pokemonCards.join('')
        } else {
            return container.innerHTML= createFilteredCards(filterByType(allPokemon, selectedType)).join('')
        }
    }
)

sortPoke.addEventListener('change',function(){
    let selectSort= this.options[this.selectedIndex].value;
        if(selectedType === ""){
            return container.innerHTML= createFilteredCards(sort(allPokemon,selectSort)).join('')
        } else {
            return container.innerHTML= createFilteredCards(sort(filterByType(allPokemon, selectedType), selectSort)).join('')
        } 
    }
)

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value.toLowerCase();
  const result =pokeSearch(allPokemon, inputValue);
        if (inputValue.length > 0 && result.length > 0) {
            container.innerHTML= (createFilteredCards(result)).join('');
        } else if (inputValue.length > 0 && result.length === 0) {
            container.textContent = 'The data of this pokemon is not currently available';
        } else {
            container.innerHTML= (createFilteredCards(result)).join('');
        }
    }
);

//Armando el modal


let insertModals = document.querySelector('.firstModalContainer')

let modalContainer = document.querySelector('.modal-container');   

container.addEventListener('click', function(event){
    event.target
    console.log(modalContainer)
   /*const {num, name, img, type, about} = allPokemon[0]
    console.log( `<div class="modal-container" id="modalContainer">
        <div class="modal">
      <p> ${num} ${name} </p>
      <div class="imgAndType">
        <img alt="This is a pokemon" src="${img}">
        <p> Type:${type}</p>
        <p> Generation I: Kanto</p>
      </div>
      <p>${about}</p>
    </div>
  </div>`)*/
})

//Fin del armado del modal