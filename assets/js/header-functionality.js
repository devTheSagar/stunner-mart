document.addEventListener("DOMContentLoaded", function () {
    // Main Menu Dropdown
    const menuHeader = document.getElementById("menuHeader");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    if (menuHeader && dropdownMenu) {
        // Toggle dropdown visibility on header click
        menuHeader.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent event bubbling
            dropdownMenu.style.display =
                dropdownMenu.style.display === "block" ? "none" : "block";
        });

        // Close the menu if clicked outside
        document.addEventListener("click", function (event) {
            if (!menuHeader.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.style.display = "none";
            }
        });

        // Handle submenu clicks
        const submenus = document.querySelectorAll(".dropdown-submenu > a");

        submenus.forEach((submenu) => {
            submenu.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent navigation
                const siblingMenu = this.nextElementSibling;

                if (siblingMenu && siblingMenu.classList.contains("dropdown-menu")) {
                    // Toggle submenu visibility
                    siblingMenu.style.display =
                        siblingMenu.style.display === "block" ? "none" : "block";

                    // Close other open submenus
                    const otherSubmenus = document.querySelectorAll(
                        ".dropdown-submenu > .dropdown-menu"
                    );
                    otherSubmenus.forEach((menu) => {
                        if (menu !== siblingMenu) {
                            menu.style.display = "none";
                        }
                    });
                }
            });
        });
    }

    // Login Dropdown
    const dropdownTrigger = document.querySelector(".dropdown-trigger");
    const loginDropdownMenu = document.querySelector(".login-dropdown-menu");

    if (dropdownTrigger && loginDropdownMenu) {
        dropdownTrigger.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent click propagation
            loginDropdownMenu.style.display =
                loginDropdownMenu.style.display === "block" ? "none" : "block";
        });

        document.addEventListener("click", function () {
            loginDropdownMenu.style.display = "none"; // Close dropdown when clicking outside
        });
    }
});