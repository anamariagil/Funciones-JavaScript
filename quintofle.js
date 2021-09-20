let calcularSaldo = (nombre, numLicencias) => {
    let h=3500000;
    for (i=0; numLicencias>i; i++){
        h = (h+1500000)
    }
    return (`El salario de ${nombre} es de ${h - ((h * 5)/100)}`)
}

console.log(calcularSaldo("Juan José", 2))