import pizzaImage from "./images/pizza.jpg";
import pastaImage from "./images/pasta.jpg";
import burgerImage from "./images/burger.jpg";
import friesImage from "./images/fries.jpg";

const loadMenu = () => {
    // Clear content
    const content = document.getElementById("content");
    content.textContent = "";

    // Menu Title
    const heading = document.createElement("h1");
    heading.classList.add("page-title");
    heading.textContent = "Menu";

    // Pizza
    const pizza = document.createElement("div");
    pizza.classList.add("menu-item");

    const pizzaImg = document.createElement("img");
    pizzaImg.src = pizzaImage;
    pizzaImg.alt = "Pizza";

    const pizzaText = document.createElement("h2");
    pizzaText.textContent = "Classic Cheese Pizza";

    // Pasta
    const pasta = document.createElement("div");
    pasta.classList.add("menu-item");

    const pastaImg = document.createElement("img");
    pastaImg.src = pastaImage;
    pastaImg.alt = "Pasta";

    const pastaText = document.createElement("h2");
    pastaText.textContent = "Creamy Mushroom Pasta";

    // Burger
    const burger = document.createElement("div");
    burger.classList.add("menu-item");

    const burgerImg = document.createElement("img");
    burgerImg.src = burgerImage;
    burgerImg.alt = "Burger";

    const burgerText = document.createElement("h2");
    burgerText.textContent = "Spicy BBQ Burger";

    // Fries
    const fries = document.createElement("div");
    fries.classList.add("menu-item");

    const friesImg = document.createElement("img");
    friesImg.src = friesImage;
    friesImg.alt = "Fries";

    const friesText = document.createElement("h2");
    friesText.textContent = "Crispy French Fries";

    // Appending items to content
    pizza.appendChild(pizzaImg);
    pizza.appendChild(pizzaText);

    pasta.appendChild(pastaImg);
    pasta.appendChild(pastaText);

    burger.appendChild(burgerImg);
    burger.appendChild(burgerText);

    fries.appendChild(friesImg);
    fries.appendChild(friesText);

    content.appendChild(heading);
    content.appendChild(pizza);
    content.appendChild(pasta);
    content.appendChild(burger);
    content.appendChild(fries);
};

export default loadMenu;
