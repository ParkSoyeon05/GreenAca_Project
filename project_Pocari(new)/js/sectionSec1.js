$(document).ready(function () {
    var galleryUl = $('.gallery>ul');
    var galleryUlLi = $('.gallery>ul>li');
    var galleryUlLiLength = $('.gallery>ul>li').length;
    
    //이미지 삽입
    for(var i=0; i<galleryUlLiLength; i++){
        galleryUlLi.eq(i).css({'background':'url(img/main'+i+'.jpg) no-repeat 50%'}).css({'backgroundSize':'cover'});
    }
    
     //슬라이드
    var galleryUlLiLeft = galleryUlLi.eq(1).offset().left - galleryUlLi.eq(0).offset().left;
    
    var key=1;
    function autoGallery(e) {
        galleryUl.animate({left:-galleryUlLiLeft*key});
        if(key>galleryUlLiLength-2){
            key=0;
            galleryUl.delay(3000).animate({left:-galleryUlLiLeft*key},0);
        }
        galleryUl.eq(0).delay(2000); 
        key++;
        console.log(galleryUl.css('left'));
//        console.log(galleryUlLiLength);
        console.log(key);
    }
    setInterval(autoGallery, 3000);
    
});