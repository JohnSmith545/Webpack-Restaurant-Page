import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./styles.css";

const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}

// Initial load
loadHome();

// Buttons
document.getElementById("home-btn").addEventListener("click", () => {
    clearContent();
    loadHome();
});

document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();
    loadMenu();
});

document.getElementById("contact-btn").addEventListener("click", () => {
    clearContent();
    loadContact();
});