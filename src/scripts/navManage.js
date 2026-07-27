function toggleNavElements(evt) {

    const windowWidth = evt.target.innerWidth;

    const components = document.querySelectorAll(`.nav-component[data-nav="true"]`);

    const hidden = (components[0].getAttribute("data-compressed") === "true");

    const compressLength = 750;

    // this uncompresses the nav
    if (hidden && windowWidth > compressLength) {

        components.forEach((elem, i) => {

            elem.setAttribute("data-compressed", "false");

            const time = 750 - ((i + 1) * 125);

            elem.animate([{display: 'none', transform: elem.style.transform, opacity: 0, filter: "blur(5px)"}, {display: 'block', transform: `translateX(0px)`, filter: "none", opacity: 1}], {duration: time, fill: "forwards", easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"})

    });

    // this compresses the nav
    } else if (!hidden && windowWidth < compressLength) {

        const xFinal = components[components.length - 1].querySelector("span").getBoundingClientRect()["right"];

        components.forEach((elem, i) => {

            elem.setAttribute("data-compressed", "true");

            const xInitial = elem.querySelector("span").getBoundingClientRect()["right"];

            const time = 750 - ((i + 1) * 125);
            const distance = xFinal - xInitial;

            elem.animate([{transform: `translateX(${distance}px) scale(0.5)`, opacity: 0, filter: "blur(5px)"}], {duration: time, fill: "forwards", easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"})
            .finished.then(() => {

                return (() => {

                    elem.animate([{display: 'none'}], {duration: 0, fill: "forwards"});

                })()

            });

        });

    }

}

function popUpNav() {

    const popUpNav = document.querySelector(".pop-up-nav-links");

    popUpNav.classList.add("open");

    window.addEventListener("click", checkForClick);

}

function checkForClick(evt) {

    const popUpNav = document.querySelector('.pop-up-nav-links');

    console.log(evt.target);

    popUpNav.classList.remove("open");

    window.removeEventListener("click", checkForClick);

}

function showIcon(){

    

}

export {toggleNavElements, popUpNav}