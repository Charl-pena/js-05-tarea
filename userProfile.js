
let respuestas = {}; 

const preguntas = ["Ingresa tu nombre de usuario", "Ingresa tu edad", "Ingresa una lista de tus peliculas favoritas"];

for (let index = 0; index < preguntas.length; index++) {
   const pregunta = preguntas[index];
   let r;
   do {
      r = prompt(pregunta);
   } while (!confirm("¿es correcto " + r + '?'));
   switch (index) {
      case 0:
         respuestas.nombreDeUsuario = r;   
         break;
      case 1:
         respuestas.edad = r;
         break;
      case 2:
         respuestas.peliculasFavoritas = r.replaceAll(",", "").split(' ');
         break;
      default:
         break;
   }
}

console.log(`Hola ${respuestas.nombreDeUsuario}!!!`);
console.log(`Asi que tienes ${Number(respuestas.edad)} años ok.`);
console.log(`Esta es tu lista de peliculas favoritas: `);
respuestas.peliculasFavoritas.forEach((cur, i , arr) => {
   console.log(cur);
})