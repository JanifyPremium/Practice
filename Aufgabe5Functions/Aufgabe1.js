var arrFreunde =["Lynn", 
            "Xenia",
            "Eva", 
            "Hannah",
            "Rebecca" 
        ] ;

var toRemove ;
var toAdd ;

function friend(arrFreunde) {
    return(arrFreunde);
    console.log(arrFreunde);
};

function removeFriend (arrFreunde) {
    var remover = arrFreunde.splice(1, 2);
    return(removeFriend);
    console.log(removeFriend);
}; 

function addFriend (arrFreunde, toAdd) {
    arrFreunde.push("Meryeme");
    return(arrFreunde);
};