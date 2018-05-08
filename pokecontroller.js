function PokeController(){

var pokeService= new pokeService();


function drawPokemon(chars){

var template = '<ul>'

for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    template+= `
    <li onclick="app.controllers.pokeController.getPokemon('${chars.url}')">${chars.name}<li>
    `;
    }
    template+="</ul>"; 
    document.getElementById("pokemons").innerHTML= template
}


this.getPokemon = function getPokemon(url){
    pokeService.getPokemon(url, drawPokemon)
}


pokeService.getCollection("pokemon", drawPokemon);













}