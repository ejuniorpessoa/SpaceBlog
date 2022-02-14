initMenuMobile = () => {
    const btnMobile = document.getElementById("btn-mobile");
    const navMenu = document.querySelectorAll("#menu-mobile a[href^='#']");
    removeActiveClass = () => {
        nav.classList.remove("active");
    }
    navMenu.forEach((item) => {
        item.addEventListener("click", removeActiveClass);
    })
    toggleMenu = (event) => {
        if (event.type === "touchstart")
            event.preventDefault();
        const nav = document.getElementById("nav");
        nav.classList.toggle("active");
        const active = nav.classList.contains("active");
        event.currentTarget.setAttribute("aria-expanded", active);
        if (active) {
            event.currentTarget.setAttribute("aria-label", "Fechar Menu");
        } else {
            event.currentTarget.setAttribute("aria-label", "Abrir Menu");
        }
    }
    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
}
initMenuMobile();