function loadHome() {
    const content = document.getElementById("content");

    const container = document.createElement("div");

    const heading = document.createElement("h1");
    heading.classList.add("page-title");
    heading.textContent = "Welcome to Juch's Made Up Kitchen";

    const paragraph = document.createElement("p");
    paragraph.textContent =
        "The finest food in the realm. Fresh, legendary, unforgettable.";

    container.appendChild(heading);
    container.appendChild(paragraph);
    content.appendChild(container);
}

export default loadHome;