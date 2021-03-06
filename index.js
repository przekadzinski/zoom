const image = document.querySelector('img')
const container = document.querySelector('.zoomOnHover')

const result = document.createElement("div");
result.classList.add('imgZoom')
container.appendChild(result)
const style = result.style


const moveLens = (e) => {
    result.classList.add('active');
    const url = image.getAttribute("src");
    // style.visibility = "visible";
    let posX = e.offsetX;
    let posY = e.offsetY;
    style.backgroundImage = `url("${url}")`;
    style.backgroundPosition = `${-posX}px ${-posY}px`
}

const hiddenResult = () => {
    // style.visibility = "hidden"
    result.classList.remove('active')
}


image.addEventListener("mousemove", moveLens);
image.addEventListener("mouseleave", hiddenResult)
