const modal = document.getElementById("modalDetails");
const exit = document.getElementsByClassName("close")[0];
const modalContent = document.getElementsByClassName("modal-content");

function convertEffectsToModal(effectsPokemon){
  const effects = `
  <p >${effectsPokemon.effect}</p>
  <p >${effectsPokemon.shortEffect}</p>
    `
    modalContent[0].innerHTML = effects
  
}

document.body.addEventListener("click", async (e) =>{
    if(e.target.id !== "" && e.target.id !== "pokemonList" && e.target.id !== "loadMoreButton" && e.target.id !== "modalDetails"){
        modal.style.display = "block";
        effects = await pokeApi.getEffects(Number(e.target.id))
        convertEffectsToModal(effects)
    }
} )


exit.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}