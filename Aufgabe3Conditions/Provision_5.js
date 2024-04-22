let Umsatz = 500000;
let Provision1 = Umsatz*2/100;
let Provision2 = Umsatz*3/100;
let Provision3 = Umsatz*5/100;

if (Umsatz <= 100000 ) {
    console.log(Provision1);
}
else if (Umsatz <= 500000) {
    console.log(Provision2);
}
else {
    console.log(Provision3);
};

