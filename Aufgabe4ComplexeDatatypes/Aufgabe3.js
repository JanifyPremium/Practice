var min = 1;
var max = 49;
var x = Math.floor(Math.random() * (max - min)) + min;
var Lotto =[];
var attempt = 0; 

while (attempt<6){
    attempt ++;
    var x = Math.floor(Math.random() * (max - min)) + min;
    Lotto.push(x);

};
    //console.log(Lotto);