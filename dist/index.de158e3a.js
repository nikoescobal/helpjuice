// Declaring variables
const btnOpen = document.querySelector("button.mobile-menu-button-open");
const btnClose = document.querySelector("button.mobile-menu-button-close");
const menu = document.querySelector(".mobile-menu");
// Adding event listeners
btnOpen.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    btnClose.classList.remove("hidden");
    btnOpen.classList.add("hidden");
});
btnClose.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    btnClose.classList.add("hidden");
    btnOpen.classList.remove("hidden");
});

//# sourceMappingURL=index.de158e3a.js.map
