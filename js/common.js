$(document).ready(function(){
    // css index
    $('[data-styleIdx]').length && styleIdx();
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