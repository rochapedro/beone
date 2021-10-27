
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