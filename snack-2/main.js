/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

const zucchine = [
    { varieta: "var1", peso: 30, lunghezza: 15 },
    { varieta: "var2", peso: 32, lunghezza: 14 },
    { varieta: "var3", peso: 34, lunghezza: 11 },
    { varieta: "var4", peso: 36, lunghezza: 16 },
    { varieta: "var5", peso: 31, lunghezza: 14 },
    { varieta: "var6", peso: 36, lunghezza: 15 },
    { varieta: "var7", peso: 34, lunghezza: 14 },
    { varieta: "var8", peso: 38, lunghezza: 18 },
    { varieta: "var9", peso: 31, lunghezza: 16 },
    { varieta: "var10", peso: 35, lunghezza: 19 }
];

const zucchineShort = zucchine.filter(zucchina => zucchina.lunghezza <= 15);
console.log(zucchineShort);

const zucchineLong = zucchine.filter(zucchina => zucchina.lunghezza > 15);
console.log(zucchineLong);

/**
 * La funzione estrae i pesi degli oggetti nell'array di input 
 * e ne restituisce la somma
 * @param {array} objects L'array di oggetti
 * @returns 
 */
function weightSum(objects) {

    let sum = 0;

    objects.forEach(object => {
        sum += object.peso;
    });

    return sum
}

console.log(`Le zucchine corte pesano ${weightSum(zucchineShort)} grammi`);
console.log(`Le zucchine lunghe pesano ${weightSum(zucchineLong)} grammi`);