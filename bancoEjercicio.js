const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//mi metodo pensado a la liger
/*
rl.question(
  "ingrese la cantidad de dinero que quiere retirar(multiplos de 10.000) ",
  (nRetiro) => {
    solicitud = parseInt(nRetiro);
    billete50 = 50000;
    billete20 = 20000;
    billete10 = 10000;
    let pagado = solicitud;
    console.log("Se solicito", pagado)
    if (solicitud >= billete50) {
      do {
        pagado -= billete50;
        console.log("se ha pagado, ", billete50, " faltan: ", pagado);
      } while (billete50 <= pagado);
    } 
    if (pagado >= billete20) {
      do {
        pagado -= billete20;
        console.log("se ha pagado, ", billete20, " faltan: ", pagado);
      } while (billete20 <= pagado);
    } 
     if (pagado >= billete10) {
      do {
        pagado -= billete10;
        console.log("se ha pagado, ", billete10, " faltan: ", pagado);
      } while (billete10 <= pagado);
    }
    console.log("retiro completo")
  }
);
*/ 

//metodo optimizado
rl.question("Retiros multiplos de 10.000", (respuesta)=>{
    let restante = parseInt(respuesta)
    const billetes = [50000,20000,10000]
    console.log("se solicitaron ", restante)
    for(let billete of billetes){
        while(billete <= restante){
            restante -= billete
            console.log("se pagaron: ",billete, " falta: ", restante)
        }
    }
    console.log("retiro completo")
    rl.close()
})