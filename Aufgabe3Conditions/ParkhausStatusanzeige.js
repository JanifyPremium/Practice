
let Auslastung = 500/95*100;
let AusfahrtBlock = true;
let Angemietet = true;


if ( Auslastung >= 500/95*100 && AusfahrtBlock === false && Angemietet === false){
    console.log("Parkhaus belegt");
}
else if (Auslastung< 500/95*100 && AusfahrtBlock === false && Angemietet === false){
    console.log("Parkhaus frei");
}
else {
    console.log("Parkhaus gesperrt");
};

