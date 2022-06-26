let navbar = document.querySelector('.navbar');
let burgerIcon = document.querySelector('.menu-btn');
let scrollbtn = document.querySelector('.scroll-up-btn');
let cardsSection = document.querySelector('.team-content');
let currentCard = 1;
let cardsArray = Array.from(cardsSection.children);
let cardsCount = cardsArray.length;

// toggle background-color of navbar
window.onscroll = () => {
    if(this.scrollY > 20) {
        navbar.classList.add('sticky');
    }else {
        navbar.classList.remove('sticky');
    }
    if(this.scrollY > 500) {
        scrollbtn.classList.add('show');
    } else {
        scrollbtn.classList.remove('show');
    }
};

checker();

let counter = setInterval(imageSwap, 1000);

cardsSection.onmouseover = () => {
    clearInterval(counter);
}

cardsSection.onmouseout = () => {
    counter = setInterval(imageSwap, 1000);
}

// toggle menu/navbar script
burgerIcon.onclick = () => {
    document.querySelector('.navbar .menu').classList.toggle('active');
    document.querySelector('.menu-btn i').classList.toggle('active');
};

scrollbtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function checker() {
    removeActive();
    cardsArray[ currentCard-1 ].classList.add('active');
}

function removeActive() {
    for(let i=0; i<cardsCount; i++) {
        cardsArray[i].classList.remove('active');
    }
}

function imageSwap() {
    checker();
    currentCard++;
    if(currentCard === cardsCount+1) currentCard = 1;
}