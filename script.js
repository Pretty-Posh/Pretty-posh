const bar = document.getElementById('bar');
const nav = document.getElementById('topnav');
const close = document.getElementById('close');

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
document.addEventListener('click', function (event) {
    const nav = document.querySelector('topnav');       // your nav sidebar
    const bar = document.querySelector('bar'); // your ☰ button

    // Check if the click is OUTSIDE the navbar and NOT on the bar
    if (!nav.contains(event.target) && !bar.contains(event.target)) {
        nav.classList.remove('active'); // close the navbar
    }
});

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
smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    mainimg.src = smallimg[3].src;
}
smallimg[4].onclick = function () {
    mainimg.src = smallimg[4].src;
}
