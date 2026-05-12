let index = 0;
const slider = document.getElementById('slider');

function startSlider() {
    index = (index + 1) % 4;
    if(slider) {
        slider.style.transform = `translateX(-${index * 25}%)`;
    }
}
setInterval(startSlider, 4000);