document.addEventListener("DOMContentLoaded", function() {
    var menuBox = document.getElementById('menu-box');
    var header = document.getElementById('main-header');

    if (menuBox && header) { 
        menuBox.addEventListener('change', function() {
            if (menuBox.checked) {
                header.classList.add('menu-open');
            } else {
                header.classList.remove('menu-open');
            }
        });
    } else {
        console.error('Elemento "menu-box" ou "main-header" não encontrado.');
    }

   
    let count = 1;
    document.getElementById("radio1").checked = true; 

    setInterval(function(){
        nextImage();
    }, 4000);

    function nextImage(){
        count++;
        if(count > 4) {
            count = 1;
        }
        document.getElementById("radio" + count).checked = true; 
    }

  
    let slideIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide-2');
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${-slideIndex * 100}%)`;
        });
        updateDots();
    }

    function changeSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.className = dot.className.replace(' active', '');
            if (i === slideIndex) {
                dot.className += ' active';
            }
        });
    }

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.addEventListener('click', () => {
            slideIndex = i;
            showSlide(slideIndex);
        });
    });

    showSlide(slideIndex);
});


