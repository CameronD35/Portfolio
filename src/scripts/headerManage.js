export default function setHeaderFixing() {

    const header = document.querySelector("header");

    const headerHeight = header.scrollHeight;

    const userScrollDistance = window.scrollY;

    const currentHeaderState = (header.getAttribute("fixed") === "true");

    const mainMenu = document.querySelector("#main-menu");

    console.log(`${currentHeaderState}, ${headerHeight}, ${userScrollDistance}`);

}