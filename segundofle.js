let separar = (...codigo) => {
    let i=0
    while (codigo.length>i){
        const myArr = codigo[i].split(":");
        console.log(`El nombre del piloto es ${myArr[1]}, y la nave que conduce es ${myArr[0]}`);
        i++
    }
}

separar("ARQ2555:Sara Bel-Sun", "ARQ2556:Nodin Chavdri", "ARQ2557:Finn")