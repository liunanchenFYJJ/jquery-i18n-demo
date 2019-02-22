function singleIcon() {

    let count = 0;
    $('.svg-icon:eq(0)').on('mousedown', function(e) {
        // 复制该图标
        $(this).clone().addClass(`test${count}`).appendTo($(this).parent());
        
        // 鼠标之前位置
        // console.log(e.pageX)
        let a = e;
        count++;
        
        $(document).mousemove(function(e) {
            // 鼠标现在位置
            let x = e.pageX - a.pageX;
            let y = e.pageY - a.pageY;
            
            $(`.test${count - 1}`).css({
                'left': `${x}px`,
                'top': `${y}px`
            });
            
        });
        
        // 释放图标
        $(document).mouseup(function(e) {
            $(document).off('mousemove');
        });
        
    });
}

singleIcon();

// 每一个图标框就可以进行点击
// $('.icons div').each(function(i, ele) {
//     // $(this).on('click', function(e) {
//     //     console.log(e.target);
//     // });
//     singleIcon();
// });

console.log($('[class^="nav"]'));
