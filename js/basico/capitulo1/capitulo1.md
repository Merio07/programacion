## 1.1. Tipo de datos

### 1.1.1. ¿Qué es una constante?

Una constante es un valor que no puede cambiar. Se declara con la palabra reservada **const**. Por ejemplo:

```js
const PI = 3.141592653589793;
```

Aquí estamos escribiendo a nuestra constante `PI` el valor de 3.141592653589793. Que después podemos recuperar más adelante para hacer operaciones con él.

### 1.1.2. ¿Qué es un String?

Un **string** es una cadena de texto. Es una secuencia de caracteres que pueden ser letras, números, signos, etc. Los strings se escriben entre comillas simples o dobles, de la siguiente manera:

```js
const saludando = "Hola mundo con comillas simples";
const saludandoConMasComillas = "Hola mundo con comilla dobles";
```

#### 1.1.2.1. Métodos de strings

Tenemos métodos para manipular los strings que nos permiten realizar operaciones sobre ellos, la forma usual de poder utilizar estos métodos es escribiendo la constante o variable y después escribir un punto y luego el nombre del método que queremos utilizar, `constante.metodo`. Estos métodos son los siguientes:

- **length**: nos permite saber la longitud de un string. Por ejemplo:

```js
const nombre = "Rosita";
console.log(nombre.length);
```
