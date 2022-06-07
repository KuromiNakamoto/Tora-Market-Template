window.onscroll = function () {
    if (window.scrollY > 20) {
        $('.kuro-header').addClass('fixed');
    } else {
        $('.kuro-header').removeClass('fixed');
    }

    if (window.scrollY > 500) {
        $('.kuro-scrollToTop').addClass('active');
    } else {
        $('.kuro-scrollToTop').removeClass('active');
    }
}

$('.kuro-scrollToTop').click(function () {
    // window.scrollTo({top: 0, behavior:"smooth"})
    $('html, body').animate({scrollTop:0}, 'slow');
})

$(document).ready(function () {
    AOS.init();

    const d = new Date();

    $('.kurojs_fullyear').html(d.getFullYear());

    $('.kuro-header-toggler[kuro-toggle="navbar"]').click(function () {
        let _value_target = $(this).attr('kuro-value-target');
        let _value_attr = $(this).attr('kuro-value-attribute');
        let _target = $(this).attr('kuro-target');
        let _overlay = $(this).attr('kuro-target-overlay');
        let _is_active = $(this).attr('is-active');
        let _not_active = $(this).attr('not-active');

        if ($(_value_target).attr(_value_attr) == _is_active) {
            $(_overlay).hide();
            $(_target).animate({ "left":"-300px" }, 100);
        } else if ($(_value_target).attr(_value_attr) == _not_active) {
            $(_overlay).show();
            $(_target).animate({ "left":"0" }, 100);
        }
    });

    $('[kuro-toggle="navbar-overlay"]').click(function () {
        let _this = $(this);
        let _target = $(this).attr('kuro-target');

        $(_target).animate({ "left":"-300px" }, 100, function () {
            setTimeout(function () {
                $(_this).hide();

                $(_target).removeAttr('style');
            }, 300);
        });
    })
});