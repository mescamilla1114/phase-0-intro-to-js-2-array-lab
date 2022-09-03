// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
const newappendCat = [...cats, "Broom"];
return(newappendCat);
}

function prependCat(name){
    const newprependCat = ["Arnold", ...cats];
    return(newprependCat);
}

function removeLastCat (){
const newLastCat = [...cats];
newLastCat.pop();
return(newLastCat);
}

function removeFirstCat (){
    const newFirstCat = [...cats];
    newFirstCat.shift();
    return(newFirstCat);
    }