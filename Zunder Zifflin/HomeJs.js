
$("#nextSlide").click(function () {

    var curr = $(".sActive");
    var nextImg = curr.next();
    imgWidth = $(".sliderContent").width();

    $(".sliderContent").animate({
        width: 0
    });

    if(nextImg.length != 0){

        curr.removeClass("sActive");
        nextImg.addClass("sActive");

    }else{
        
        curr.removeClass("sActive");
        $(".slideImage:first").addClass("sActive");

    }

    $(".sliderContent").animate({
        width: imgWidth
    });

});



$("#prevSlide").click(function () {

    var curr = $(".sActive");
    var prevImg = curr.prev();
    imgWidth = $(".sliderContent").width();

    $(".sliderContent").animate({
        width: 0
    });

    if(prevImg.length != 0){

        curr.removeClass("sActive");
        prevImg.addClass("sActive");

    }else{
        
        curr.removeClass("sActive");
        $(".slideImage:last").addClass("sActive");

    }

    $(".sliderContent").animate({
        width: imgWidth
    });

})

$("#nextPromosSlide").click(function () {

    var curr = $(".active");
    var nextImg = curr.next();

    $(".promosSliderContent").hide().slideDown();

    if(nextImg.length != 0){

        curr.removeClass("active");
        nextImg.addClass("active");

    }else{
        
        curr.removeClass("active");
        $(".promosImage:first").addClass("active");

    }

});

$("#prevPromosSlide").click(function () {

    var curr = $(".active");
    var prevImg = curr.prev();

    $(".promosSliderContent").slideUp();

    if(prevImg.length != 0){

        curr.removeClass("active");
        prevImg.addClass("active");

    }else{
        
        curr.removeClass("active");
        $(".promosImage:last").addClass("active");

    }

    
    $(".promosSliderContent").slideDown();
    // $(".promosSliderContent").show();
});
