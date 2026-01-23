function overlayManage() {

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card, i) => {
        
        const color = card.getAttribute("data-color") + "B3";

        const overlay = document.querySelector(".overlay");

        card.addEventListener("click", () => {

            if (overlay.getAttribute("data-open") === "false") {

                overlay.setAttribute("data-open", "true");

                document.documentElement.style.setProperty("--overlay-bg-color", color);

            }

        });

    });

}

function clickResponse(evt) {

    const overlay = document.querySelector(".overlay");

    console.log(evt.target, (overlay.getAttribute("data-open") === "true"))

    if ((overlay.getAttribute("data-open") === "true") && !overlay.contains(evt.target)) {

        overlay.setAttribute("data-open", "false");

    }

}

export {overlayManage, clickResponse};