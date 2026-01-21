function loadContact() {
    const content = document.getElementById("content");

    const container = document.createElement("div");
    const heading = document.createElement("h1");
    heading.classList.add("page-title");
    heading.textContent = "Contact Us";

    const info = document.createElement("h2");
    info.textContent = "Email: guliqeuyjuch@gmail.com";

    container.appendChild(heading);
    container.appendChild(info);
    content.appendChild(container);
}

export default loadContact;