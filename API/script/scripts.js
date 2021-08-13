const API_URL = 'https://rickandmortyapi.com/api/character '

const main = document.getElementById('main');
const card = document.getElementById('card');

async function getRicky(url){
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results.slice(location))
    rickMorty(data.results.slice(location))
}
getRicky(API_URL);

function rickMorty(rickMor){
    main.innerHTML = ''

    rickMor.forEach(person => {
        const{ name,image,gender, species} = person
        const listPerson =document.createElement('div')
    listPerson.classList.add('per')
         listPerson.innerHTML = `
         <h1 id>${name}</h1>
         <img src="${image}" alt="">
         <span>${gender},
         ${species}</span>,`


        main.appendChild(listPerson);
        
    });
}
