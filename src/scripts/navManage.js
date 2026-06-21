import createDropdown from "./handleDropdown";

function appendDropdown() {

    const navElems = document.querySelectorAll(`[data-is-dropdown="true"]`);

    navElems.forEach((elem, i) => {

        const items = ["test1", "test2"]
        
    })

}

function toggleNavElements(evt) {

    const windowWidth = evt.target.innerWidth;

    const components = document.querySelectorAll(`.nav-component[data-nav="true"]`);

    const hidden = (components[0].getAttribute("data-compressed") === "true");

    // this uncompresses the nav
    if (hidden && windowWidth > 650) {

        components.forEach((elem, i) => {

            elem.setAttribute("data-compressed", "false");

            const time = 1000 - ((i + 1) * 125);

            elem.animate([{display: 'block'}], {duration: 0, fill: "forwards"})
            .finished.then(() => {

                return (() => {

                    elem.animate([{transform: `translateX(0px)`, opacity: 1}], {duration: time, fill: "forwards", easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"});

                })()

            });

        });

    // this compresses the nav
    } else if (!hidden && windowWidth < 650) {

        const xFinal = components[3].querySelector("span").getBoundingClientRect()["right"];

        components.forEach((elem, i) => {

            elem.setAttribute("data-compressed", "true");

            const xInitial = elem.querySelector("span").getBoundingClientRect()["right"];

            const time = 1000 - ((i + 1) * 125);
            const distance = xFinal - xInitial;

            elem.animate([{transform: `translateX(${distance}px)`, opacity: 0}], {duration: time, fill: "forwards", easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"})
            .finished.then(() => {

                return (() => {

                    elem.animate([{display: 'none'}], {duration: 0, fill: "forwards"});

                })()

            });

        });

    }

}

export {appendDropdown, toggleNavElements}