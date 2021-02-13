// Ejercicio 6
let valores6=[1,2,-10,4,7,6,7,30,-20,10];

minMax();

function minMax() {
    max=Math.max(...valores6);
    min=Math.min(...valores6);
    console.log(`[${min}], [${max}]`);
}