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

    } else {

        document.documentElement.style.setProperty("--nav-color", "var(--custom-white)");

    }

}

export { setHeaderFixing, setHeaderColor };