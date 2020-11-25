

function scrollFromTop () {
    const button = document.querySelector("#scrollFromTop");
    button.addEventListener("click",(e)=> {
        e.preventDefault();
        let nextSection=document.querySelector('#about-section').clientHeight;
        let headerHeight = document.querySelector("header").clientHeight;
        window.innerWidth > 979 ? window.scrollTo( 0 , nextSection-100) : window.scrollTo( 0 , nextSection-70)
        
    })
}

export default scrollFromTop;