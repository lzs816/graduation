var fix = false;
$('#icon-pin').click(function(){
    if(!fix){
        $(this).css({
            'color':'#f26651',
            'transform': 'rotate(-45deg)'
        })
        $('header').css('position','fixed');
        fix = !fix;
    } else {
        $(this).css({
            'color':'#fff',
            'transform': 'rotate(-135deg)'
        })
        $('header').css('position','static');
        fix = !fix;
    }

})