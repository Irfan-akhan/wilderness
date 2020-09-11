const gallery = document.getElementById('trending-gallery');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

const showModal = () => {
    console.log(event.target);
    const imgSrc = event.target.attributes[0].value;
    let contentDiv = modal.querySelector('.modal-content');
    console.log(contentDiv);
    contentDiv.innerHTML = `
        <img src="${imgSrc}" alt="pic " class="modal-img">
    `;
    modal.style.zIndex = modal.style.display = 'block';
};
const hideModal = () => {
    console.log(event.target);
    modal.style.display = 'none';
};

gallery.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
