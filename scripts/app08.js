
// // Ejecicio 8
const buscaMax = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
const maximo = [];
let mayor = 0;

for (i = 0; i < buscaMax.length; i++) {
    mayor=0;
    for (j = 0; j < buscaMax[i].length; j++) {
        if (buscaMax[i][j] > mayor) {
            mayor = buscaMax[i][j];
        }
    }
    maximo.push(mayor);
} 

console.log(maximo);