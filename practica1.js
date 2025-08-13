const readline = require('readline');

const rl = readline.createInterface({ 

     input: process.stdin,
     output: process.stdout
})

/*🧠 Sesión 1 – Lógica básica
Ejercicio 1 – Condicionales
Dado un número, decir si es positivo, negativo o cero.

📌 Pistas:

Entrada: un número.

Usa if, else if, else.

Recuerda cubrir los tres casos.*/

const numero = 10000;

if(numero < 0){
    console.log("el numero: ", numero, " es negativo")
}else if(numero === 0){
    console.log("el numero: ",numero, " es 0" )
}else{
    console.log("El numero :", numero, " es positivo")
}
console.log("===============================")

/*Mostrar todos los múltiplos de 5 entre 1 y 50, y al final decir cuántos múltiplos hay.

📌 Pistas:

Usa un for que recorra de 1 a 50.

Verifica con el operador %.

Usa una variable para contar. */

for(i=1; i<50; i++){
 
    if(i%5===0){
        console.log(i, " es un numero multiplo de 5")
    }else{
        console.log(i, " No es un numero multiplo de 5")
    }
}

console.log("========================================")

/*Pedir un número N y mostrar la suma de todos los números del 1 a N.

📌 Pistas:

Inicializa un acumulador en 0.

Suma en cada iteración.

Muestra el total al final.*/

rl.question("ingresa un numero,", (respuesta)=>{
    let suma = 0
    for(i=0; i <= respuesta; i++){
        
        suma += i
        console.log("se sumo ", i, "por ", i, " vez, total: ", suma)
    }
}) 
rl.close