//! Repaso de JS

//? Crear una función que aumente la edad en 1

let edad = 20;

/*
! Sintaxis de clásica de una Función
function aumentarEdad() {
  edad++;
}
 */

//! Arrow function
const aumentarEdad = () => {
  edad++;
};

/*
* Pruebas
console.log(edad);
aumentarEdad();
console.log(edad); 
*/

//? Crear una función que reciba un numero
//? por parámetro y lo reste a la vida total

let vidaTotal = 100;

const restarVida = (ataque) => {
  vidaTotal -= ataque;
  /*
  ! Sintaxis de clásica de un condicional if
  if (vidaTotal < 0) {
    vidaTotal = 0;
  }
  */

  //? Operador ternario
  //! Si o si necesita el else
  //vidaTotal < 0 ? (vidaTotal = 0) : (vida = vida);

  //? Operador "binario"
  //! no utiliza el else
  vidaTotal < 0 && (vidaTotal = 0);
};

//? Crear una función que regenere la vida hasta en 50,
//? con un máximo de 100

const curar = () => {
  vidaTotal += 50;
  vidaTotal > 100 && (vidaTotal = 100);
};

//? Crear una función que evalué si el jugador sigue vivo

const sigueVivo = () => vidaTotal > 0;

//* Pruebas
console.log(vidaTotal);
restarVida(60);
console.log(vidaTotal);
curar();
console.log(vidaTotal);
restarVida(60);
console.log(vidaTotal);
curar();
console.log(vidaTotal);
console.log(sigueVivo());
restarVida(100);
console.log(vidaTotal);
console.log(sigueVivo());
