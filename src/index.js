import {fetchBreeds} from './cat-api'
import {fetchCatByBreed} from './cat-api'


const refs = {
    select: document.querySelector('.breed-select'),
    load: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    info: document.querySelector('.cat-info'),
}

// 1+получить все породы
// 2+подставить их селект
// 3-получить инфу по выбраной породе
// 4-подставить в див 
refs.select.addEventListener('change', selectBreeds)

function selectBreeds(evt) {
const getBreedId = evt.target.value;
getId(getBreedId);
}


function getId(id){
    fetchCatByBreed(id).then(data => {
const img = data.map(createMarkUpImg).join('');
refs.info.insertAdjacentHTML('afterbegin',img);
const breedsInfo = data.map(elem => elem.breeds)

// const dataCat = breedsInfo.flatMap(createMarkUpAboutCat).join('');
        // refs.info.insertAdjacentHTML('afterbegin',breedsInfo);
console.log(typeof(breedsInfo))

        

console.log(data)
})
    .catch(err => {
        console.log(err)
    })
}

function getBreeds () {

    fetchBreeds().then(data => {
        const id = data.map(addMarkUpId).join('')
        refs.select.insertAdjacentHTML('afterbegin',id)
        
    }).catch(err => {
        console.log(err)
    })
}


function addMarkUpId ({id, name}) {
return `<option value="${id}">${name}</option>`
}

function createMarkUpImg({url}){
return `<img src="${url}" alt="cat" width="640" class="cat-info_img">`
}

function createMarkUpAboutCat({description, name, temperament}){
    return `<h2 class="cat-info_name">${name}</h2>
    <p class="cat-info_text">${description}</p>
    <p>Temperament:${temperament}</p>`
}

getBreeds()


// function findCat(){
//     fetchBreeds().then(data => {
//         const id = data.map(addMarkUpId).join('')
//         refs.select.insertAdjacentHTML('afterbegin',id)
        
//     }).catch(err => {
//         console.log(err)
//     })
// }
// ======================
// const makeGalleryImagesMarkup = ({url, alt}) => {
//     return `<li class="gallery_link"><img src=${url} alt=${alt} width = 300 class="gallery_img"></img></li>`;
//     }
    
//     const galleryImg = images.map(makeGalleryImagesMarkup).join('')
    
//     galleryList.insertAdjacentHTML("afterbegin",galleryImg);