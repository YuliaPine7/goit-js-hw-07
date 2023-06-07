import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBody = document.querySelector('.gallery');

function createGallery(imageList){
    let galleryInnerHTML = '';

    imageList.map(({preview, original, description}) => {
        let oneGalleryImg = `<li class="gallery__item">
         <a class ="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
         </a>
        </li>`
        galleryInnerHTML += oneGalleryImg;
    })
    
    galleryBody.innerHTML = galleryInnerHTML;

}
createGallery(galleryItems);

new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250 });



