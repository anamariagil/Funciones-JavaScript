function determinarNegativos(...energia) {
    let i = 0;
    let d = 0;
    while (energia.length>i){
        if (energia[i]<0){
            console.log(`El sable con ${energia[i]} de energía es uno con energía negativa`)
            d++
        }
        i++
    }
    console.log (`De ${i} sables, ${d} de ellos tienen energía negativa`)
}

determinarNegativos(5, -5, 6, 7, 8, -9);