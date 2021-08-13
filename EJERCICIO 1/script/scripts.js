let name = prompt('INGRESE SU NOMBRE');
const main = document.getElementById('main');

const nombre = new Promise((resolve, reject) => {
    if(name =name){
        resolve(`El nombre es ${name}`)
    }else{
        reject('ERROR NAME NOT FOUND')
    }
});
nombre.then(res =>{
    main.innerHTML =    res
})

.catch(err => {
    main.innerHTML = '400' + err
});