
function makeCarouselWork() {
    const slides = document.querySelectorAll(".slide")
    let controller = 0;

    document.querySelector(".next-btn").onclick = function () {
        controller++;
        if (controller > slides.length - 1) { controller = slides.length - 1 }
        console.log(controller);
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${-100 * controller}%)`
        })

    }

    document.querySelector(".prv-btn").onclick = function () {
        controller--;
        if (controller < 1) { controller = 0 }
        console.log(controller);
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${-100 * controller}%)`
        })
    }
}

makeCarouselWork()

const testBtn= document.querySelector("#test-btn")
if(testBtn){
    testBtn.onclick= function(){
        console.log("got click");
        let numberInput= document.querySelector("#number-slide").value
        //Create a number of slide
        let sliderContainer=document.querySelector(".slider-container");
        sliderContainer.innerHTML=``;
        for(let i=0;i<numberInput;i++){
            sliderContainer.innerHTML+=`
            <div class="slide">
                <h4>${i+1}</h4>
            </div>
            `
        }
        makeCarouselWork()
    }
}
