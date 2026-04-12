function setUpInteractivePhotos(){

    document.querySelectorAll(".image").forEach((img) => {

        img.addEventListener("click", (evt) => {

            const dimensions = img.getBoundingClientRect();

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

    imgSpace.classList.add('large-image')

    // initial properties fr
    imgSpace.style.position = "fixed";
    imgSpace.style.width = width + 'px';
    imgSpace.style.height = height + 'px';
    imgSpace.style.backgroundColor = "red";
    imgSpace.style.left = x + 'px';
    imgSpace.style.top = y + 'px';
    imgSpace.style.backgroundImage = `url(${target.getAttribute('src')})`;

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
        {left: `${x}px`, top: `${y}px`, width: `${width}px`, height: `${height}px`}, 
        {left: `calc(50vw - (${xSize} / 2))`, top: `calc(50vh - (${ySize} / 2))`, width: `calc(${xSize})`, height: `calc(${ySize})`}
    ], {duration: 400, fill: "forwards", easing: "cubic-bezier(0.175, 0.885, 0.32, 1.0)"});

    document.body.appendChild(imgSpace);

    document.querySelector('.content').style.filter = 'blur(5px)'

    console.log(imgSpace)

}

export {setUpInteractivePhotos};