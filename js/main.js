// Toggle Bar
$('.toggle-bar').on('click', function (event) {
    $('this').toggleClass('open');
    $('.navigation-bar').slideToggle('200');
})

//Lightbox

lightbox.option({
    alwaysShowNavOnTouchDevices: true,
    fitImagesInViewport: true,
    resizeDuration: 200,
    wrapAround: true
  });

//       

let themeColor = document.querySelectorAll('.theme-toggler span');
    themeColor.forEach(color => color.addEventListener('click', () =>{
        let background = color.style.background;
        document.querySelector('body').style.background = background;
    }));