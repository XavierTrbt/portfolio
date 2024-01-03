let burgerMenu = document.getElementById('icon');
let headerLinks = document.getElementById('headerLinks')
const links = document.querySelectorAll('nav a')

burgerMenu.addEventListener('click', function () {
    nav.classList.toggle('active');
    header.classList.toggle('headerWhite');
});
links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        header.classList.remove('headerWhite');
    })
});

// const detectScroll = document.getElementById('main');
// const tete = document.getElementById('header');
// let height = tete.offsetHeight;
// console.log(tete.offsetTop);
// console.log(detectScroll.offsetTop);

// window.onscroll = function (){
//     if(detectScroll.offsetTop > 22){
//         tete.style.backgroundColor = 'white';
//     }
//     else{
//         tete.style.backgroundColor = '';
//     }
// };