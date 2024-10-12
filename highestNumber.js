function valNumber(userInput)
{
   userInput = Number(userInput);
   if (!(typeof userInput === 'number' && Number.isFinite(userInput)) ){
      alert('por favor ingresa un número valido');
      return false;
   }
   else
      return confirm("¿Es Correcto? " + userInput);
}

let numbers= [];

for (let index = 1; index <= 10; index++) {
   let uInput;
   do {
      uInput = prompt(`Ingresa un número (número ${index} de 10)`);
   } while (!valNumber(uInput));

   numbers.push(Number(uInput));
}

console.log(`!El número más grande es... ${Math.max(...numbers)}¡` );