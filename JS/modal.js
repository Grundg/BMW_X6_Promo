document.addEventListener('DOMContentLoaded', () => {
    const moreElem = document.querySelectorAll('.more');
    const modalElem = document.querySelector('.modal');

    const openModal = () => {
        modalElem.classList.remove('hidden');
    }
    const closeModal = () => {
        modalElem.classList.add('hidden');
    }

    moreElem.forEach((item) => {
        item.addEventListener('click', openModal);
    })
    
    modalElem.addEventListener('click', (event) => {
        const target = event.target;
        console.log(event.target);
        if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
            closeModal();
        }
    })
})