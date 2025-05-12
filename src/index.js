import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";

import "./styles.css";

const buttons = document.querySelectorAll(".btn");

function setActiveButton(clickedButton){
    buttons.forEach(btn => btn.classList.remove("active"));
    clickedButton.classList.add("active");
    
}

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const id = e.target.id;
        setActiveButton(e.target);

        if (id === "home") {
            homePage();
        } else if (id === "menu") {
            menuPage();
        } else {
            contactPage();
        }
    });
});

homePage();
