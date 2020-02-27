$(function(){

    $.fn.slider = function(options) {

        var settings = $.extend( {
            autoPlay: true,
            interval: 2000,
        }, options);
       

        $(this).children().addClass("aquiles__item")
        var item = $(this).find(".aquiles__item");
        var dots = $('<div class="aquiles__dots"></div>');
        $(this).append($('<div class="aquiles__slider"></div>').append(item)).addClass("aquiles__plugin").append("<span class='aquiles__prev'></span><span class='aquiles__next'></span>").append(dots);
        var slider = $(this).find(".aquiles__slider");
        for(var i=0; i<item.length; i++){
            dots.append('<div class="aquiles__dot"></div>');
        }
        var y=-1;
        var x = -100;
        var dot = $(this).find(".aquiles__dot");
        var int;
        function timer(){
            int = setInterval(function(){
            next()
            },settings.interval);
        };
        function next(){
            if(settings.autoPlay){
                clearInterval(int);
                timer()
            }
            if(y==item.length-1){
                y=-1;
                x=-100;
            }
            y++;
            x+=100;
            slider.css("transform", "translate("+-x+"%)");
            dot.css("background", "white");
            $(dot[y]).css("background", "lightseagreen");
        };
        function prev(){
            if(settings.autoPlay){
                clearInterval(int);
                timer()
            }
            if(y==0){
                y=item.length
                x=(item.length) * 100;
            }
            y--
            x+=-100
            slider.css("transform", "translate("+-x+"%)");
            dot.css("background", "white")
            $(dot[y]).css("background", "lightseagreen")
        };
        $(this).find(".aquiles__dot").click(function(e){
            if(settings.autoPlay){
                clearInterval(int);
                timer()
            }
           
            y = $(this).index()-1
            x = y*100
            next()
            
        });
        next();
        $(this).find(".aquiles__next").click(next);
        $(this).find(".aquiles__prev").click(prev);
    }
})