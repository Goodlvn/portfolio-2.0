const mobileMenuBtn = document.querySelector(".navbar-burger");
const mobileMenu = document.querySelector("#mobileMenu");
const modalBtnCont = document.querySelector(".projects");
const modalCont = document.querySelector(".modal-container");
const modals = Array.from(document.getElementsByClassName("modal"));

mobileMenuBtn.addEventListener("click", function () {

    if (mobileMenuBtn.classList.contains("is-active")) {

        mobileMenuBtn.classList.remove("is-active");
        mobileMenu.classList.remove("is-active");
    } else {

        mobileMenuBtn.classList.add("is-active");
        mobileMenu.classList.add("is-active");
    };
});


modalBtnCont.addEventListener("click", event => {
    if (event.target.classList.contains("gifBtn")) {
        modals.forEach(modal => {
            if(event.target.parentElement.id === modal.getAttribute('data-proj') ){
                modal.classList.add("is-active");
            };
        });
    };
});

modalCont.addEventListener("click", event => {
    if(event.target.className === "modal-background" || event.target.classList.contains("modal-close")){
        event.target.parentElement.classList.remove("is-active");
    }
});