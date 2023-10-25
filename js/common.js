$(document).ready(function(){
    // css index
    $('[data-styleIdx]').length && styleIdx();

    // 스크롤 이벤트
    scrollEvent()

    // 메뉴 클릭
    menuCLick();

    // 텝
    tab()
})

// css index
function styleIdx(){
    const selector = $('[data-styleIdx]');
    selector.css('--totalIdx', selector.children().length - 1);
    selector.each(function(){
        const attrValue = $(this).attr('data-styleIdx');
        $(this).find('>' + (attrValue ? attrValue : ' *')).each(function(i){
            $(this).css('--styleIdx', i);
        })
    })
}

// 스크롤 이벤트
function scrollEvent(){
    $(window).scroll(function(){
        const scrollTop = $(this).scrollTop();
        scrollTop > 0 ?
            $('header').addClass('active') :
            $('header').removeClass('active');

        $('[data-animate]').each(function(){
            if($(this).offset().top - $(window).height() / 1.3 < scrollTop){
                $(this).addClass($(this).attr('data-animate') ? $(this).attr('data-animate') : 'ani');
            }else{
                $(this).removeClass($(this).attr('data-animate') ? $(this).attr('data-animate') : 'ani');
            }
        })
    })
}

// 메뉴 클릭
function menuCLick(){
    // 메뉴 리스트 클릭
    $('header nav ul li a').click(function(e){
        e.preventDefault();
        let linkOffetTop = $('#' + $(this).attr('href') + ' h3').offset().top
        let headerHeight = $('header').height();
        console.log($('#' + $(this).attr('href') + ' h3').css('transform'));
        $('html, body').animate({scrollTop: linkOffetTop - headerHeight * 2.5})
        $('nav').removeClass('active')
    })

    // 모바일 메뉴 열기
    $('header > button').click(function(){
        $('header nav').addClass('active');
    });

    // 모바일 메뉴 닫기
    $('header nav button').click(function(){
        $('header nav').removeClass('active');
    })
}

// 텝
function tab(){
    $('[data-tab="click"] li button').click(function(){
        $('[data-tab="click"] li').removeClass('active');
        $('[data-tab="click"] li div').stop().slideUp();
        $(this).parent().addClass('active');
        $(this).siblings().stop().slideDown();
        $('[data-tab="contents"]').children().hide();
        $('[data-tab="contents"]').children().eq($(this).parent().index()).fadeIn();
    })
}