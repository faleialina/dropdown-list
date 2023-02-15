const img = document.querySelector('.dropdown');
const dl = document.querySelector('.dropdown-list');
const p = document.querySelector('.dropdown p');

img.addEventListener('click', function () {

    if (dl.style.display === 'none') {
        dl.style.display = 'flex';
        document.querySelector('.img').style = 'background-image: url(.//assets/Chevron2.svg)';
    } else {
        dl.style.display = 'none';
        document.querySelector('.img').style = 'background-image: url(.//assets/Chevron.svg)';
    }
})


dl.addEventListener('click', (event) => {
    p.textContent = event.target.textContent
})



