## 1.1. Tipo de datos
Antes de empezar con JavaScript, es importante entender que existen los conceptos que se utilizan una vez y que nos permitirán entender el lenguaje. Las **constantes** y **variables**, esto solamente es una forma de almacenar datos que es justamente el tema que profundizaremos en este capítulo.
### 1.1.1. ¿Qué es una constante y una variable?
Empezar definiendo que es una constante y una variable es muy dificil, por eso sebe ser visto y comprendido principalmente para poder entender y profundizar más y más. Recordemos que nosotros lo que hacemos con un lenguaje normalmente es manipular datos y que es lo que se conoce como **variables**, es decir, que podemos almacenar datos y que podemos recuperarlos más adelante y además en el mundo tenemos cosas constantes, que no cambian. Esto son los dos conceptos más importantes para entender JavaScript. Para ellos definiremos una constante en JavaScript, que es una variable que no cambia.
Se declara con la palabra reservada **const**, esta es una palabra que no deberías usar en otros contextos, veremos como se define de la siguiente manera:

```js
const PI = 3.141592653589793;
```

Aquí estamos diciendo a nuestra constante `PI` que le asignemos el valor de `3.141592653589793` y la forma en la que asignamos es con el signo `=`. Que después podemos recuperar más adelante para hacer operaciones con él.

### 1.1.2. ¿Qué es un String?

Un **string** es una cadena de texto. Es una secuencia de caracteres que pueden ser letras, números, signos, etc. Los strings se escriben entre comillas simples o dobles, de la siguiente manera:

```js
const saludando = "Hola mundo con comillas simples";
const saludandoConMasComillas = "Hola mundo con comilla dobles";
```

#### 1.1.2.1. Métodos de strings

Tenemos métodos para manipular los strings que nos permiten realizar operaciones sobre ellos, la forma usual de poder utilizar estos métodos es escribiendo la constante o variable y después escribir un punto y luego el nombre del método que queremos utilizar, `constante.metodo`, no todo método recibe parámetros, pero hay casos en los que sí, cuando estemos trabajando con ellos el único cambio que recibe para escirbirlo es el parentesis, escibiremos `constante.metodo(parámetro)`. Estos métodos son los siguientes:

- **length**: nos permite saber la longitud de un string. Por ejemplo:

```js
const nombre = "Rosita";    //Definiendo la constante nombre con el valor Rosita
console.log(nombre.length); // Imprimiendo en consola 6
```
- **charAt(índice)** : nos permite obtener el caracter en la posición indicada por el índice. Si nosotros tenemos la palabra **Intención** y queremos obtener la letra de la posición 4, entonces eescribimos
```js
const palabra = "Intención";    //Definiendo la constante palabra con el valor Intención
console.log(palabra.charAt(4)); // Imprimiendo en consola n (recordando que empezamos en 0)
```
- **concat(cadena1, cadena2)** : nos permite concatenar dos strings. Por ejemplo:
```js
const nombre = "Rosita";    
const apellido = "González";    
const nombreCompleto = nombre.concat(" ", apellido); // A la constante nombre de agregamos " " y apellido
console.log(nombreCompleto); // Imprimiendo en consola Rosita González
```