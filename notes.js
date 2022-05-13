// ----------------------------------------------------------------------------------------------- //
((d,w,c) => {})(document,window,console); // Funcion que se autoejecuta
// ----------------------------------------------------------------------------------------------- //
{  'Variables'

    var variable; // Ambito global (windwow.variable)
    let variable_bloque; // Ambito de bloque
    const constante = true;// Las constantes primitivas no se pueden cambiar (los objetos y los arrays si)

}
// ----------------------------------------------------------------------------------------------- //
{  'Strings'

    let string = 'new string';

    string.indexOf("string"); // Devuelve la posicion de lo que esta entre () dentro del string
    string.toUpperCase(); // Convierte a mayusculas
    string.toLowerCase(); // Convierte a minusculas
    string.includes(); // Devuelve true si lo que esta entre () esta dentro del string
    string.trim(); // Elimina los espacios en blanco al inicio y al final del string
    string.split(''); // Divide un string cada vez que encuentra lo que hay entre '' y devuelve un array con los elementos | Si se usa con un string vacio ("") el string se divide con cada posicion del string
    string.slice(0, 2); // Devuelve una nueva cadena desde la posicion 0 a la 2
    string.replace("hi",""); // Reemplaza un valor por otro dentro de una string

}
// ----------------------------------------------------------------------------------------------- //
{  'Numeros'

    let number = '3.1416';

    isNaN(number); // Devuelve true si 'number' no es un numero (is not a number)
    number.toFixed(); // Muestra el numero de decimales que haya entre ()
    parseInt(number); // Convierte un string a entero o un decimal a entero
    parseFloat(number); // Convierte un string a float
    typeof number; // Devuelve el tipo de dato
    number.toString(); // Convierte a string

}
// ----------------------------------------------------------------------------------------------- //
{  'Bucles'

    'for | while | do while |' // En estos bucles tambien se puede usar break y continue

    {  'for in' // Se usan solo para objetos
        const bmw = {
            marca: 'BMW',
            modelo: 'M3'
        }
        for (const prop in bmw) {
            console.log(`${prop[0].toUpperCase() + prop.slice(1)}: ${bmw[prop]}`);
        }
    }

    {  'for of' // Recorren cualquier elemento iterable (arrays,strings,sets)
        const audis = ['Audi', ['R8', 'A3', 'TT']];

        for (const audi of audis[1]) {
            console.log(`${audis[0]} ${audi}`);
        }
    }

}
// ----------------------------------------------------------------------------------------------- //
{  'Funciones'

    function message(name = undefined) { // Se les puede asignar valores por defecto a los parametros
        return `Hi ${name}`; // Las funciones solo pueden retornar una vez y despues terminan la ejecucion
    }
    // ----------------------------------------------------------------------------------------------- //
    {  'Arrow Function'
        this.nombre = "Pedro";
        const Scu = {
            nombre: "Scu",
            imprimir: function () { //  Las funciones normales crean scopes
                console.log(this.nombre); // Scu
            }
        }
        Scu.imprimir(); // Scu

        function Persona (nombre) {
            this.nombre = nombre;
            return () => { // Las arrow functions al no crear scope, buscan el this en el bloque padre
                console.log(this.nombre); // "Scu"
            }
        }
        let scu = new Persona("Scu");
        scu(); // Como Persona retorna una funcion el objeto scu se tiene que ejecutar como funcion
    }
    // ----------------------------------------------------------------------------------------------- //
    {  'Funciones Declaradas y Expresadas'

        'Funciones Declaradas'
            function add() { // Esta funcion se declara con ambito global y puede ser invocada antes de ser creada
                return 2 + 1; 
            }
        
        'Funciones Expresadas'
            const subtract = () => { // Esta funcion se guarda dentro de una variable y no puede ser invocada antes de ser creada
                return 2 - 1;
            }
            
    }
    // ----------------------------------------------------------------------------------------------- //
    {  'Parametro REST...'
        function sumar(a, b, ...c) { // El parametro '...c' es un array que recibe parametros infinitos
            let resultado = a + b;
            c.forEach(c => resultado += c); // Se puede usar forEach para recorrer el array de c
            return resultado;
        }
    }
    // ----------------------------------------------------------------------------------------------- //
    {  'Scopes'

        {  'Call y Apply'
            this.lugar = "Contexto Global"; // this.lugar (global window)

            function Saludar(nombre) {
                console.log(`${this.lugar} es donde vive ${nombre}`);
            }
            Saludar("Pepito"); // "Contexto Global"
            
            const obj = {
                lugar: "Contexto Objeto" // this.lugar (objeto obj)
            }
            // call y apply sirven para utilizar el contexto 'this' de otro scope
            
            Saludar.call(obj,"Pepe"); // Por ejemplo en esta funcion se imprime this.lugar ("Contexto Global") pero con la funcion call se llama al this.lugar del objeto obj ("Contexto Objeto") | "Contexto Objeto"
            Saludar.apply(obj,["Pedro"]); // Apply funciona igual pero toma los parametros de la funcion como un array
        }

        {  'Bind'
            // Muy similar a call, no entiendo la diferencia
            this.nombre = "Scum";

            const persona = {
                nombre: "Scu",
                saludar: function() {
                    console.info(`Hola ${this.nombre}`);
                }
            }
            persona.saludar(); // "Hola Scu"

            const persona_2 = {
                saludar: persona.saludar.bind(this) // "Hola Scum"
            }
            persona_2.saludar();
        }

    }

}
// ----------------------------------------------------------------------------------------------- //
{  'Arrays'

    const array = [1, 2, 3];

    {  'Metodos'
        array.fill(); // Llena el array con lo que hay entre ()
        array.push(); // Añade los elementos al final del array
        array.pop(); // Elimina el ultimo elemento del array
        array.shift(); // Elimina el primer elemento del array
        array.unshift(); // Añade elementos al principio del array y devuelve la longitud del array
        array.slice(0, 2); // Devuelve un nuevo array con los elementos del 0 al 2
        array.reverse(); // Da vuelta un array
        array.join(""); // Une todos los elementos del array separados por lo que hay entre () | Si se pasa un string vacio ("") los elementos se unen sin un separador
        array.sort([1,2,3,4,5]); // Ordena los numeros de un array de forma cresciente o las strings alfabeticamente
        array.filter(num => num === 1); // Recorre un array y devuelve uno nuevo con los elementos que cumplan con la condicion
        Array.from(); // Convierte un elemento a array
    }

    'Destructuracion'
        const [one, two, three] = array; // Se le asigna una variable a cada posicion del array de forma dinamica
        console.log(one, two, three) // 1, 2, 3, 4, 5

    

    // ----------------------------------------------------------------------------------------------- //
    {  'forEach()' // Recorre cualquier elemento iterable (array,string,set)
        let autos = ["Audi", "Chevrolet", "BWM", "Ford", "Volkswagen"];

        autos.forEach(elemento => { // Recorre el array con un callback que toma como parametros el elemento actual del bucle y un indice (opcional)
            console.log(elemento); // El callback puede ser una funcion anonima
        });
    }
    // ----------------------------------------------------------------------------------------------- //
    {  'reduce()' // Devuelve un array modificado que va acumulando el elemento anterior del array con el actual
        let palabras = ["Hola", "soy", "programador"];

        let frase = palabras.reduce((acumulador, elemento) => { // Devuelve todos los elementos de un array combinados en uno solo
            return acumulador + elemento + " "; // El acumulador acumula uno a uno los valores de cada bucle en una sola variable, y despues lo suma con el elemento actual.
        }, "Frase: " /* Este es el valor inicial del acumulador */);

        console.log(frase);
    }
    // ----------------------------------------------------------------------------------------------- //
    {  'map()' // Recorre un array y devuelve uno nuevo con cada elemento del array modificado
        let numeros = [2, 4, 6, 8, 10];

        const doble = numeros.map(elemento => { // Devuelve un nuevo array con cada elemento del array 'numeros' multiplicado por 2.
            return elemento * 2;
        });

        console.log(doble)
    }
    // ----------------------------------------------------------------------------------------------- //

}
// ----------------------------------------------------------------------------------------------- //
{  'Objetos'

// Clase: Auto | Objeto: bmw

    const Persona = {
        nombre: 'Alexis',
        apellido: 'Scuderi',
        edad: 21
    }

    {  'Metodos'
        Object.keys(Persona); // Devuelve todas las propiedades del objeto
        Object.values(Persona); // Devuelve todos los valores de las propiedades del objeto
        Persona.hasOwnProperty('nombre'); // Devuelve true si la propiedad esta dentro del objeto
    }

    'Destructuracion'
        const {nombre, apellido, edad} = Persona; // Las variables tienen que tener el mismo nombre que las propiedades del objeto
        console.log(nombre, apellido, edad); // Alexis, Scuderi, 21

    {  'Objetos Literales' // Son objetos que no tienen clase o prototipo
        let nombre = 'Lion', raza = 'Cocker', edad = 11;
        const Perro = {
            nombre, // Propiedad: nombre | Valor: 'Lion'
            raza,
            edad,
            ladrar() {alert('WOOF')}
        }

    }
    
    {  '3 Formas de declarar un objeto y clase'

        // ----------------------------------------------------------------------------------------------- //
        {  'Function()'
            function Animal(nombre, animal) { // Se crea la clase 'Animal' con sus atributos
                this.nombre = nombre;
                this.animal = animal;
            }   
            Animal.prototype.getDatos = function() { // Se crea un metodo en el protoype de 'Animal' (Object). De esta manera todos los animales pueden usarlo y solo ocupa un espacio en memoria
                return `Nombre: ${this.nombre}\nAnimal: ${this.animal}`
            }
            function Perro(nombre, animal, raza) {
                this.super = Animal; // Se crea un atributo super que contendra a 'Animal'
                this.super(nombre, animal); // Se utiliza el constructor de Animal
                this.raza = raza; // Se agrega un atributo propio de Perro
            }
            Perro.prototype = new Animal(); // Se establece que el prototype de Perro es 'Animal' (herencia)
            Perro.prototype.getDatos = function() { // Se sobreescribe la funcion 'getDatos()' de Animal (polimorfismo)
                return `Nombre: ${this.nombre}\nAnimal: ${this.animal}\nRaza: ${this.raza}`
            }
            Perro.prototype.ladrar = function() { // Se crea una funcion ladrar propia de Perro
                return "WOOF"
            }
            const lion = new Perro("Lion","Perro","Cocker");
            console.log(lion.getDatos());
            console.log(lion.ladrar());
        }
        // ----------------------------------------------------------------------------------------------- //
        {  'Object.create()'
            let Persona = { 
                nombre: "defecto",
                apellido : "defecto",
                set_datos: (nombre, apellido) => {this.nombre = nombre; this.apellido = apellido},
                get_datos: () => {
                    return `Nombre: ${this.nombre}\nApellido: ${this.apellido}`
                }
            }
            let pedro = Object.create(Persona); // Instancia un objeto 'pedro' de la clase 'Persona'
            pedro.set_datos("Pedro", "González");
            console.log(pedro.get_datos());
        }
        // ----------------------------------------------------------------------------------------------- //
        {  'Class'
            class Animal { // Se crea la clase Animal
                constructor(nombre, animal) { // Se crea el metodo constructor propio de las clases de ES6
                    this.nombre = nombre;
                    this.animal = animal;
                    this.edad;
                }
                getDatos() {
                    return `Nombre: ${this.nombre}\nAnimal: ${this.animal}`;
                }
            }
            class Perro extends Animal { // Se crea la clase Perro que hereda atributos y metodos de la clase Animal (herencia)
                constructor(nombre, animal, raza) { // Se crea el constructor de la clase perro (que va a incluir al de la clase Animal)
                    super(nombre, animal); // Se incvoca al constructor de Animal con 'super'
                    this.raza = raza; // Se crea un atributo propio de la clase Perro
                }
                static getInfo() { // Los metodos estaticos se pueden invocar sin necesidad de tener una instancia de clase. Se usa la palabra clave 'static'
                    return "Los perros son animales de 4 patas muy leales"
                }
                getDatos() { // Se sobreescribe el metodo 'getDatos()' de la clase Animal (polimorfismo)
                    return `Nombre: ${this.nombre}\nAnimal: ${this.animal}\nRaza: ${this.raza}`
                }
                ladrar() { // Se crea un metodo propio de la clase Perro
                    return "WOOF"
                }
                set setEdad(edad) { // Se utiliza para darle un valor a un atributo. Usa la palabra clave 'set' y recibe como parametro el valor que se le quiere dar al atributo
                    this.edad = edad
                }
                get getEdad() { // Devuelve el valor de un atributo o algo en general. Usa la palabra clave 'get'
                    return `Edad: ${this.edad}`
                }
            }
            console.log(Perro.getInfo());
            let lion = new Perro("Lion","Perro","Cocker");
            lion.setEdad = 11; // El metodo 'set' se utiliza como si fuera un atributo
            console.log(lion.getDatos());
            console.log(lion.getEdad); // Lo mismo pasa con el metodo 'get'
            console.log(lion.ladrar());
        }
        // ----------------------------------------------------------------------------------------------- //

    }

    {  'Propiedades Dinamicas'
        let random = Math.round(Math.random() * 100 + 1); // Numero random entre 1 y 100
        const obj = {
            [`id-${random}`] : "hola" // Se genera una propiedad dinamica 'id-(random)'
        };

        const users = ["scu","1","mama","papa","messi"]; // Array de items que queremos listar en un objeto
        users.forEach((e,i) => obj[`id-${i}`] = e); // Los corchetes sirven para agregar propiedades dinamicas | Por cada item del array se crea una propiedad dinamica con el valor de 'i' en obj
    }

}
// ----------------------------------------------------------------------------------------------- //
{  'Errores'

    (() => {
        try { // Codigo a evaluar
            let valor = prompt('Introduce un numero: ');
            if (!valor) console.log('Debes introducir un numero'); // if (!valor) es una forma facil de comprobar si la variable esta vacia
            if (isNaN(valor)) throw new Error('El valor introducido no es un numero'); //  Se crea un error personalizado
        } catch (error) { // Devuelve el error
            console.log(`${error}`);
        } finally { // Se ejecuta siempre al final de un try-catch (haya error o no)
            console.log('try-catch finalizado');
        }
    })();
    
    // Tambien se pueden usa Promise() o console.warn, console.error etc

}
// ----------------------------------------------------------------------------------------------- //
{  'Console'

    {  'console.log()'
        console.log("Buenas","tardes") // Se pueden pasar varios parametros y se van a mostrar separados por un espacio
        let nombre = 'Alexis', apellido = 'Scuderi', edad = '21';
        console.log("Hola mi nombre es %s %s y tengo %d años", nombre, apellido, edad); // '%s' toma el siguiente string que se pase por parametro y lo reemplaza en la oracion | '%d' hace lo mismo con numeros
    }

    console.clear(); // Limpia la consola
    console.error("Esto es un error"); // Muestra un error personalizado
    console.warn("Esto es una advertencia"); // Muestra una advertencia personalizada
    console.dir(document); // Muestra la informacion como un objeto (con sus atributos, metodos, etc)
    console.table(Object.entries(console).sort()); // Crea una tabla. Con 'Object.entries(console)' creamos una lista de todos los metodos del objeto console. El metodo sort() ordena los items alfabeticamente
    
    {  'console.group()'
        console.group(); // Crea un grupo en la consola
            console.log("Primer Item");
            console.log("Segundo Item");
            console.log("Tercer Item");
        console.groupEnd(); // Termina el grupo
    }

    {  'console.time()'    
        console.time('La tarea se completo en') // Inicia un cronometro que nos dice en cuanto tiempo se resuelve una tarea o un conjunto de instrucciones
            const array = [];
            for (let i = 0; i < 1000; i++) {
                array.push(i);
            }
        console.timeEnd('La tarea se completo en'); // Termina el cronometro
    }

    {  'console.count()'
        for (let i = 0; i < 100; i++) {
            console.count('log Hola'); // Nos muestra cuantas veces se ejecuta esta instruccion
            console.log('Hola');
        }
        console.countReset('log Hola'); // Reinicia el contador
    }

    let X = 1, Y = 2, error = "X siempre debe ser mayor que Y";
    console.assert( X > Y, {X, Y, error}); // Evalua que la condicion se cumpla y de no cumplirse muestra un error personalizado con mayor informacion

}
// ----------------------------------------------------------------------------------------------- //
{  'Date'

    const fecha = new Date(2022,2,8,22,0,0); // Año | Mes | Dia | Hora

    fecha.toDateString(); // tue mar 08 2022 (dia (semana) | mes | dia (mes) | año)
    fecha.getFullYear(); // Devuelve el año en formato clasico
    fecha.toLocaleString(); // Nos muestra fecha y hora en formato local
    fecha.toLocaleDateString(); // Nos muestra solo fecha en formato local
    fecha.toLocaleTimeString(); // Nos muestra solo la hora en formato local
    fecha.getUTCDate(); // nos muestra la fecha y hora del meridiano (hora cero londres)

}
// ----------------------------------------------------------------------------------------------- //
{  'Math'

    Math.abs(- 7.5); // Nos da el valor absoluto de un numero (7.5) sea negativo o positivo
    Math.ceil(7.5); // Redondea siempre para arriba
    Math.floor(7.5); // Redondea siempre para abajo
    Math.round(7.5); // Rendondea al numero entero mas cercano (8)
    Math.sqrt(81); // Raiz cuadrada
    Math.pow(2,5); // Potencia
    Math.sign(5); // Si el numero es negativo devuelve -1 | Si el numero es cero devuelve 0 | Si el numero es positivo devuelve 1
    Math.random(); // Devuelve un numero aleatorio entre 0 y 1 (sin incluir el 1)
    Math.random().toFixed(2); // Muestra solo sus dos primeros decimales (0.50)
    (Math.random().toFixed(2) * 100) + 1; // Numero aleatorio del 0 al 100 (100 incluido)

}
// ----------------------------------------------------------------------------------------------- //
{  'Expresiones Regulares'

    let letras = 'abcdefghijklmnñopqrstuvwxyz';
    let exp = /aeiou/; // Sin corchetes debe encontrar el texto exacto dentro del string | false
    exp = /[a=]/ // Con corchetes solo tiene que encontrar uno de los caracteres | true
    
    // La bandera 'i' permite que la palabra clave este tanto en mayuscula como en minuscula
    // La bandera 'g' busca todos los resultados de la palabra clave en la cadena

    exp.test(letras); // Devuelve true si las condiciones de 'exp' se cumplen
    exp.exec(letras); // Nos da un array con informacion mas detallada sobre los resultados

    exp = /^[A-Za-z\s]{2}+$/g; // '^' indica que no puede haber nada antes de la expresion | '+' indica que la expresion se tiene que evaluar por cada valor del string | '$' indica que no puede haber nada despues de la expresion | \s indica que la expresion acepta espacios en blanco | {2} indica que la expresion tiene que tener 2 caracteres de largo

}
// ----------------------------------------------------------------------------------------------- //
{  'Set'

    // Es parecido a un array pero con mas metodos utiles y sin duplicados
    // Tipo de dato que devuelve un objeto que no tenga valores repetidos, tomando como parametro un elemento iterable (array, string)

    let set = new Set([1,2,1,3,4]); // Esto crea un objeto sin duplicados
    let array_set = [...new Set([1,2,1,3,4])]; // Devuelve un array sin duplicados

    { ' Metodos'
        set.size; // Se usa en lugar de .length en los sets
        set.add(9); // Agrega un nuevo valor al set
        set.delete(2); // Elimina el elemento que coincida (solo funciona con sets)
        set.has(4); // Devuelve true si el elemento esta en el set (parecido a include())
        set.clear(); // Vacia el set
        Array.from(set); //Este metodo convierte un set en array
    }

}
// ----------------------------------------------------------------------------------------------- //
{  'Timers'

    setTimeout(() => {
        console.log("hola"); // Luego de 3 segundos se ejecutan las instrucciones
    },3000)

    setInterval(() => {
        console.log(new Date().toLocaleTimeString()); // Cada 1 segundo se ejecutan las instrucciones (Se crea un reloj a tiempo real)
    }, 1000);

}
// ----------------------------------------------------------------------------------------------- //
{  'Promise()'

    function square(num) {
        if (typeof num !== "number" || typeof num === "object") return Promise.reject("Value must be a number") // Promise.reject crea un mensaje de error y nos lleva directamente al catch() del final del Promise |  El catch() creado funciona para cualquier ejecucion de square() | Promise.reject y Promise.resolve son metodos estaticos de Promise
        return new Promise((resolve,reject) => { // Se crea un objeto Promise con los parametros 'resolve' (que es lo que se ejecuta en caso de que no haya errores) y 'reject' que es el que crea el error
            setTimeout(() => {
                resolve({
                    num,
                    res: num * num
                });
            },500);
        });
    }

    {  'then() y catch()'
        square(0) // Se ejecuta la funcion square(0)
            .then((obj) => { // Se toma la Promise que retorno el metodo square(0). Luego se ejecuta el siguiente codigo que toma como parametro al metodo resolve() de square();
                console.info("Start of promise");
                console.info(`Value: ${obj.num}\nResult: ${obj.res}`); // Del objeto que se pasa por el metodo resolve() se imprimen el valor que se pasa a square para ser elevado al cuadrado (0) y el resultado (0)
                return square(1); // Se vuelve a ejecutar square pero esta vez con 1 como parametro
            })
            .then((obj) => { // then() toma el valor que retorno el anterior then() y lo usa
                console.info(`Value: ${obj.num}\nResult: ${obj.res}`);
                return square(2);
            })
            .then((obj) => {
                console.info(`Value: ${obj.num}\nResult: ${obj.res}`);
                return console.info("End of promise");
            })
        .catch(error => console.error(error)); // Nos muestra el error. Este puede aparecer en cualquier ejecucion de square()
    }

    {  'Funciones Asincronas'
        async function asyncFunction() { // Añade la palabra clave 'await' que obliga al hilo de ejecucion a esperar a que se termine de ejecutar una tarea antes de seguir con las demas instrucciones
            console.log("Start of async function");
            let obj = await square(0); // Hasta que esta linea de codigo no termine de ejecutarse el programa no sigue con la proxima instruccion
            console.info(`Value: ${obj.num}\nResult: ${obj.res}`);
            obj = await square(1);
            console.info(`Value: ${obj.num}\nResult: ${obj.res}`);
            console.info("End of async function");
        }
    }

}
// ----------------------------------------------------------------------------------------------- //
{  'Symbol()'

    //Es un tipo de dato primitivo que sirve para crear propiedades privadas en objetos. Estas no se iteran de manera normal ya que son privadas y tampoco aparecen con otros metodos de objetos

    const NAME = Symbol("NAME"); // Crea un nuevo symbol en la constante NAME con un identificador de 1
    const PERSON = {
        [NAME]: "Scu" // Con [NAME] se crea esta propiedad y se le agrega valor 
    }
    console.info(PERSON); // Pero al momento de imprimir el objeto y mostrar la propiedad esta aparece asi {Symbol(NAME): "Scu"}
    console.info(PERSON[NAME]); // "Scu" | Esta propiedad [NAME] y su valor no aparece cuando usamos Object.keys() o Object.values()
    console.log(Object.getOwnPropertySymbols(PERSON)); // Nos muestra los simbolos creados dentro del objeto
}
// ----------------------------------------------------------------------------------------------- //
{  'Map()'

    const MAP = new Map([
        ["Name","Scu"],
        ["Sex","No"]
    ]);

    {  'Metodos'
        MAP.set("Age",21); // Agrega una propiedad y su valor
        MAP.get("Name"); // Devuelve el valor de una propiedad
        MAP.size; // Devuelve length()
        MAP.delete("Name"); // Elimina la propiedad
        MAP.keys(); // Devuelve las propiedades del mapa
        MAP.values(); // Devuelve el valor de las propiedades del mapa
        MAP.clear(); // Limpia el mapa
        MAP.has("Name"); // True si existe la propiedad en el mapa
    }

    for (let [k,v] of MAP) { // Para recorrer keys y values de cada propiedad del mapa (array)
        console.info(`${k}: ${v}`);
    }

    const keys = [...MAP.keys()]; // Almacena todas las llaves en un array
    const values = [...MAP.values()]; // Almacena todos los valores de las llaves en un array

}
// ----------------------------------------------------------------------------------------------- //
{  'Iterators'

    // Se crean metodos para iterar cualquier tipo de dato iterable (array,string,set,map,etc)

    const set = new Set([1,1,2,2,3,4,4,5]); // Se crea un set (array sin duplicados)
    const set_iterator = set[Symbol.iterator](); // Se crea un iterador del set

    let next_set = set_iterator.next(); // Se crea una variable que almacena el siguiente valor del iterador de set (1)

    while(!next_set.done) { // Mientras que la propiedad 'done' del objeto que devuelve el iterador de set ({value: 1, done: false}) sea false el bucle continua
        console.info(next_set.value); // Se imprime el valor actual de next (1)
        next_set = set_iterator.next(); // Se almacena el siguiente valor del iterador de set en next (2) ya que si no se hace, el valor de next seguira siendo 1
    }

    // ----------------------------------------------------------------------------------------------- //
    {  'Funciones Generators' // Funciones Iterables
        function* saludar() { // function* indica que la funcion va a ser un generator
            yield 1; // yield es el return de las funciones generators. Cada yield es el valor que se retorna en el metodo next() de la funcion
            console.info("Esto no es un yield"); // El resto de las instrucciones se ejecuta con normalidad y no se retornan
            yield 2;
            yield "Fin"; // En resumen una funcion generator es una funcion que puede retornar varias veces gracias al metodo next()
        }
        
        let iterator = saludar(); // Guardar la funcion generator dentro de una variable hace que esta sea iterable
        for (let yield of iterator) console.info(yield); // Se imprime el valor de cada yield y se ejecutan las demas instrucciones de la funcion

        const function_set = new Set([...saludar()]); // Se guardan todos los yields dentro de un set (sin duplicados)
        console.info(function_set); // {1,2,"Fin"}

        // Otro ejemplo

        function square(num) {
            console.info(`Numero: ${num}\nCuadrado: ${num * num}`) // Devuelve el numero y su cuadrado
        }
        
        function* repetir() {
            console.info("Start");
            yield square(1); // Devuelve lo que retorna la funcion square(1)
            yield square(2);
            yield square(3);
            yield square(4);
            yield square(5);
            console.info("End");
        }
        
        let square_iterator = repetir(); // Guarda la funcion repetir en una variable para poder ser iterada
        for (let yield of square_iterator); // Ejecuta las instrucciones dentro de square por cada yield de la funcion generator repetir()
    
    }
    // ----------------------------------------------------------------------------------------------- //
    
}
// ----------------------------------------------------------------------------------------------- //
{  'Proxies'

    const person = { // Es el objeto modelo que sirve para instanciar otros mediante proxy (una especie de prototype)
        name: "",
        surname: "",
        age: 0
    }

    const handler = { // El handler es el que hace todas las validaciones correspondientes del objeto
        set(obj,prop,val) { // Usa el metodo set que toma como valor la instacia del objeto (scu) la propiedad y el valor
            if (Object.keys(person).indexOf(prop) !== -1) return obj[prop] = val; // Si la propiedad de scu existe en persona, le asigna el valor de la propiedad a scu
            return console.error(`Property '${prop}' does not exist`); // Devuelve error si la propiedad no existe en persona
        }
    }

    const scu = new Proxy(person,handler); // Crea un objeto proxy que toma como prototipo a 'person' y al handler ('handler') que es el que va a hacer las validaciones de scu
    scu.name = "Alexis"; // Se le asigna un valor a la propiedad name de scu
    scu.adress = "street 1"; // Esta propiedad que no existe en el prototipo persona no solo se va a agregar al objeto scu si no tambien al objeto persona, ya que estos 2 estan vinculados el uno con el otro
    scu.surname = "Scuderi" // Las propiedades que si existan se van a agregar con normalidad
    scu.age = 21;

    console.info(scu);

}
// ----------------------------------------------------------------------------------------------- //
{  'JSON'
    
    // Las propiedades siempre van con comillas dobles "" y de preferencia los valores tambien

    JSON.parse("[1,2,3,4]"); // Convierte un JSON en un tipo de dato aceptado por javascript (objeto). Para esto SI O SI todo el JSON tiene que estar entre '' y en una sola linea de codigo
    JSON.stringify([1,2,3,4]); // Convierte un tipo de dato en javascript a un json (string)

}
// ----------------------------------------------------------------------------------------------- //
{  'Web APIS'

    const hablar = texto => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar("Hola");

}
// ----------------------------------------------------------------------------------------------- //
{  'DOM'

    // Document Object Model representa todo el documento hmtl y sus etiquetas
    // http://www.placeimg/200/200/tech

    const $div = "", $p = "", $a = document.querySelector("a"), $input = ""; // Se pueden guardar elementos html dentro de variables

    // ----------------------------------------------------------------------------------------------- //
    {  'Metodos de Document'

        // ----------------------------------------------------------------------------------------------- //
        { 'Poco Utiles'
            document; // Nos devuelve todo el documento html (siempre y cuando este en un archivo externo al html)
            document.head;
            document.body;
            document.documentElement; // Devuelve el html
            document.doctype;
            document.charset;
            document.title; // Devuelve el titulo deldocumento
            document.links; // Devuelve todos los links
            document.images; // Devuelve todas las imagenes
            document.forms; // Devuelve todos los forms
            document.styleSheets; // Devuelve todas las hojas de estilo
            document.scripts; // Devuelve todas los scripts
            document.getSelection().toString(); // Nos muestra lo que seleccinamos por consola
        }
        // ----------------------------------------------------------------------------------------------- //
        {  'Seleccionar elementos'
            document.getElementById("id-1"); // Este selector se sigue usando por que encuentra el id mas rapido que query selector
            document.querySelector("a"); // Devuelve la primer coincidencia del elemento
            document.querySelectorAll("a"); // Devuelve todas las coincidencias del elemento. Devuelve un nodelist (objeto iterable)
            document.querySelectorAll("ul li");
        }
        // ----------------------------------------------------------------------------------------------- //
        {  'Mas selectores'
            // Todos estos elementos tambien pueden ser usados con NODOS
            $div.children; // Devuelve todos los hijos del elemento
            $a.parentElement; // Devuelve la etiqueta padre
            $div.firstElementChild; // Devuelve el primer elemento hijo
            $div.lastElementChild; // Devuelve el ultimo elemento hijo
            $a.previousElementSibling; // Devuelve el elemento hermano anterior
            $a.nextElementSibling; // Devuelve el elemento hermano siguiente
            $a.closest("div"); // Devuelve la etiqueta PADRE 'div' mas cercana
        }
        // ----------------------------------------------------------------------------------------------- //

        const $fragmento = document.crateDocumentFragment(); // Un fragmento es un contenedor que almacena elementos para despues ser agregado al DOM. Esto mejora la ejecucion y el rendimiento de la pagina
        document.write("<p>Este es un parrafo generado con javascript</p>"); // Imprime por pantalla al final del body

    }
    // ----------------------------------------------------------------------------------------------- //
    {  'Atributos'

        $a.getAttribute("href"); // Obtiene un atrributo. Solo funciona con querySelector()
        $a.setAttribute("href","http://www.google.com"); // Setea un atributo
        $a.hasAttribute("href"); // Devuelve true si el elemento tiene dicho atributo
        $a.removeAttribute("title"); // Elimina el atributo

        // SE PUEDEN CREAR ATRIBUTOS. Tienen que empezar con 'data-'
        $a.setAttribute("data-description","..."); // Crea un atributo data-description
        $a.dataset.description = "descripción"; // Creamos un atributo 'data-description'
        $a.dataset; // Devuelve un objeto map con todos los atributos data

        // Style
        $a.style.backgroundColor = "blue"; // Cambiar o obtener valores del atributo style
        getComputedStyle($a); // Devuelve un objeto con todas las propiedades css por defecto del elemento
        $a.getPropertyValue("color"); // Devuelve la propiedad

    }
    // ----------------------------------------------------------------------------------------------- //
    {  'Modificar / Agregar Elementos' // Metodos Modernos

        $p.textContent = "Hola"; // Cambia o devuelve el texto de un elemento (tambien esta la funcion insertAdjacentText())
        $div.innerHTML = '<a href="http://www.google.com">Google</a>'; // Cambia el HTML dentro del elemento por otro o lo devuelve (tambien esta la funcion insertAdjacentHTML())
        $p.outerHTML = '<b>Parrafo Reemplazado</b>'; // Reemplaza el elemento seleccionado por otro en su totalidad (tambien esta la funcion replaceChild())

        // "beforebegin" | Se inserta el elemento como HERMANO ANTERIOR del elemento seleccionado
        // "afterend" | Se inserta el elemento como HERMANO SIGUIENTE del elemento seleccionado
        // "afterbegin" | Se inserta el elemento como PRIMER HIJO del elemento seleccionado
        // "beforeend" | Se inserta el elemento como ULTIMO HIJO del elemento seleccionado

        $div.insertAdjacentElement("afterbegin",$p); // Inserta un elemento | Primero va la posicion en la que va a estar el elemento y despues el elemento a agregar
        $div.insertAdjacentHTML(); // Lo mismo pero con html
        $div.insertAdjacentText(); // Lo mismo pero con texto

        $div.prepend(); // Agrega como primer hijo
        $div.append(); // Agrega como ultimo hijo
        $div.before(); // Agrega como hermano anterior
        $div.after(); // Agrega como hermano posterior

        $div.removeChild($div.lastElementChild); // Elimina el elemento dentro de un contenedor
        $div.replaceChild($p,$div.firstElementChild); // Reemplaza un elemento por otro dentro de un contenedor

            
        const clone = $div.cloneNode(true); // Clona el elemento (Si se pone true copia toda la estructura del elemento)

        // <template></template> | Es una etiqueta HTML que funciona como contenedor de elementos llenos o vacios. Estos pueden ser llenados o modificados dinamicamente con javascript
    }
    // ----------------------------------------------------------------------------------------------- //

    {  'Eventos'

        // keypress, load, resize, scroll, click, dbclick, focus, hover, DOMContentLoaded (mas rapido para cargar contenido al INSTANTE)

        console.info(event); // Muestra todas las propiedades del evento
        event.type; // Devuelve el evento
        event.target; // Devuelve el elemento que desencadena el evento

        // Evento semantico (solo puede ejecutar una funcion por evento)
        $input.onclick = e => alert(e); // A las funciones de los eventos solo se les puede pasar un solo parametro que es el evento en si (e) | A menos que se use addEventListener() con una funcion flecha
 
        const alertar = e => {
            alert(e);
            e.stopPropagation(); // El evento solo se ejecuta para el elemento seleccionado
        };
        $input.addEventListener("click",alertar); // Pueden ejecutar varias funciones por evento
        $input.addEventListener("click",alertar,{
            capture: true, // Este parametro sirve para cuando se hace click a un elemento dentro de otro y ambos tienen un evento, con capture true los eventos se ejecutan de afuera hacia adentro
            once: true, // Con este parametro el evento solo se ejecuta una vez
        });

        $input.removeEventListener("click",alertar); // Para remover un evento, la funcion que se ejecuta tiene que estar dentro de una variable

        $a.addEventListener("click", (e) => {
            e.preventDefault(); // Cancela el comportamiento por defecto del evento
            alert("el enlace ya no funciona");
        });

        document.addEventListener("click", (e) => { // Forma mas optima de agregar evento a varios elementos
            if (e.target.matches("div")) console.info("Este es un div");
        });

        document.addEventListener("keypress",e => {
            if (e.key === "a" && e.altKey) console.log("Presionaste alt + a");
        });

    }

    {  'BOM'

        // Objeto window

        innerWidth; // vw
        innerHeight; // vh
        outerWidth; // El ancho total del viewport y la ventana del navegador
        outerHeight; // El alto total del viewport y la ventana del navegador
        scrollX; // Lo alejada que esta la barra scroll de x (px)
        scrollY; // Lo alejada que esta la barra scroll de y (px)
        screenX; // La coordenada x de la pantalla en la que se dibuja el navegador (toma en cuenta las pantallas secundarias)
        screenY; // La coordenada y de la pantalla en la que se dibuja el navegador (toma en cuenta las pantallas secundarias)

        history; // Devuelve un historial de nuestro sitio web (a cuantas paginas se accedio, logintud, etc)
        history.back(1); // Va 1 pagina hacia atras
        history.forward(1); // Va 1 pagina hacia adelante
        history.go(-1); // Hacia adelante o atras

        navigator.onLine; // Detecta si el usuario tiene conexion o no
        navigator.geolocation; // Geolocalizacion
        navigator.mediaDevices; // Camara y microfono
        ServiceWorker; // Sirve para convertir una pagina web a una aplicacion de escritorio
        navigator.storage; // Web storage y local storage
        navigator.userAgent; // Nos devuelve informacion importante sobre el equipo, el navegador, etc

        // Objeto location

        location.origin; // Devuelve la ruta de origen (http://www.google.com/) hasta la tercer /
        location.protocol; // Devuelve el protocolo (http, https, file)
        location.hostname; // Devuelve el dominio y puerto (puerto por defecto 80 (""))
        location.host; // Devuelve el dominio
        location.port; // Devuelve el puerto
        location.href; // Devuelve toda la url
        location.hash; // Devuelve lo que haya despues de un #
        location.pathname; // Lo que hay entre medio de / / (el archivo o seccion de la pagina que estas visitando)
        location.search; // Almacena todo lo que venga despues de un ? (datos de formulario)
        location.reload(); // Recarga la pagina

    }

    const mq = window.matchMedia("(min-width: 1024px)");
    mq.addEventListener("change" ,e => alert("width: 1024px"));

}
// ----------------------------------------------------------------------------------------------- //
{  'Local Storage'

    localStorage.setItem("theme","dark"); // Define una variable
    localStorage.getItem("theme"); // Obtiene el valor de una variable

}