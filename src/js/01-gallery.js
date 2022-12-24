import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

let instance;
const gallery = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading = "lazy"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>`,
  ''
);

gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClickOpen);

function onClickOpen(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
}
instance = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
