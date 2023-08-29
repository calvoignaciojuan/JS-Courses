//ASYNC-AWAIT ES AZUCAR SEMANTICO, SE PUEDE LOGRAR LO MISMO CON .THEN() .CATCH() PERO DE ESTA MANERA ES MAS LEGIBLE EL CODIGO
//YA QUE LA FUNCION DEFINIDA COMO ASYNC NO BLOQUEA LA EJECUCION DEL HILO PRINCIPAL, Y DENTRO DE ELLA VISUALMENTE MANEJAMOS DE MANERA SECUENCIAL FUNCIONES ASINCRONAS
//AWAIT SOLO SE PUEDE UTILIZAR DENTRO DE UNA FUNCION DECLARADA COMO ASYNC
//LA FUNCION LLAMADA CON LA SENTENCIA AWAIT DEBE DEVOLVER UNA PROMESA

function hola(name){
    return new Promise((resolve,reject)=>{
        setTimeout( function(){
            console.log("Hola "+ name);
            resolve(name);
        },2000);
    });
}
function hablar(name){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("bla bla bla");
            resolve(name);
        },2000);
    });    
}
function adios(name){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("adios " + name);
            resolve(name);
        }, 2000);
    });    
}

async function main(){
    let nombre = await hola("Juan");    // EN EL RESOLVE PUEDE ENVIAR DATOS PARA SER USADOS POR OTRA FUNCION ASINCRONICA POSTERIOR
    await hablar();                     //cada await lo que hace es esperar a que la funcion asincrona termine de ejecutarse
    await hablar();                     //con esto logramos tratar a una funcion asincrona como si fuese sincrona, pero sin bloquear 
    await hablar();                     //la ejecucion del hilo principal y de una manera mucho mas comoda para el programador
    await adios(nombre);
    console.log("estoy en una funcion asincronica");
}
//si quito los await en 2 funciones hablar por ejemplo, las va a cargar en simultaneo y la segunda no esperara a que la primera termine su ejecucion

//------------------------------------------------  en terminal: nodemon asyncAwait.js

console.log("primera instruccion");
main();
console.log("segunda instruccion");