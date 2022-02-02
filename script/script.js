
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


initFaq = () => {
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
initFaq();


initScrollAnimation = () => {
    const sections = document.querySelectorAll(".js-scroll");

    if (sections.length !== 0) {
        const windowMetade = window.innerHeight * 0.6;
        const activeClass = "ativo";

        animaScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if (isSectionVisible) {
                    section.classList.add(activeClass);
                } else {
                    section.classList.remove(activeClass)
                }
            });
        }
        animaScroll();
        window.addEventListener("scroll", animaScroll);
    }
}
initScrollAnimation();

