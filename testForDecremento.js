function prueba() {
   
}

for (let index = 0; index < 10; ++index) {
   let randy = Math.floor(Math.random() * 3);
   if (randy == 2) {
      console.log("Hola mundo!!!");
   }
   else 
   {
      console.log("Adios Mundo!!!");
      index--;
   }
}