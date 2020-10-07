const mobileMenuBtn = document.querySelector(".navbar-burger");
const mobileMenu = document.querySelector("#mobileMenu");

mobileMenuBtn.addEventListener("click", function () {

    if (mobileMenuBtn.classList.contains("is-active")) {

        mobileMenuBtn.classList.remove("is-active");
        mobileMenu.classList.remove("is-active");
    } else {

        mobileMenuBtn.classList.add("is-active");
        mobileMenu.classList.add("is-active");
    };

});