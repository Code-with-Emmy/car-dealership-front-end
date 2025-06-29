let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    if(window.scrollY > 0){
        document.querySelector('.navbar').classList.add('active');

    }else{
        document.querySelector('.header').classlist.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{

    if(window.scrollY > 0){
        document.querySelector('.navbar').classList.add('active');

    }else{
        document.querySelector('.header').classlist.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('.home').onmousemove = (e) =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.computedStyleMap.transform = 'translateX(${y}px) translateY(${x}px)';
    });
}

document.querySelector('.home').onmouseleave = () =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{

        elm.style.transform = `translateX(0px) translateX(0px)`;

    });
    
};

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    0: {
    slidesPerView: 1,
    },
    768: {
    slidesPerView: 2,
    },
    991: {
    slidesPerView: 3,
    },
    },
});

var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    0: {
    slidesPerView: 1,
    },
    768: {
    slidesPerView: 2,
    },
    991: {
    slidesPerView: 3,
    },
    },
});

var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    0: {
    slidesPerView: 1,
    },
    768: {
    slidesPerView: 2,
    },
    991: {
    slidesPerView: 3,
    },
    },
});

document.getElementById("whatsappForm").addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

 const phoneNumber = "12027449050"; // Your WhatsApp number
 const formattedMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0A%0A${message}`;

const whatsappURL = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
 window.open(whatsappURL, "_blank");
});
