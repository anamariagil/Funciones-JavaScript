function determinarNegativos(cantidad, ...energia) {
    let i = 0;
    let d = 0;    const enArr = energia;
    while (cantidad>i){
        if (enArr[i]<0){
            console.log(`El sable con ${enArr[i]} de energía es uno con energía negativa`)
            d++
        }
        i++
    }
    console.log (`De ${i} sables, ${d} de ellos tienen energía negativa`)
}

determinarNegativos(5, -5, 6, 7, 8, -9);