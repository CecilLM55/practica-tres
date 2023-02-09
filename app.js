function greet() {
    console.log('Hello');
}

//Funciones creadas al vuelo
let logGreeting = (miParametro) => miParametro();
logGreeting(greet);

let longGreeting = (miParametro) => miParametro();
longGreeting(function () {
    console.log('Hello from a function created on the fly');
});

let color = 'rojo';
let talla = 'mediana';
let modelo = 'clasico';
console.log('Juan tiene una playera talla ' + talla + ' de color ' + color + ' modelo ' + modelo);
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}.`);
//es mejor usar la interpolación de strings.