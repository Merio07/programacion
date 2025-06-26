## 1.2. Estructuras de Datos: Listas y Diccionarios Reimaginados

### 1.2.1. ¿Qué es un Array?

Un **array** es una colección de elementos. Puede ser cualquier tipo, es decir, número, string,
booleano, objeto, funciones, etc. Los arrays pueden ser de cualquier longitud, pueden ser de cualquier
tipo, y pueden contener cualquier tipo de elemento. Los arrays son mutables, es decir, se pueden
modificar después de que se crean. La forma en la que nosotros escribimos un array es con corchetes.
Por ejemplo:

```js
let array = [1, 2, 3, 4, 5];
```

También podemos crear un array como una constante enseguida veremos las diferencias que
tienen entre una constante array y una constante variable.

```js
const frutas = ["Manzana", "Papaya", "Coco", "Fresa", "Uva"];
```

Podemos acceder a cada elemento de array sabiendo su índice. Los índices comienzan en 0, por lo que el primer elemento tiene índice 0, el segundo tiene índice 1, y así sucesivamente. Por ejemplo:

```js
console.log(array[0]); // Imprime 1
console.log(array[1]); // Imprime 2
console.log(array[2]); // Imprime 3
console.log(array[3]); // Imprime 4
console.log(array[4]); // Imprime 5
```

Los métodos esenciales que podemos usar con los arrays son los siguientes:

- .forEach() : Este método itera sobre cada elemento del array y ejecuta una función que se pasa como argumento. La función se ejecuta para cada elemento del array, y se puede usar para realizar cualquier operación que se desee sobre cada elemento. Por ejemplo, podemos usar:

```js
frutas.forEach((fruta, i) => {
  console.log(`Fruta ${i + 1}: ${fruta}`);
});
```

- .map() : Crea un array nuevo aplicando una función a cada elemento del array. La función se ejecuta para cada elemento del array, y se puede usar para realizar cualquier operación que se desee. Por ejemplo, podemos usar:

```js
const enMayusculas = frutas.map((f) => f.toUpperCase()); // Nos devuelve el array frutas en mayúscula llamada ahora enMayusculas
```

- .filter() : Crea un array nuevo que contiene solo los elementos que cumplen con una condición. La condición se pasa como una función que se ejecuta para cada elemento del array, y se puede usar para filtrar los elementos que se desean. Por ejemplo, podemos usar:

```js
const frutasLargas = frutas.filter((f) => f.length > 5);
// ["manzana"]
```

### 1.2.2. ¿Qué es un objeto?
