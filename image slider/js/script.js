let MySlider = document.querySelector('.mySlide');
let MySliderImg = document.querySelectorAll('.mySlide img');
console.log(MySliderImg.length)

let prvBtn = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let counter = 1;
let size = MySliderImg[0].clientWidth;

console.log(size)

MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener("click", function(){

    if(counter>=MySliderImg.length-1)
     return;
    MySlider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prvBtn.addEventListener("click", function(){
    if(counter<=0)
     return;
    MySlider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    MySlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

MySlider.addEventListener("transitionend", function(){
    if(MySliderImg[counter].id==="lastImg"){
        MySlider.style.transition = "none";
        counter = MySliderImg.length - 2;
        MySlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(MySliderImg[counter].id==="firsImg"){
        MySlider.style.transition = "none";
        counter = MySliderImg.length - counter;
        MySlider.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
})