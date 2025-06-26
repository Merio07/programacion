//Usa los siguientes datos de entrada (¡no los modifiques!):
const nombreCompletoInput = "   jOrGe rODRíGuEz   ";
const profesionInput = "ingeniero de software";
const idUsuario = "JR-789";
/*
¿Qué método de String emplearías para eliminar los espacios sobrantes al inicio y al final 
de nombreCompletoInput, y cómo declararías la variable nombreLimpio con let?
*/

let nombreLimpio = nombreCompletoInput.trim();
console.log(nombreLimpio);
/*
2-a) ¿Qué método usarías para separar nombreLimpio en nombre y apellido?

2-b) Para cada palabra obtenida, ¿qué combinación de métodos permite 
poner la primera letra en mayúscula y el resto en minúscula? 
Define la variable nombreFormateado.
*/

let nombre = nombreLimpio.slice(0, 5);
let apellido = nombreLimpio.slice(6, 15);

nombreFormateado = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
apellidoFormateado = apellido.charAt(0).toUpperCase() + apellido.slice(1).toLowerCase();

//¿Cómo obtendrías profesionFormateada, donde solo la primera letra de profesionInput queda en mayúscula?

let profesionFormateada = profesionInput.charAt(0).toUpperCase() + profesionInput.slice(1).toLowerCase();