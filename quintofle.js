let calcularSaldo = (nombre, numLicencias) =>{
    let i=0;
    let h=3500000;
    while (numLicencias>i){
            h = (h+1500000)
        i++
    }
    return (`El salario de ${nombre} es de ${h - ((h * 5)/100)}`)
}

console.log(calcularSaldo("Juan José", 2))