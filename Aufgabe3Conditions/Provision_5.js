let Umsatz = 2000000;
let Provision1 = Umsatz*2/100;
let Provision2 = Umsatz*3/100;
let Provision3 = Umsatz*5/100;
let Fixum = 1500;
let Endgehalt1 = Fixum+ Provision1; 
let Endgehalt2 = Fixum+ Provision2; 
let Endgehalt3 = Fixum+ Provision3; 

if (document.getElementById(Umsatz) <= 100000 ) {
    console.log(Endgehalt1);
}
else if (Umsatz <= 500000 && Umsatz > 100000) {
    console.log(Endgehalt2);
}
else {
    console.log(Endgehalt3);
};

