
const scrollLink = document.getElementById('scrollNav');

scrollLink.addEventListener('click', scrollTop);

function scrollTop(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id);

    window.scroll({
        top: to,
        behavior: "smooth", 
    });
}


window.addEventListener('scroll', showButtonBack);

function showButtonBack() {
    const buttonBack = document.getElementById('scrollNav');
    window.scrollY > 100 ? buttonBack.classList.add('show') : buttonBack.classList.remove('show');
}

