$(function(){
    $('.bossTop-top>ul>li').on("click",function(){
        console.log($(this).index());
        console.log($('.section').eq($(this).index()).offset());
    })
})