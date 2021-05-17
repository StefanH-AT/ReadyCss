let storedThemeId = localStorage.getItem("theme");

let themeSelect = document.getElementById("theme-select");
let body = document.querySelector("body");

themeSelect.addEventListener("change", function () {
    let option = themeSelect.selectedIndex;
    
    setTheme(option);
});

function setTheme(mode) {
    switch (mode) {
        case 0:
            body.classList.add("theme-light");
            body.classList.remove("theme-dark", "theme-system");
        break;
        case 1:
            body.classList.add("theme-dark");
            body.classList.remove("theme-light", "theme-system");
        break;
        case 2:
            body.classList.add("theme-system");
            body.classList.remove("theme-light", "theme-dark");
        break;
    }
    
    localStorage.setItem("theme", mode);
}

function initTheme() {
    if(storedThemeId !== null) {
        setTheme(storedThemeId);
    } else {
        setTheme(2);
    }
}
