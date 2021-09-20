function calcular(...temperaturas) {
    max = Math.max(...temperaturas);
    min = Math.min(...temperaturas);
    prom = (max+min)/2
    return (`La temperatura media de la luna de Endor es de ${prom}`)
}

console.log(calcular(1,2,3));