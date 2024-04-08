# **NIVEL MASTER**

---

## _PROTOTIPOS_

- JavaScript trabaja con programación basada en prototipos
- Quiere decir que los objetos se crean a traves de heredación de otros prototipos basandose en estos prototipos más que por instanciación

### Prototype Chain

- La cadena de prototipos
- Todo prototipo hereda el prototipo padre

### Prototype Object

- Es el prototipo padre
- Todo prototipo lo hereda

### Caracteristicas

- Un prototipo en su código fuente es mutable
- Es en sí mismo un objeto, así como otros
- Tiene una existencia fisica en la memoria
- Puede ser modificado y llamado
- Puede ser visto como un modelo ejemplar de una familia objeto
- Un objeto hereda propiedades (valores y metodos) de su prototipo

### Dunder Proto

- Es la propiedad proto que se hereda a los prototipos

### Sobreescribir proto vs Sobreescribir un metodo

## _MODO ESTRICTO ('use strict')_

- Es una expresión literal que se puede utilizar desde ES6 y entre otras cosas, no permite utilizar variables no declaradas
- Convierte errores de JavaScript en excepciones
- Mejora la optimización de los errores y consigue mejores tiempos de ejecución
- Evita sintaxis usadas en posteriores a ES6
- No permite que el programador realice una `Mala Sintaxis`

## _FUNCIONES FLECHA_

- Son compactas y afecta mucho al `this`
- Si solo hay una expresion, la retornan
- No son adecuadas para usarse como metodos ni como constructores
- No tienen propio `this`, sino que toman el de la funcion que lo envuelve
- Las reglas del `use strict` aplicadas al `this`, son ignoradas
- Funcion flecha invocada a traves de los metodos _`call`_, _`apply`_ y _`bind`_
- No tienen objeto Arguments
- No tienen propiedad del prototipo `prototype`
- No se pueden usar como funciones generadoras (no se puede usar Yield)
- No puede contener saltos de linea entre sus parametros y su flecha
- Orden de parseo
- Retorna literales si su cuerpo está entre _`()`_

## _THIS CONTEXTUAL_

- Si this no esta dentro de un objeto o funcion, siempre hara referencia a `window`
- Si this esta en un `objeto` hara referencia a ese objeto
- El use strict hace que this no haga referencia a window

## _RECURSIVIDAD_

## _CLAUSURAS (o closures)_

## _PARAMETRO REST_

## _DESTRUCTURACION_

## _OPERADOR TERNARIO (o condicional)_

---
