const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentslide = 0;

function HideSlider() {

    slider.forEach(item => item.classList.remove('on'))
    
}

function showSlider() {
    slider[currentslide].classList.add('on')
}

function nextSlider() {
    HideSlider()
    if(currentslide === slider.length -1) {
        currentslide = 0
    } else {
        currentslide++
    }
    showSlider()
}

function prevSlider() {
    HideSlider()
    if(currentslide === 0) {
        currentslide = slider.length -1
    } else {
        currentslide--
    }
    showSlider()
}


btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

