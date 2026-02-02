function setThemeAssetScroll() {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {

        const assetContainer = card.querySelector(".asset-container");
        const leftShadow = card.querySelector(".left-shadow");
        const rightShadow = card.querySelector(".right-shadow");

        console.log(card);

        assetContainer.addEventListener("scroll", (evt) => {

            // console.log(leftShadow);

            const maxScroll = assetContainer.scrollWidth - assetContainer.clientWidth;
            const scrollDistance = assetContainer.scrollLeft;

            console.log(assetContainer.scrollLeft, maxScroll);

            if (scrollDistance > 0) { leftShadow.style.opacity = 1; }
            else { leftShadow.style.opacity = 0; }

            if (scrollDistance < maxScroll) { rightShadow.style.opacity = 1; }
            else { rightShadow.style.opacity = 0; }

        })

    })


}

// function setFooterColor() {

//     const currentPath = window.location.pathname;

//     console.log(currentPath, currentPath === "/")

//     if (currentPath === "/") {

//         document.documentElement.style.setProperty("--footer-color", "var(--custom-dark-brown)");
//         document.documentElement.style.setProperty("--footer-accent", "var(--custom-tan)");
//         document.documentElement.style.setProperty("--footer-accent-hover", "var(--custom-white)");

//     } else {

//         document.documentElement.style.setProperty("--footer-color", "var(--custom-white)");
//         document.documentElement.style.setProperty("--footer-accent", "var(--custom-black-st)");
//         document.documentElement.style.setProperty("--footer-accent-hover", "var(--custom-black)");

//     }

// }

export {setThemeAssetScroll};