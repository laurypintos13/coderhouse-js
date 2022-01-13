//Muestra de numeros pares con FOR

let numIngresado = parseInt(prompt("indica una cifra para mostrarte los pares"));

for(let i = 0 ; i <= numIngresado; i++){
    if (i %2 === 0){
        console.log("numero par de la cifra " + numIngresado + " es: " + i);
    }
}

//Muestra de numeros pares con WHILE

let numIngresado = parseInt(prompt("indica una cifra para mostrarte los pares"));

let i = 0;
while (i <= numIngresado) {
    if (i %2 === 0){
         console.log("numero par de la cifra " + numIngresado + " es: " + i);
    }
    i++;
}

//Muestra de numeros pares con DO WHILE

let numIngresado = parseInt(prompt("indica una cifra para mostrarte los pares"));

let i = 0;
do {
    if (i %2 === 0){
        console.log("numero par de la cifra " + numIngresado + " es: " + i);
    }
    i++;
} while (i <= numIngresado);
