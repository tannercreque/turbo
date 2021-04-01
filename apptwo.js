const turboClick = document.querySelector('.turbo');
let turboFlutter = document.querySelector('#turbo-flutter');
turboClick.addEventListener('click',() =>{
    turboFlutter.play();
});
const dsClick = document.querySelector('.down-shift')
let downShift = document.querySelector('#down-shift-aud')
dsClick.addEventListener('click',() => {
    downShift.play();
})