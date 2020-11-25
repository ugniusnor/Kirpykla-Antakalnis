

function scrollFromTop () {
    const button = document.querySelector("#scrollFromTop");
    button.addEventListener("click",(e)=> {
        e.preventDefault();
        let nextSection=document.querySelector('#about-section').clientHeight;
        let headerHeight = document.querySelector("header").clientHeight;
       window.scrollTo(0, nextSection - headerHeight)
    })
}

export default scrollFromTop;