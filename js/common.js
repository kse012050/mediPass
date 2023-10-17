$(document).ready(function(){
    // css index
    $('[data-styleIdx]').length && styleIdx();

    $(window).scroll(function(){
        const scrollTop = $(this).scrollTop();
        if(scrollTop > 0){
            $('header').addClass('active')
        }else{
            $('header').removeClass('active')
        }
        $('[data-animate]').each(function(){
            if($(this).offset().top - $(window).height() / 1.3 < scrollTop){
                $(this).addClass('ani');
            }else{
                $(this).removeClass('ani');
            }
        })
    })

    $('header > button').click(function(){
        $('header nav').addClass('active');
    });
    $('header nav button').click(function(){
        $('header nav').removeClass('active');
    })

    $('header nav ul li a').click(function(e){
        e.preventDefault();
        let linkOffetTop = $('#' + $(this).attr('href') + ' h3').offset().top
        let headerHeight = $('header').height();
        $('html, body').animate({scrollTop: linkOffetTop - headerHeight})
        $('nav').removeClass('active')
    })

    $('[data-tab="click"] li button').click(function(){
        $('[data-tab="click"] li').removeClass('active');
        $('[data-tab="click"] li div').stop().slideUp();
        $(this).parent().addClass('active');
        $(this).siblings().stop().slideDown();
        $('[data-tab="contents"]').children().removeClass('active');
        $('[data-tab="contents"]').children().eq($(this).parent().index()).addClass('active');
    })
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