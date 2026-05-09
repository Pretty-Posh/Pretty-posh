const bar = document.getElementById('bar');
const nav = document.getElementById('topnav');
const close = document.getElementById('close');
const wish = document.getElementsByClassName('wish-btn')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

if (nav) {
    nav.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

i

// SHOP PAGE //
const filter = document.querySelector('button.popular');
const price = document.querySelectorAll('.price');

if (filter) {
    filter.addEventListener('click', () => {
        alert('Filter is not available yet!');
    });
}

// PRODUCT PAGE //
const mainimg = document.getElementById('main-img');
const smallimg = document.getElementsByClassName('small-img');
smallimg[0].onclick = function() {
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    mainimg.src = smallimg[3].src;
}
smallimg[4].onclick = function() {
    mainimg.src = smallimg[4].src;
}
