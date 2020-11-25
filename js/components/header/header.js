import burger from "./burger.js"
import navLocator from "./navLocator.js"
function Header () {
    burger();
    let scollY=window.scrollY;
    const header = document.querySelector("header");
    addEventListener("scroll",()=> {
        navLocator();
        if (scrollY > 0) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    })







}

export default Header;