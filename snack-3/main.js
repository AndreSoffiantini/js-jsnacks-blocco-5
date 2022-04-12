/* Scrivi una funzione che accetti una stringa come argomento 
e la ritorni girata (es. Ciao -> oaiC) */

// Prima soluzione

/* function reverseString(input_string) {

    const string_array = Array.from(input_string);

    const reverse_string_array = string_array.reverse();

    return reverse_string_array.toString();

}

console.log(reverseString("ciao")); */

// Seconda soluzione

function reverseString(input_string) {

    return input_string.split("").reverse().join("")
}

console.log(reverseString("ciao"));