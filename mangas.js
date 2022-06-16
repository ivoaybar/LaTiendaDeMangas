//Destructuring objetos
const mangas= {
    nombre: "Jujutsu Kaisen",
    cantidadTomosJapon: 19,
    cantidadTomosArgentina:17,
    editorial:"Panini"

}

//console.log(mangas.nombre)

const {nombre, cantidadTomosJapon: tomosJapon, cantidadTomosArgentina: tomosArgentina, editorial} = mangas;

//console.log(nombre);
//console.log(tomosJapon);
//console.log(tomosArgentina);
//console.log(editorial);

//Destructuring arrays

const personajes= ["Itadori", "Gojo", "Fushiguro"]

//console.log(personajes[1])

const [primerPersonaje, ...otrosPersonajes]=personajes;

//console.log(primerPersonaje);
//console.log(otrosPersonajes);



