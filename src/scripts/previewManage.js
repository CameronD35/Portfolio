function previewAnimation() {

    setInterval(swapPositions, 5000);

}

function swapPositions() {

    const imageBoxes = document.querySelectorAll(".image-box");

    imageBoxes.forEach((box) => {

        let firstImg = box.children[0];
        let lastImg = box.children[2];

        box.insertBefore(lastImg, firstImg);

    });

    

}

export { previewAnimation };