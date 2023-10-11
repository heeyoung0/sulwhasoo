
$(function(){
    $('.left_lang > a').on('click', function(){
        $('.lang_menu').stop().slideDown(400);
    });
    $('.lang_menu').on('mouseleave', function(){
        $(this).stop().slideUp(300);
    });

    /* let subText = $('.sub-text') */
    $('.main-menu > li').on('mouseover', function() {
        $(this).children('.hide-menu').stop().fadeIn(300)
        let visualh = $(this).children('.hide-menu').height();
        $('.hide-menu-bg').css({'height': visualh , 'border-top':'1px solid #ccc'}).stop().slideDown(300)
    })
    $('.main-menu > li').on('mouseleave', function() {
        $(this).children('.hide-menu').stop().fadeOut(300)
        $('.hide-menu-bg').css({'height': '0', 'border-top':'none'})
    })
    /* $('.influ > .swiper-slide').on('mousemove', function(){
        $('.inner_text').stop().fadeIn(300);
    }) */
    $('.footer-toggle').on('click', function() {
        $(this).toggleClass('on')
        $('.b_footer_hide').stop().slideToggle(500)
    })
    $('.plus-btn .nav-ico').on('click', function() {
        $(this).toggleClass('active')
        $(this).parent('.plus-btn').siblings('.sub-menu').slideToggle(300)
    })
    
    /* let ul = $(this).closest('ul');
    // 현재 선택된 ul 인덱스 외의 모든 ul의 하위 .span_m 메뉴는 숨김처리
    $('.reactive-gnb .sub-menu:not(:eq(' + ul.index() + ')) .sub-menu').hide();
    // 현재 선택된 ul 인덱스의 하위 .span_m 메뉴는 보여주게 처리
    $('.reactive-gnb .sub-menu:eq(' + ul.index() + ') .sub-menu').show(); */
    $('.hide figure').on('click', function() {
        $('.reactive-menu').animate({'left':'0'},300)
    })
    $('.top-logo').children('.close').on('click', function() {
        $('.reactive-menu').animate({'left':'-1100px'},300)
    })

    
    $('.lang-area').on('click', function(e) {
        $('#lang-modal').addClass('action')
        $('body').css({'overflow':'hidden'})
    })
    $('#closeBtn').on('click', function() {
        $('#lang-modal').removeClass('action')
        $('body').css({'overflow':'auto'})
    })
})