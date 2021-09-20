let separar = (codigo) => {
    const myArr = codigo.split(":");
    console.log(`El nombre del piloto es ${myArr[1]}, y la nave que conduce es ${myArr[0]}`);
}

separar("ARQ2555:Sara Bel-Sun");
separar("ARQ2556:Nodin Chavdri");
separar("ARQ2557:Finn");