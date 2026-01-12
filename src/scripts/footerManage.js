export default function setFooterFixing() {

    const bodyHeight = document.body.scrollHeight;

    const contentHeight = document.querySelector('.content')?.scrollHeight;

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