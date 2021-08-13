alert('TEST DE OBESIDAD')
let name = prompt('INGRESE SU NOMBRE')
let age = prompt('INGRESE SU EDAD')
let pesoKg = prompt('INGRESE SU PESO')
const result = document.getElementById('result')

user.innerHTML = ` USER: ${name}`
años.innerHTML = `AÑOS: ${age}`
kg.innerHTML = `PESO: ${pesoKg} KG`

const pesoSup = new Promise((resolve, reject) => {
    if(pesoKg >= 100){
        resolve (` ${name} TIENE SOBRE PESO`)
    }else{
        reject (` ${name} SU PESO ESTA CORRECTO`)
    }
})
pesoSup.then(res =>{
   result.innerHTML = 'error' + res
})
.catch(res =>{
    result.innerHTML = 'success' + res
});