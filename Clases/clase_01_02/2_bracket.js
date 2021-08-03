//? Escribir una función
//? que le agregue propiedades a un objeto.

let persona = {
  nombre: "Juan",
  edad: 10,
};

const setearPropiedad = (propiedad, valor) => {
  /*
  persona.propiedad = valor;
  persona = {
    ...persona,
    propiedad: valor
  };
  ! En los dos casos, la propiedad se agrega al objeto
  ! persona con la key propiedad
  */
  persona[propiedad] = valor;
};

const pelicula = {
  titulo: "El Padrino",
  año: "1966",
  edadMinima: 12,
};

//? Operador ternario
//? variable = condición ? valor1 : valor2
//? Se utiliza para asignar un valor a una variable
//? dependiendo de la condición que se le pase.

permiso =
  persona.edad >= pelicula.edadMinima
    ? "puedes ver la película"
    : "no puedes ver la película";

console.log(persona.nombre, permiso);
