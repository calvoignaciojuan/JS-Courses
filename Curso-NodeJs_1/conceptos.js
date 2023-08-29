const nombre = process.env.NOMBRE || 'Juan';   //valor por defecto
const web = process.env.MI_WEB;

console.log(`hola: ${nombre}`);
console.log(`la web es: ${web}`);
