

function aboutSlider () {

    const container = document.querySelector(".about-row");
    container.addEventListener('scrollX',(e)=> {
        console.log("drag");
    },false)

}


export default aboutSlider;