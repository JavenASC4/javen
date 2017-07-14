var nestedArray = [
    ["Charizard", "Fire", 200, 120, 150, "False"]
    ["Umbra", "Dark", 120, 90, 100, "False"]
    ["Pikachu", "Lightning", 100, 60, 75, "False"]
    ["Raichu", "Lighting", 120, 80, 95, "False"]
    ["Blastoise", "Water", 190, 110, 140, "False"]
    ["Venasaur", "Grass", 220, 140, 170, "False"]
];

for (var i = 0; i < nestedArray.length; i++) {
    for (var j = 0; j < nestedArray[i].length; j++) {
        console.group(nestedArray[i][j]);
    }
}