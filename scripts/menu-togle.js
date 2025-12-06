const d = document;

export const toggleMenu = (btnHamburger, panel, btnClose, menuLink) => {
    const $btnClose = d.querySelector(btnClose); 
    const $menuLinks = d.querySelectorAll(menuLink); 

    const $btn = d.querySelector(btnHamburger);
    const toggleFunction = () => {
        const $panel = d.querySelector(panel);
        $panel.classList.toggle("isactive");
        const isActive = $panel.classList.contains("isactive");
        d.body.style.overflow = isActive ? "hidden" : "auto";
        $btnClose.style.display = "block";
        $btn.setAttribute("aria-expanded", isActive);
    };

    $btn.addEventListener("click", toggleFunction);
    $btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleFunction();
        }
    });

    // Agregar evento al botón de cerrar
    $btnClose.addEventListener("click", () => {
        const $panel = d.querySelector(panel);
        const $btn = d.querySelector(btnHamburger);
        $panel.classList.remove("isactive"); // Remueve la clase isactive
        $btnClose.style.display = "none";
        d.body.style.overflow = "auto";
        $btn.setAttribute("aria-expanded", "false");
    });

    // Agregar evento a cada enlace del menú
    $menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const $panel = d.querySelector(panel);
            const $btn = d.querySelector(btnHamburger);
            $panel.classList.remove("isactive"); // Remueve la clase isactive
            $btnClose.style.display = "none";
            d.body.style.overflow = "auto";
            $btn.setAttribute("aria-expanded", "false");
        });
    });
};

// Llamada a la función
toggleMenu(".menu-mobile", ".panel", ".close-icon", ".menu-link");
