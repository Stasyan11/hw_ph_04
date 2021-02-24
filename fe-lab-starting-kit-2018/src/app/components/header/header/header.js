require('./header.less');
export function header() {

    let header = document.querySelector(".header");
    let header_fixed = document.querySelector(".header-fixed");


    document.addEventListener("scroll", () => {
        if (window.pageYOffset !== 0) {
            header.style.display = "none";
            header_fixed.style.display = "flex";

        } else {
            header.style.display = "flex";
            header_fixed.style.display = "none";
        }
    })
}