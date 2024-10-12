
let uInput;
do {
   uInput = prompt(`Ingresa un palindromo!!!`);
} while (!confirm("¿Es Correcto? " + uInput));

let stringReady = uInput.replace(/[^a-zA-Z]/g, ''); 

if(stringReady === stringReady.split("").reverse().join("")){
   console.log(`${uInput} es un palindromo.` );
}else
{
   console.log(`${uInput} no es un palindromo.` );
}
