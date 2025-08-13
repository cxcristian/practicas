const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ===== Ejercicio 1 =====
rl.question("Ingrese su nota: ", (nota) => {
  let n = parseFloat(nota);

  if (n < 3.0) {
    console.log("Reprobado");
  } else if (n >= 3.0 && n < 4.5) {
    console.log("Aprobado");
  } else {
    console.log("Excelente");
  }

  // ===== Ejercicio 2 =====
  rl.question("Ingrese el primer número entero: ", (num1) => {
    rl.question("Ingrese el segundo número entero: ", (num2) => {
      let n1 = parseInt(num1);
      let n2 = parseInt(num2);

      if (n1 > n2) {
        let temp = n1;
        n1 = n2;
        n2 = temp;
      }

      console.log(`Números pares entre ${n1} y ${n2}:`);
      for (let i = n1; i <= n2; i++) {
        if (i % 2 === 0) {
          console.log(i);
        }
      }
      /*Ejercicio 3 – Problema de pasos encadenados
        Un cajero automático entrega billetes de $50,000, $20,000 y $10,000.
        Dada una cantidad de dinero a retirar (múltiplo de 10,000), mostrar cuántos billetes de cada tipo debe entregar.
        Usar la menor cantidad de billetes posible.
        📌 Pistas:
        Empieza con los billetes grandes.
        Usa división entera y módulo.
        Ejemplo: 130000 → 2 billetes de 50,000, 1 de 20,000, 1 de 10,000. */
      
      rl.close();
    });
  });
});
