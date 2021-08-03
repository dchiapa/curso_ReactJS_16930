//? encontrar la temperatura mas baja de los 3 días
const tempsDia1 = [16, 20, 12];
const tempsDia2 = [15, 19, 13];
const tempsDia3 = [9, 18, 11];

//! Spread operator (...)
//! Separa los elementos de un array en varios elementos
const temps = [...tempsDia1, ...tempsDia2, ...tempsDia3];

//! Math.min obtiene el menor de los elementos
const tempMinima = Math.min(...temps);

//* Pruebas
// console.log(tempMinima);

//? Agregar al objeto una propiedad "peso"
let juan = {
  nombre: "Juan",
  especie: "Perro",
  raza: "Bulldog",
  edad: 2,
};

/*
? Mutando el objeto
! Se puede modificar el objeto en cualquier momento
! Se puede hacer aunque el objeto sea una constante
* juan.peso = 40;
*/
juan["peso"] = 20;

/*
? Reasignando el objeto
! Se puede reasignar el objeto en cualquier momento
! No se puede hacer si el objeto es una constante
*/
juan = {
  ...juan,
  peso: 30,
};

//! Una clase Permite crear objetos con propiedades
//! y métodos que serán los mismos para todos
//! los objetos de la clase
class Mascota {
  constructor(nombre, especie, raza, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
    this.edad = edad;
  }
  setearPropiedad(propiedad, valor) {
    this[propiedad] = valor;
  }
  borrarPropiedad(propiedad) {
    delete this[propiedad];
  }
}

/* 
* Pruebas
const gato = new Mascota("Beto", "Gato", "persa", 2);
gato.setearPropiedad("peso", 30);
gato.borrarPropiedad("raza");
console.log(gato);
 */

//! Métodos de arrays
const mascotas = [];

//! Push método que agrega un elemento
//! al final de un array
mascotas.push(new Mascota("Beto", "Gato", "persa", 5));
mascotas.push(new Mascota("Arveja", "Perro", "callejero", 9));
mascotas.push(new Mascota("Dory", "Pez", "cirujano", 2));
mascotas.push(new Mascota("Beto", "Gato", "persa", 5));
mascotas.push(new Mascota("Arveja", "Perro", "callejero", 9));
mascotas.push(new Mascota("Dory", "Pez", "cirujano", 2));
mascotas.push(new Mascota("Beto", "Gato", "persa", 5));
mascotas.push(new Mascota("Arveja", "Perro", "callejero", 9));
mascotas.push(new Mascota("Dory", "Pez", "dorado", 2));

//! Sort método que ordena los elementos
//! de un array
const ordenado = mascotas.sort((a, b) => a.edad - b.edad);

//! si queremos devolver solo el primer objeto
//! en este caso el menor
const menor = mascotas.sort((a, b) => a.edad - b.edad)[0];

//! Map método que recorre todos los elementos
//! de un array y aplica una función a cada uno de ellos
const nombres = mascotas.map((mascota) => mascota.nombre);

//! Filter método que recorre todos los elementos
//! de un array y aplica una función a cada uno
//! de ellos y devuelve un nuevo array
//! con elementos que cumplan con la condición
const filtrado = nombres.filter((mascota) => mascota.especie === "Pez");

//! Find método que recorre todos los elementos
//! de un array y aplica una función a cada uno
//! de ellos y devuelve el primer elemento
//! que cumpla con la condición
const dory = mascotas.find((mascota) => mascota.nombre === "Dory");

//* Pruebas
console.log("Mascotas: ", mascotas);
console.log("Ordenado: ", ordenado);
console.log("Menor: ", menor);
console.log("Nombres: ", nombres);
console.log("Filtrado: ", filtrado);
console.log("Dory: ", dory);
