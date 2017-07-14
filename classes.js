function Shoe(brand, model) {
 this.brand = brand; 
 this.model = model;
}

var boosts = new Shoe("Adidas", "Yeezy Boost 350");
var stans = new Shoe("Adidas", "Stan Smiths");

function Superhero(heroName, realName, superpower) {
    this.herName = heroName;
    this.realName = realName;
    this.superpower = superpower;
    this.talk = function(){
        console.log("Hi, I'm " + heroName);
    }
}

var superman = new Superhero
("Superman", "Clark Kent", ["Flying", "Super Strength"]);
var spiderman = new Superhero
("Spiderman", "Peter Parker", ["Spidey Sense", "Web-Slinging", "Wall Climbing", "Super Strength"]);