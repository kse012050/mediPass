$(document).ready(function(){
    // css index
    $('[data-styleIdx]').length && styleIdx();

    $(window).scroll(function(){
        const scrollTop = $(this).scrollTop();
        $('[data-animate]').each(function(){
            if($(this).offset().top - $(window).height() / 1.3 < scrollTop){
                $(this).addClass('ani');
            }
        })
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