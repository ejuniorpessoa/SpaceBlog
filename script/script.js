initTabNav = () => {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
    const activeClass = "ativo";
    if (tabMenu.length && tabContent.length !== undefined) {
        tabContent[0].classList.add(activeClass)
        activeBar = (index) => {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }
        tabMenu.forEach((itemMenu, idx) => {
            itemMenu.addEventListener("click", () => {
                activeBar(idx);
            });
        });
    }
}
initTabNav();

initShowFaq = () => {
    const faqDt = document.querySelectorAll(".faq-lista dt");
    const activeClass = "ativo";
    if (faqDt.length !== 0) {
        showFaq = (event) => {
            event.preventDefault();
            event.currentTarget.classList.toggle(activeClass);
            event.currentTarget.nextElementSibling.classList.toggle(activeClass);
        }
        faqDt.forEach((item) => {
            item.addEventListener("click", showFaq);
        });
    }
}
initShowFaq();

initScrollAnimation = () => {
    const sections = document.querySelectorAll(".js-scroll");
    const activeClass = "ativo";
    if (sections.length !== 0) {
        const windowHeightPage = window.innerHeight;
        const windowHeightHigh = (windowHeightPage * 0.9 - 20);
        animaScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowHeightHigh) < 0;
                if (isSectionVisible) { section.classList.add(activeClass); } else { section.classList.remove(activeClass); }
            });
        }
        animaScroll();
        window.addEventListener("scroll", animaScroll);
    }
}
initScrollAnimation();

initScrollSuave = () => {
    if (location.search) {/* #dps do index */
        setTimeout(() => {
            const href = location.search.replace("?", "#");
            const section = document.querySelector(href);
            const topo = section.offsetTop;
            window.scrollTo({ top: topo - 75, behavior: "smooth" });
        }, 750);
    }
    const navLinksInternos = document.querySelectorAll(".js-menu a[href^='#']");
    if (navLinksInternos.length !== 0) {
        scrollToSection = (event) => {
            event.preventDefault();
            const href = event.currentTarget.getAttribute("href");
            const section = document.querySelector(href);
            const topo = section.offsetTop;
            window.scrollTo({ top: topo - 75, behavior: "smooth" });
        }
        navLinksInternos.forEach((link) => {
            link.addEventListener("click", scrollToSection);
        });
    }
}
initScrollSuave();