var pokemon = [
    charizard = {
        atk: 100,
        def: 200,
        hp: 150,
        legend: true,
        name: "Charizard",
        type: "Fire",
    }
    ,
    pikachu = {
        atk: 110,
        def: 210,
        hp: 180,
        legend: false,
        name: "Pikachu",
        type: "Lightning",
    }
    ,
    blastoise = {
        atk: 200,
        def: 400,
        hp: 350,
        legend: true,
        name: "Blastoise",
        type: "Water",
    }
    ,
    raichu = {
        atk: 170,
        def: 220,
        hp: 130,
        legend: false,
        name: "Raichu",
        type: "Lightning",
    }
    ,
    venasaur = {
        atk: 400,
        def: 800,
        hp: 550,
        legend: true,
        name: "Venasaur",
        type: "Grass",
    }
    ,
    mewtwo = {
        atk: 900,
        def: 1000,
        hp: 700,
        legend: false,
        name: "Mewtwo",
        type: "Legendary",
    }];

// function printRoster() {
//     for (var i = 0; i < pokemon.length; i++) {
//         console.log(pokemon[i]);
//     }
// };
// printRoster();

// function pokemonAttacked() {
//     for (var i = 0; i < pokemon.length; i++) {
//         pokemon[i].hp = pokemon[i].hp - 10;
//         console.log(pokemon[i]);
//     }
// };
// pokemonAttacked();

function rand(num) {
    //Returns a random integer between 0 and num 
    var x = num * Math.random();
    var result = Math.floor(x);
    return result;
}

//Selects random hp and subtracts 10
function randomPokemonAttacked() {
    var result = rand(pokemon.length)
    pokemon[result].hp = pokemon[result].hp - 10
    console.log(pokemon[result])
}
randomPokemonAttacked();
