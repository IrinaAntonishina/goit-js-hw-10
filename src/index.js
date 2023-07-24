import {fetchBreeds} from './cat-api'



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
return evt.target.value
}

// function findCat(){
//     fetchBreeds().then(data => {
//         const id = data.map(addMarkUpId).join('')
//         refs.select.insertAdjacentHTML('afterbegin',id)
        
//     }).catch(err => {
//         console.log(err)
//     })
// }
function getBreeds () {

    fetchBreeds().then(data => {
        const id = data.map(addMarkUpId).join('')
        refs.select.insertAdjacentHTML('afterbegin',id)
        
    }).catch(err => {
        console.log(err)
    })
}
// const makeGalleryImagesMarkup = ({url, alt}) => {
//     return `<li class="gallery_link"><img src=${url} alt=${alt} width = 300 class="gallery_img"></img></li>`;
//     }
    
//     const galleryImg = images.map(makeGalleryImagesMarkup).join('')
    
//     galleryList.insertAdjacentHTML("afterbegin",galleryImg);

function addMarkUpId ({id, name}) {
return `<option value="${id}">${name}</option>`
}

function createMarkUpAboutCat({image, description, temperament}){
    return 
}

getBreeds()
