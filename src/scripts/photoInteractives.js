function setUpInteractivePhotos(){

    document.querySelectorAll(".image").forEach((img) => {

        img.addEventListener("click", (evt) => {

            const dimensions = img.getBoundingClientRect();

            img.style.opacity = 0;

            document.querySelector('.photo-grid').style.pointerEvents = 'none';

            createLargeImage(dimensions, evt.target);

        });

    });

}

function createLargeImage(dimensions, target) {

    const width = dimensions.width;
    const height = dimensions.height;
    const x = dimensions.x;
    const y = dimensions.y;
    
    const uncroppedWidth = target.getAttribute('width');
    const uncroppedHeight = target.getAttribute('height');

    const aspectRatio = (uncroppedWidth / uncroppedHeight).toFixed(4);

    // console.log(aspectRatio);

    // console.log(width, height, x, y);

    const imgSpace = document.querySelector('.large-image');

    imgSpace.setAttribute("data-name", target.getAttribute("data-name"))

    // initial properties fr
    imgSpace.style.boxShadow = '0px 0px 50px var(--custom-black-t)';
    imgSpace.style.position = "fixed";
    imgSpace.style.width = width + 'px';
    imgSpace.style.height = height + 'px';
    imgSpace.style.opacity = 1;
    imgSpace.style.backgroundColor = "var(--custom-black-t)";
    imgSpace.style.left = x + 'px';
    imgSpace.style.top = y + 'px';

    imgSpace.src = target.getAttribute('src');

    let xSize; 
    let ySize;

    // height > width
    if (aspectRatio < 1) {

        xSize = '30vw';
        ySize = `30vw / ${aspectRatio}`;

    // width > height
    } else {

        xSize = `45vh * ${aspectRatio}`;
        ySize = `45vh`;

    }

    // animation bruh
    imgSpace.animate([
        {left: `${x}px`, top: `${y}px`, width: `${width}px`, height: `${height}px`, borderRadius: `0px`},
        {left: `calc(50vw - (${xSize} / 2))`, top: `calc(50vh - (${ySize} / 2))`, width: `calc(${xSize})`, height: `calc(${ySize})`, borderRadius: `15px`, opacity: 1}
    ], {duration: 400, fill: "forwards", easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"});

    document.querySelector(".large-image-cont").appendChild(imgSpace);

    document.querySelector('.content').style.filter = 'blur(5px)';

    window.addEventListener('click', checkForClick);

    console.log(imgSpace.getAttribute("src"))

}

function checkForClick(evt) {

    const imgSpace = document.querySelector('.large-image');

    const evtParent = evt.target.parentNode.getAttribute("class");

    console.log(evtParent);

    if (evtParent != "large-image-cont" && evtParent != "photo-grid") {

        removeLargeImage();

    }

}

function removeLargeImage() {

    const imgSpace = document.querySelector('.large-image');

    const originalImage = document.querySelectorAll(`[data-name="${imgSpace.getAttribute("data-name")}"]`)[0];

    const originalDimensions = originalImage.getBoundingClientRect();

    const width = originalDimensions.width;
    const height = originalDimensions.height;
    const x = originalDimensions.x;
    const y = originalDimensions.y;

    console.log(originalImage);

    document.querySelector('.content').style.filter = '';

    document.querySelector('.photo-grid').style.pointerEvents = '';

    imgSpace.animate([
        {left: `${x}px`, top: `${y}px`, width: `${width}px`, height: `${height}px`, borderRadius: `0px`}
    ], {duration: 400, fill: "forwards", easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"})
    .finished.then(() => {
        return imgSpace.animate([{opacity: 0}], {duration: 0, fill: "forwards"})
    });

    setTimeout(() => {originalImage.style.opacity = 1;}, 400);

}

export {setUpInteractivePhotos};