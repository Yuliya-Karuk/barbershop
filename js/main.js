var loginLink = document.querySelector(".user-navigation");
var modalLogin = document.querySelector(".modal-login");
var closeModalLogin = modalLogin.querySelector(".modal-close");
var loginForm = modalLogin.querySelector(".login-form");
var loginName = modalLogin.querySelector("[name=login]");
var loginPassword = modalLogin.querySelector("[name=password]");

var isStorageSupport = true;
var storageLogin = "";

try {
    storageLogin = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}
        
loginLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.add("modal-show");

    if (storageLogin) {
        loginName.value = storageLogin;
        loginPassword.focus();
    } else {
        loginName.focus();
    }
});

loginForm.addEventListener("submit", function (evt) {
    if (!loginName.value || !loginPassword.value) {
        evt.preventDefault();
        modalLogin.classList.remove("modal-error");
        modalLogin.offsetWidth = modalLogin.offsetWidth;
        modalLogin.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", loginName.value)
        }
    } 
});

closeModalLogin.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-show");
    modalLogin.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (modalLogin.classList.contains("modal-show")) {
            evt.preventDefault()
            modalLogin.classList.remove("modal-show");
            modalLogin.classList.remove("modal-error");
        }
    }
});

var mapLink = document.querySelector(".contact-button-map");
var modalMap = document.querySelector(".modal-map");
var closeModalMap = modalMap.querySelector(".modal-close");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

closeModalMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});