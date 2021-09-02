function medirDistancia(coordx1, coordx2, coordy1, coordy2){
    operacion = Math.sqrt(Math.pow(coordx2-coordx1,2) + Math.pow(coordy2-coordy1,2));
    return(`La distancia a la que cualquiera de los planetas de la ruta N-14 se encuentra del planeta NABOO es de ${operacion} UA`)
}

console.log(medirDistancia(1,2,3,4));