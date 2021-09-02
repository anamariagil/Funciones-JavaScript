calcularSaldo = (nombre, numLicencias) =>{
    let i=0;
    let h=3500000;
    while (numLicencias>i){
            h = (h+1500000)
        i++
    }
    saldo = h - ((h * 5)/100)
    return (`El salario de ${nombre} es de ${saldo}`)
}

console.log(calcularSaldo("Juan José", 2))