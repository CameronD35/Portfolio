import createDropdown from "./handleDropdown";

function appendDropdown() {

    const navElems = document.querySelectorAll(`[data-is-dropdown="true"]`);

    navElems.forEach((elem, i) => {

        const items = ["test1", "test2"]
        
    })

}

function hideNavElements() {

    const components = document.querySelectorAll(`.nav-component[data-nav="true"]`);

    const xFinal = components[3].querySelector("span").getBoundingClientRect()["right"];

    components.forEach((elem, i) => {
        // console.log(elem);

        const xInitial = elem.querySelector("span").getBoundingClientRect()["right"];

        console.log(xFinal - xInitial);

        const time = 1000 - ((i + 1) * 125);
        const distance = 600 - ((i + 1) * 150);

        // elem.animate([{transform: `translateX(${distance}px)`}], {duration: time, fill: "forwards", delay: 1000, easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"})
    });

}

export {appendDropdown, hideNavElements}