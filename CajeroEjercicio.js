/**🏦 Reto: Cajero Automático con Restricciones Extra
Reglas del problema:
Solo entrega billetes de 50.000, 20.000 y 10.000.
Si el monto solicitado es mayor a 200.000, el cajero no puede entregar más de 3 billetes de 50.000.
El cajero debe mostrar cuántos billetes de cada denominación se entregaron.
Si el monto no es múltiplo de 10.000, mostrar un error.

📌 Ejemplo de salida:
Ingrese el monto: 280000
Billetes de 50.000: 3
Billetes de 20.000: 4
Billetes de 10.000: 0
Retiro completo */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//solucion sin tanto complique
/*
rl.question("Ingrese el valor a retirar (multiplo de 10000)", (respuesta) => {
  let restante = parseInt(respuesta);
  const billetes = [50000, 20000, 10000];
  const conteos = { 50000: 0, 20000: 0, 10000: 0 };

  if (restante % 10000 === 0) {
    if (restante <= 200000) {
      for (let billete of billetes) {
        while (billete <= restante) {
          restante -= billete;
          conteos[billete]++;
          console.log("se pago: ", billete, "falta: ", restante);
        }
      }
    } else {
      for (let billete of billetes) {
        if (billete === 50000) {
          while (billete <= restante && conteos[50000] < 3) {
            restante -= billete;
            conteos[billete]++;
            console.log("se pago: ", billete, "falta: ", restante);
          }
        } else {
          while (billete <= restante) {
            restante -= billete;
            conteos[billete]++;
            console.log("se pago: ", billete, "falta: ", restante);
          }
        }
      }
    }
  } else {
    console.log("error no es multiplo de 10");
  }
  for (let billete of billetes) {
    console.log("se entregaron: ", conteos[billete], "billetes de: ", billete);
  }
  rl.close();
});
*/

//Inicializacion de la pregunta con rl question, se guarda la respuesta como variable
rl.question("Ingrese el valor a retirar (multiplo de 10000)", (respuesta) => {
  //la respuesta se parsea y se guarda en otra variable
  let restante = parseInt(respuesta);
  //array con los billetes disponibles
  const billetes = [50000, 20000, 10000];
  //objeto el cual se usara para guardar la cantidad de veces que se uso un billete, en el valor de la clave
  const conteos = { 50000: 0, 20000: 0, 10000: 0 };

  //Si nuestro restante no es multiplo de 10000, se cierra el programa
  if (restante % 10000 !== 0) {
    console.log("error no es multiplo de 10000");
    rl.close();
  }

  //por cada indice de nuestro array se va a guardar ese valor en billete
  for (let billete of billetes) {
    //variable la cual en cada iteracion de for se re establece en 30
    let limite = 30;
    //si el usuario pide mas de 200k y estamos en la primera iteracion es decir 50k 
    //Entonces el limite tendra el valor de 3, es decir solo le podremos dar 3 billetes de 50k maximo
    if (billete === 50000 && restante > 200000) {
      limite = 3;
    }
    //Si restante es menor a billete y ademas el valor del conteo es menor al limite entoces
    //se restara y se le sumara el valor a la clave segun sea el valor de billete en cada iteracion
    while (restante >= billete && conteos[billete] < limite) {
      restante -= billete;
      conteos[billete]++;
    }
  }
  //ahora volvemos a recorrer billetes, segun la iteracion y el este ira a
  //la variable conteo, buscara cual tiene la clave igual a la de billete (50000,20000,10000) y escribira el valor de esta
  for (let billete of billetes) {
    console.log("se pagaron: ", conteos[billete], " billetes de: ", billete);
  }
  //fin
  rl.close();
});
