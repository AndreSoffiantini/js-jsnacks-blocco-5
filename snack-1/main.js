/* Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    { varieta: "var1", peso: 30, lunghezza: 15 },
    { varieta: "var2", peso: 32, lunghezza: 14 },
    { varieta: "var3", peso: 34, lunghezza: 11 },
    { varieta: "var4", peso: 36, lunghezza: 16 },
    { varieta: "var5", peso: 31, lunghezza: 14 },
    { varieta: "var6", peso: 36, lunghezza: 15 },
    { varieta: "var7", peso: 34, lunghezza: 14 },
    { varieta: "var8", peso: 38, lunghezza: 11 },
    { varieta: "var9", peso: 31, lunghezza: 16 },
    { varieta: "var10", peso: 35, lunghezza: 14 }
];

let weightSum = 0;

zucchine.forEach(zucchina => {
    weightSum += zucchina.peso;
});

console.log(`Le zucchine pesano in totale ${weightSum} grammi`);