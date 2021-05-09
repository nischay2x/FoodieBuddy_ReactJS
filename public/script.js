$(document).ready(() => {
    var navbar = document.querySelector('#navbar');
    var toggle = document.querySelector('#navbar-toggle');
    var hidden = true;
    toggle.addEventListener('click', () => {
        if (hidden) {
            navbar.classList.replace('hidden', 'expanded');
        } else {
            navbar.classList.replace('expanded', 'hidden');
        }
        hidden = !hidden;
    });

    // var bgs = new Array('src/images/digitalAdvertisment.jpg', 'src/images/eventManagement.jpg', 'src/images/graphicDesign.jpg');
    // console.log(bgs);
    // var nextImg = 0;
    // slideShow();
    // function slideShow() {
    //     if (nextImg >= bgs.length) { nextImg = 0 }
    //     $('.testerClass')
    //         .css('background-image', `url(${bgs[nextImg++]})`)
    //     setTimeout(slideShow, 4000)
    // }
})


