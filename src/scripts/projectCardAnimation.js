export default function projectCardAnimation() {

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            console.log("mouse entered")

            for (let i = 1; i <= 3; i++) {
                card.style.setProperty(`--secondary-${i}-x`, `${Math.floor(Math.random() * 101)}%`);
                card.style.setProperty(`--secondary-${i}-y`, `${Math.floor(Math.random() * 101)}%`);
                card.style.setProperty(`--tertiary-${i}-x`, `${Math.floor(Math.random() * 101)}%`);
                card.style.setProperty(`--tertiary-${i}-y`, `${Math.floor(Math.random() * 101)}%`);
            }

        });

    });

    console.log("attached!")

}