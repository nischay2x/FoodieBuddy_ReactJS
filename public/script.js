$(document).ready(() => {
//     var navbar = document.querySelector('#navbar');
//     var toggle = document.querySelector('#navbar-toggle');
//     var hidden = true;
//     toggle.addEventListener('click', () => {
//         if (hidden) {
//             navbar.classList.replace('hidden', 'expanded');
//         } else {
//             navbar.classList.replace('expanded', 'hidden');
//         }
//         hidden = !hidden;
//     });

//     var bgs = new Array('src/images/digitalAdvertisment.jpg', 'src/images/eventManagement.jpg', 'src/images/graphicDesign.jpg');
//     console.log(bgs);
    var current = 0; var total = 3;
    let prev;
    slideShow();
    function slideShow() {
        if (current >= total) { current = 0 }
        if (current === 0) { prev = total-1 }
        else prev = current-1;
        // console.log(`quote${current}`);
        // console.log(prev);
        document.getElementById(`quote${current}`).classList.replace('hidden-lg', 'expanded-lg');
            document.getElementById(`quote${prev}`).classList.replace('expanded-lg', 'hidden-lg');
        current++;
        setTimeout(slideShow, 6000)
    }
})


