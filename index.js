var imageArray;
var interval = 4500;
var random_display=0;
var imageNum=0;
var totalImages;
$(window).scroll(function(e){ 
  $el = $('.fixedElement'); 
  if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){ 
    $('.fixedElement').css({'position': 'fixed', 'top': '0px'}); 
  } 
});

$(window).resize(function() {
$('#rightcol').width($(window).width()-$('#leftcol').width()-20);
$('#tabs-2').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#tabs-3').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#tabs-4').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#tabs-5').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#contenttabs').css('font-size', $(window).width()*.01);
});

$(document).ready(function() {
$('#tabs-2').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#tabs-3').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#tabs-4').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#tabs-5').height(($(window).height()-$('footer').height()-$('#fixedElement').height())*.5);
$('#contenttabs').css('font-size', $(window).width()*.01);
$('#rightcol').width($(window).width()-$('#leftcol').width()-20);

    imageArray=[];
    imageArray[imageNum++]=new imageItem("img/" + "house" + "1.jpg");
    imageArray[imageNum++]=new imageItem("img/" + "house" + "2.jpg");
    imageArray[imageNum++]=new imageItem("img/" + "house" + "3.jpg");
    imageArray[imageNum++]=new imageItem("img/" + "house" + "4.jpg");
    imageArray[imageNum++]=new imageItem("img/" + "house" + "5.jpg");
    totalImages = imageArray.length;
})

function imageItem(image_location) {
    this.image_item=new Image();
    this.image_item.src=image_location;
}

function getImageItemLocation(imageObj) {
    return imageObj.image_item.src;
}
function randNum(x, y) {
    var range = y - x + 1;
    return Math.floor(Math.random() * range) + x;
}
function getNextImage() {
    if (random_display) {
        imageNum = randNum(0, totalImages-1);
    }
    else {
        imageNum = (imageNum+1) % totalImages;
    }
    var new_image = getImageItemLocation(imageArray[imageNum]);
    return new_image;
}

function getPrevImage() {
    imageNum = (imageNum-1) % totalImages;
    var new_image = getImageItemLocation(imageArray[imageNum]);
    return new_image;
}

function prevImage(place) {
	var new_image = getPrevImage();
	doTransition(new_image,place);
}

function switchImage(place) {
    var new_image = getNextImage();
    doTransition(new_image,place);
    var recur_call = "switchImage('"+place+"')";
    timerID = setTimeout(recur_call, interval);
}
function doTransition(new_image,place) {
    $('img[name=\"'+place+'\"]').animate({
        opacity: 0
    },250,function() {
        document[place].src = new_image;
        $('img[name=\"'+place+'\"]').animate({
            opacity: 1
        },1000);
    });
}