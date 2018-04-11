$(function () {
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu',
        loopBottom: true
    });

    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 3000);
});


function mOver(obj){
    obj.style.background="#77f3de";


}
function mOut(obj){
    obj.style.background="#fff";

}



//Swiper4.x
var mySwiper = new Swiper ('.swiper-container', {
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
})




