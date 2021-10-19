let alunos = 10
let lista_de_alunos = ["Jullys", "Elen", "Frederico", "Dania", "Ismael", "Rafael", "Pedro", "Odirley", "Thiago", "Lídia"]

/*console.log ("Jullys")
console.log ("Jullys")
console.log ("Jullys")
console.log ("Jullys")*/

for (let contador = 0; contador < lista_de_alunos.length; contador ++) {
    //console.log (contador)

    if (contador == 0) {
        console.log (contador + ": Zero") //concatenação
    } else if (contador % 2 == 1) {// % (resto) se a divisão interia por 2 for igual a 1 = Impar
        console.log (`${contador}: Ímpar`) // Interpolação - Use `${variável}
    } else {
        console.log(`${contador}: Par`)
    }

}

// let contador = 0

// while (contador < lista_de_alunos.length) {

//     if (contador == 0) {
//         console.log(contador + ": Zero") //concatenação
//     } else if (contador % 2 != 0) {// % (resto) se a divisão interia por 2 for igual a 1 = Impar
//         console.log(`${contador}: Ímpar`) // Interpolação - Use `${variável}
//     } else {
//         console.log(`${contador}: Par`)
//     }
    
//     contador++
// }
