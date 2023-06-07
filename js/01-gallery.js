import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBody = document.querySelector('.gallery');

function createGallery(imageList){
    let galleryInnerHTML = '';

    imageList.map(({preview, original, description}) => {
        let oneGalleryImg = `<li class="gallery__item">
         <a class ="gallery-link" href="${original}" target="_self">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
         </a>
        </li>`
        galleryInnerHTML += oneGalleryImg;
    })
    
    galleryBody.innerHTML = galleryInnerHTML;

}
createGallery(galleryItems);

galleryBody.addEventListener('click', onImageClick);

function onImageClick(event){

   event.preventDefault();

   if(event.target.nodeName !== "IMG"){
    return;
   }
   const originalURL = event.target.dataset.source;
   openModal(originalURL);

}

function openModal(imageLink){
    const instance = basicLightbox.create(`
    <img src="${imageLink}" width="800" height="600">
    `)
    instance.show();

    document.addEventListener('keydown', onEscapePress);

    function onEscapePress(event){
        if(event.key === 'Escape'){
            closeLightBox();
        }
    };  

    function closeLightBox(){
        instance.close();
        document.removeEventListener('keydown', onEscapePress);
    }
}




