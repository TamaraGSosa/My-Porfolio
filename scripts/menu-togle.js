const d = document;

export const toggleMenu = (btnHamburger, panel, btnClose, menuLink) => {
    const $btnClose = d.querySelector(btnClose); 
    const $menuLinks = d.querySelectorAll(menuLink); 

    d.querySelector(btnHamburger).addEventListener("click", () => {
        const $panel = d.querySelector(panel); 
        $panel.classList.toggle("isactive"); 
        d.body.style.overflow = $panel.classList.contains("isactive") ? "hidden" : "auto"; 
        $btnClose.style.display = "block"; 
    });

    // Agregar evento al botón de cerrar
    $btnClose.addEventListener("click", () => {
        d.querySelector(panel).classList.remove("isactive"); // Remueve la clase isactive
        $btnClose.style.display = "none"; 
        d.body.style.overflow = "auto"; 
    });

    // Agregar evento a cada enlace del menú
    $menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            d.querySelector(panel).classList.remove("isactive"); // Remueve la clase isactive
            $btnClose.style.display = "none"; 
            d.body.style.overflow = "auto"; 
        });
    });    
};

// Llamada a la función
toggleMenu(".menu-mobile", ".panel", ".close-icon", ".menu-link");
