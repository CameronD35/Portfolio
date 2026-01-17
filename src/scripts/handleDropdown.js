export default function handleDropdown() {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((item, i) => {

        const dropdownParent = item.parentElement;

        dropdownParent.addEventListener("mouseenter", () => {

            item.setAttribute("data-open", "true");

        });

        dropdownParent.addEventListener("mouseleave", () => {

            item.setAttribute("data-open", "false");

        });

    });

}