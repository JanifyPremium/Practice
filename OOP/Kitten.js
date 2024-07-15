class Cat{
    constructor(color, age, name, mood){
        this.color = black;
        this.age = 3;
        this.name = Leni;
        this.mood = happy;
        }
    springen(){
        console.log("jumping");
    }
    
};
class Kitten extends Cat {
    constructor(color, age, name, mood){
        this.color = black;
        this.age = 3;
        this.name = Leni;
        this.mood = happy;
    }
    meow(){
        console.log("Meow");
        };

    laufen(){
        console.log("Rennt");
    }
};

const Leni= Object.create(Kitten); 

Leni.meow();
Leni.laufen();