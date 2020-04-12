
$(document).ready(function(){
    $(".slider").slick({
        
        autoplay:true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        infinite: true,
        easing: 'liner',
        speed: 470,
        
        prevArrow:'<button type="button" class="prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="next"><i class="fa fa-angle-right"></i></button>',    
    });

    $('#btn1').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
        $('#navigation').toggle(); //включает/выключает элемент id
    });

});
