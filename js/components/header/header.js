import burger from "./burger.js"

function Header () {
    burger();
    let scollY=window.scrollY;
    const header = document.querySelector("header");
    addEventListener("scroll",()=> {
        if (scrollY > 0) {
            console.log("yes");
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    })







}

export default Header;