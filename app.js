let navbar = document.querySelector('.navbar');
let burgerIcon = document.querySelector('.menu-btn');
let scrollbtn = document.querySelector('.scroll-up-btn');

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