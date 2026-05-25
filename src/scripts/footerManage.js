function setFooterFixing() {

    const bodyHeight = document.body.scrollHeight;

    const windowHeight = window.innerHeight;

    const footer = document.querySelector('.footer');

    const footerHeight = footer.scrollHeight;

    const isFixed = footer.classList.contains("fixed");

    if (isFixed) {

        const bodyIsLarger = (bodyHeight > (windowHeight - footerHeight));

        console.log("larger:" + bodyIsLarger);

        if (bodyIsLarger) {

            footer?.classList.remove("fixed");

        }

    } else {

        const bodyIsSmaller = (bodyHeight < windowHeight);

        console.log("smaller: " + bodyIsSmaller);

        if (bodyIsSmaller) {

            footer?.classList.add("fixed");

        }

    }


}

function setFooterColor() {

    const currentPath = window.location.pathname;

    console.log(currentPath, currentPath === "/")

    if (currentPath === "/") {

        document.documentElement.style.setProperty("--footer-color", "var(--custom-dark-blue)");
        document.documentElement.style.setProperty("--footer-accent", "var(--custom-light-blue)");
        document.documentElement.style.setProperty("--footer-accent-hover", "var(--custom-white)");

    } else {

        document.documentElement.style.setProperty("--footer-color", "var(--custom-white)");
        document.documentElement.style.setProperty("--footer-accent", "var(--custom-black-st)");
        document.documentElement.style.setProperty("--footer-accent-hover", "var(--custom-black)");

    }

}

export {setFooterFixing, setFooterColor};