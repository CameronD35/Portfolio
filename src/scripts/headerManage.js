function setHeaderFixing() {

    const header = document.querySelector("header");

    const headerHeight = header.scrollHeight;

    const userScrollDistance = window.scrollY;

    const currentHeaderState = (header.getAttribute("fixed") === "true");

    const mainMenu = document.querySelector("#main-menu");

    console.log(`${currentHeaderState}, ${headerHeight}, ${userScrollDistance}`);

}

function setHeaderColor() {

    const currentPath = window.location.pathname;

    console.log(currentPath, currentPath === "/")

    if (currentPath !== "/") {

        document.documentElement.style.setProperty("--nav-color", "var(--custom-dark-brown)");
        document.querySelector("nav").style.setProperty("background-image", "linear-gradient(to bottom, var(--custom-white-t), rgba(255,255,255,0) 80%)");

    } else {

        document.documentElement.style.setProperty("--nav-color", "var(--custom-white)");
        document.querySelector("nav").style.setProperty("background-image", "none");

    }

}

export { setHeaderFixing, setHeaderColor };