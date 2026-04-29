
let menu = document.querySelector('.menu-icon')
let sidebar = document.querySelector('.sidebar-parent')
let close = document.querySelector('.close-icon')
let closeAfterLink = document.querySelector('.sidebar-parent > div')
let emailButton = document.getElementById("email")
let twitter = document.querySelector('.fa-x-twitter')
let tiktok = document.querySelector('.fa-tiktok')
let youtube = document.querySelector('.fa-youtube')
let facebook = document.querySelector('.fa-facebook')
let instagram = document.querySelector('.fa-instagram')
let smallSize = document.querySelector('.x-small')
let normalSmallSize = document.querySelector('.small')
let normalLargeSize = document.querySelector('.large')
let largeSize = document.querySelector('.x-large')
let cartButton = document.querySelector('.cart-button')
let size;

let cartSection = document.querySelector('.cart')



//For toggling the menu
menu.addEventListener('click', () =>{
sidebar.classList.toggle('sidebar');
});

//This is pretty self explanatory, it is used so you can use the close icon to close the sidebar. Same logic
close.addEventListener('click', () =>{
sidebar.classList.toggle('sidebar');
});

//This is just an aesthetic change. It is so whenever you press any of the links in the sidebar.The sidebar closes automatically
closeAfterLink.addEventListener('click', () =>{
sidebar.classList.toggle('sidebar');
});


emailButton.addEventListener('click', (e) => {
    alert("This is not a real business lol");
});

twitter.addEventListener('click', () => {
    alert("Still not a real buisness");

})


tiktok.addEventListener('click', () => {
    alert(" You're still trying");

})

youtube.addEventListener('click', () => {
    alert("Don't you learn?");

})


facebook.addEventListener('click', () => {
    alert("Ok this is enough. Don't dare click the last one!");

})

instagram.addEventListener('click', () => {
    alert("You...You clicked it. How dare you!!");

})



//from here
smallSize.addEventListener('click', () =>{
    size = 41;
    smallSize.classList.toggle('change');
   

})


normalSmallSize.addEventListener('click', () =>{
    size = 42;
    normalSmallSize.classList.toggle('change')

})

normalLargeSize.addEventListener('click', () =>{
    size = 43;
    normalLargeSize.classList.toggle('change')
})

largeSize.addEventListener('click', () =>{
    size = 44;
    largeSize.classList.toggle('change')
})

cartButton.addEventListener('click', () =>{
    if(size == 41){

// alert("works 41");

cartSection.classList.toggle('size-41');

    }
    else if(size == 42){
        cartSection.classList.toggle('size-41');
    alert("works 42");
    }

    else if(size == 43){
        cartSection.classList.toggle('size-41');
alert("works 43");
    }

    else if(size == 44){
        cartSection.classList.toggle('size-41');
alert("works 44");
    }

    else{
alert("doesnt work");
    }
});

//to here



// 1. Grab ALL brands as a list
// let allBrands = document.querySelectorAll('.brands > .fa-brands');

// // 2. Loop through the list and add the listener to each one
// allBrands.forEach((brand) => {
//     brand.addEventListener('click', () => {
//         alert("Still not a real business lol");
//     });
// });
