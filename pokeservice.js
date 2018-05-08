function pokeService(){

    var baseUrl = "https://pokeapi.co/api/v2/pokemon/"

    this.getCollection = function getCollection(collection, cb){
        $.get(baseUrl+collection)
        .then(data=>{
            var res= JSON.parse(data).results
            cb(res)
        })
    }

this.getPokemon = function getPokemon (url, cb){
    $.get(url)
    .then(data=>{
        var res =JSON.parse(data)
        cb(res)
    })
}
























}