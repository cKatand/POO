function modificarMensaje(){
const array = [20,10,40,35,5,90,89,47,39,56]
const eliminados= []
eliminados.push(array2.pop(), array2.shift())
const agregados = []
agregados.push(array2.push(10), array2.unshift(9))
let suma = array.reduce((total, num) => total + num, 0);
alert(`Los datos en el arreglo sin modificar son: ${array} Los datos en el arreglo modificados son: ${} \nlos datos eliminados son: ${eliminados} \nlos datos agregados son: ${agregados} \nla suma de los elementos es: ${suma}`);
} 
