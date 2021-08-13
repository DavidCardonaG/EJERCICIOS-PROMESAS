alert('BIENVENIDO INGRESE POR FAVOR 3 NÚMEROS');
let num1 = Number(prompt('INGRESE EL PRIMER NÚMERO'));
let num2 = Number(prompt('INGRESE EL SEGUNDO NÚMERO'));
let num3 = Number(prompt('INGRESE EL TERCER NÚMERO'));
const main = document.getElementById('main');


const suma = new Promise((resolve,reject) =>{
  if(num1 + num2 + num3 > 25){
      resolve(`LA SUMA DE LOS NÚMEROS ES  MAYOR A 25`)
  }else{
      reject(`LA SUMA NO ES MAYOR A 25`)
  }
})
suma.then(res =>{
    main.innerHTML = 'success' + res 
})
.catch(res =>{
    main.innerHTML = 'error' + res
})