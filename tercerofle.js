let calcular = (...temperaturas) => {
    return (`La temperatura media de la luna de Endor es de ${((Math.max(...temperaturas)+Math.min(...temperaturas))/2)}`)
}

console.log(calcular(1,2,3));