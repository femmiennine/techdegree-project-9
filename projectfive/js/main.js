//Search Bar

const searchString = document.getElementById("search");
const a = document.getElementsByClassName("image");

searchString.addEventListener("keyup", () => {
  const input = searchString.value.toUpperCase();

  for (i = 0; i < a.length; i += 1) {
    const attrData = a[i].getAttribute("data-title");
    if (attrData.toUpperCase().indexOf(input) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
});

searchString.addEventListener("search", () => {
  if (event.target.value === "") {
    for (i = 0; i < a.length; i += 1) {
      a[i].style.display = "";
    }
  }
});

//Lightbox

lightbox.option({
  alwaysShowNavOnTouchDevices: true,
  fitImagesInViewport: true,
  resizeDuration: 200,
  wrapAround: true
});
