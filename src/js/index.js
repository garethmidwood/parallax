document.addEventListener(
    "DOMContentLoaded", () => {

        // populate mobile nav
        let mainNav = document.getElementById('main-nav');
        let mobileNav = document.getElementById('mobile-nav');
        mobileNav.innerHTML = mainNav.innerHTML;

        const menu = new MmenuLight(
            document.querySelector( "#mobile-nav" )
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector( 'a[href="#mobile-nav"]' )
            .addEventListener( 'click', ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);

document.addEventListener("DOMContentLoaded", function() {
    $('.carousel .contents').slick({
        appendArrows: '.carousel .controls',
        prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
        nextArrow: '<button type="button" class="slick-next">&gt;</button>',
        infinite: false,
        slidesToScroll: 1,
        variableWidth: true
    });
});