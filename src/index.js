import {fetchCatByBreed, fetchBreeds} from './cat-api'

  const refs = {
    select: document.querySelector('.breed-select'),
    load: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    info: document.querySelector('.cat-info'),
}

refs.select.addEventListener('change', selectBreeds)

function selectBreeds(evt) {
const getBreedId = evt.target.value;
getId(getBreedId);
}


function getId(id){
    refs.load.classList.remove('is-hidden')
if(!refs.load.classList.contains('is-hidden')){
            refs.info.classList.add('is-hidden')
        }
    
    fetchCatByBreed(id).then(data => {
        
        refs.load.classList.add('is-hidden')
        refs.info.classList.remove('is-hidden')
        
        if(refs.info.classList.contains("active")){
            refs.info.innerHTML = '';
           }
const img = data.map(createMarkUpImg).join('');
refs.info.insertAdjacentHTML('afterbegin',img);
const breedsInfo = data.map(elem => elem.breeds);
const arr = breedsInfo[0];
const dataCat = arr.map(createMarkUpAboutCat).join('');
refs.info.insertAdjacentHTML('beforeend',dataCat);
refs.info.classList.add('active')

})
    .catch(err => {
        refs.load.classList.add('is-hidden')
        refs.error.classList.remove('is-hidden')
    }).finally(refs.error.classList.add('is-hidden'))
}

function getBreeds () {
    refs.error.classList.add('is-hidden')
    refs.select.classList.add('is-hidden')
    
    fetchBreeds().then(data => {
        refs.select.classList.remove('is-hidden')
         refs.load.classList.add('is-hidden')
        const id = data.map(addMarkUpId).join('')
        refs.select.insertAdjacentHTML('afterbegin',id)
       
    }).catch(err => {
        refs.load.classList.add('is-hidden')
        refs.error.classList.remove('is-hidden')
        refs.select.classList.add('is-hidden')
    })
}


function addMarkUpId ({id, name}) {
return `<option value="${id}">${name}</option>`
}

function createMarkUpImg({url}){
return `<div class="container-img"> <img src="${url}" alt="cat" width="500" class="cat-info_img"></div>`
}

function createMarkUpAboutCat({description, name, temperament}){
    return `<div class="container-info"><h2 class="cat-info_name">${name}</h2>
    <p class="cat-info_text">${description}</p>
    <p><span class="cat-info_span">Temperament:</span> ${temperament}</p></div>`
}

getBreeds()



