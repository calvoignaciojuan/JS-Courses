const nombre = process.env.NOMBRE || 'Sin nombre';                 //valor por defecto
const web = process.env.MI_WEB || 'sin nombre web';                
// para declararla se hace por consola.   MI_WEB=sarasa NOMBRE=Juan node conceptos.js

console.log(`hola: ${nombre}`);
console.log(`la web es: ${web}`);
