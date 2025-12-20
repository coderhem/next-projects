const imageContainer = document.querySelector(".image-container");
const img = imageContainer.querySelector(".img");

imageContainer.addEventListener("mousemove", (evt) => {
 let x = evt.clientX - evt.target.offsetLeft;
 let y = evt.clientY - evt.target.offsetTop;
 img.style.transformOrigin = `${x}px ${y}px`;
 img.style.transform = "scale(3)";
 imageContainer.style.cursor = "zoom-in";
});
imageContainer.addEventListener("mouseleave", () => {
 img.style.transformOrigin = "center center";
 img.style.transform = "scale(1)";
 imageContainer.style.cursor = "default";
});