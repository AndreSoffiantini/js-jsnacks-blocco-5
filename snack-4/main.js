/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];

console.log(array1);
console.log(array2);

function fuseArrays(array1, array2) {

    if (array1.length !== array2.length) {

        alert("Gli array devono avere la stessa lunghezza")
        return

    }

    const newArray = [];

    array1.forEach((element1, i) => {

        newArray.push(element1);
        newArray.push(array2[i]);

    });

    console.log(newArray);

    return newArray

}

fuseArrays(array1, array2);