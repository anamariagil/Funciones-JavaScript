function separar(codigo, i) {
    const myArr = codigo.split(":");
    return myArr[i];
}

console.log(`El nombre del piloto es ${separar("ARQ2555:Sara Bel-Sun", 1)}, y la nave que conduce es ${separar("ARQ2555:Sara Bel-Sun", 0)}`);
console.log(`El nombre del piloto es ${separar("ARQ2556:Nodin Chavdri", 1)}, y la nave que conduce es ${separar("ARQ2556:Nodin Chavdri", 0)}`);
console.log(`El nombre del piloto es ${separar("ARQ2557:Finn", 1)}, y la nave que conduce es ${separar("ARQ2557:Finn", 0)}`);