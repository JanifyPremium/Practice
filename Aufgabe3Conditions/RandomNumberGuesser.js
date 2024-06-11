let attempt = 0;
let Number = ((Math.random()*100)+1);
let Eingabe = 0;
while (attempt <= 8){
    if (Eingabe == Number){
        attempt++;
        console.log("Du hast gewonnen");
    }
    else if (Eingabe< Number){
        attempt++;
        console.log("Deine Zahl ist zu niedrig");
    }
    else if (Eingabe> Number){
        attempt++;
        console.log("Deine Zahl ist zu hoch");
    }
    else{
        console.log("Falsche Eingabe");
    };
};