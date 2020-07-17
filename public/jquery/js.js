// $(document).ready(function(){
//     var carousel = $('.js-carousel');
//     var carouselCtx = $('.js-carouselCtx');
//     var itemLength = $('.js-carouselList .Carousel-content-item').length;
//     var isScrolling = false;

//     carouselInit();

//     $(window).on('resize',function(){
//       carouselInit();
//     });

//     function carouselInit() {
//       var mWidth = carousel.width();
//       var mHeight = mWidth/2.665;
//       carouselCtx.height(mHeight);
//     }

//     var currentItem = 1;
//     var autoLoadslide= setInterval(function(){
//         $('.js-carouselBtn.Carousel-content__btn--right').trigger('click');
//      },3000);
//     $('.js-carouselNavItem').click(function(){
//       clearInterval(autoLoadslide);
//       if ($(this).hasClass('Carousel-nav-item--active')) {
//         return;
//       }
//       var index = $(this).attr('data-index');
//       currentItem = index;
//       scrollCarousel(currentItem);
      
//     });
//     $('.js-carouselBtn').click(function(){
//     //    clearInterval(autoLoadslide);
//       if (isScrolling) {
//             return;
//       }
//       if ($(this).hasClass('Carousel-content__btn--right')) {
//         currentItem++;
//       } else {
//         currentItem--;
//         clearInterval(autoLoadslide);
//       }
//       if (currentItem > itemLength) {
//         currentItem = 1;
//       } else if (currentItem < 1) {
//         currentItem = itemLength;
//       }
//       scrollCarousel(currentItem);
//     });

//     function scrollCarousel(index) {
      
//       isScrolling = true;
//       var carouselItem = $('#carousel'+index);
//       $('.Carousel-nav-item--active').removeClass('Carousel-nav-item--active');
//       $('.js-carouselNavItem[data-index='+index+']').addClass('Carousel-nav-item--active');
//       $('.js-carouselList').animate({
//         'left' : 0-carouselItem.position().left
//       }, 380, function(){
//         isScrolling = false;
//       });
//     }
//     $('.js-navHamburger').click(function(){
//         $('.js-nav').toggleClass('Nav--active');
//         $('.content').toggleClass('nocontent');
//         if ($('.js-nav').hasClass('Nav--active')) {
//           $('body').addClass('Noscroll');
//         } else {
//           $('body').removeClass('Noscroll');
//         }
//       });
   
//     var autoLoad= setInterval(function(){
//         $('#btn-next').trigger('click');
//      },3000);
    
//     $('#btn-next').click(function(){
//         console.log($('.active').length)
//         if($('.active').length===0)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }
//         if($('.active').length===3)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }
//         if($('.active').length===2)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }
//         if($('.active').length===4)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }

//         var slide_sau = $('.active').next();
//         var index = $('.active1').index()+1;
//         if(slide_sau.length!=0)
//         {
            
//             $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(event){
//                 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active')
//             });
            
//             slide_sau.addClass('di-vao-ben-phai').addClass('active').one('webkitAnimationEnd',function(event){
//                 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//             });
//             //ul li
//             $('.active1').removeClass('active1')
//             $('ul li:nth-child('+(index+1)+')').addClass('active1');
//         }
//         else{
//             $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(event){
//                 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active')
//             });
//             $('.slide:first-child').addClass('di-vao-ben-phai').addClass('active').one('webkitAnimationEnd',function(event){
//                 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//             });
//              //ul li
//             $('.active1').removeClass('active1')
//             $('ul li:first-child').addClass('active1');
//         }

//     })
//     //prev
//     $('#btn-prev').click(function(){
//         if($('.active').length===0)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }
//         if($('.active').length===3)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }
//         if($('.active').length===2)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }
//         if($('.active').length===4)
//         {
//             $('.slide:first-child').addClass('active');
    
//         }
//        clearInterval(autoLoad);
//         var slide_sau = $('.active').prev();
//         var index = $('.active1').index()+1;
//         if(slide_sau.length!=0)
//         {
            
//             $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd',function(){
//                 $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active')
//             });
            
//             slide_sau.addClass('di-vao-ben-trai').addClass('active').one('webkitAnimationEnd',function(){
//                 $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
//             });
//             //ul li
//             $('.active1').removeClass('active1')
//             $('ul li:nth-child('+(index-1)+')').addClass('active1');
//         }
//         else{
//             $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd',function(){
//                 $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active')
//             });
//             $('.slide:last-child').addClass('di-vao-ben-trai').addClass('active').one('webkitAnimationEnd',function(){
//                 $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
//             });
//              //ul li
//             $('.active1').removeClass('active1')
//             $('ul li:last-child').addClass('active1');
//         }
//     })

//     $('ul li').click(function(){
//        clearInterval(autoLoad);
//         var vitri_hientai = $('.active1').index();
//         var select_click = $(this).index();
//         //xu ly nut
//         $('.active1').removeClass('active1');
//         $('ul li:nth-child('+(select_click+1)+')').addClass('active1');
//         //xu ly slide
//         if(select_click>vitri_hientai)
//         {
//             $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(){
//                 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active')
//             });
//             $('.slide:nth-child('+(select_click+1)+')').addClass('di-vao-ben-phai').addClass('active').one('webkitAnimationEnd',function(){
//                 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//             });
//         }
//         else{
//             $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd',function(){
//                 $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active')
//             });
//             $('.slide:nth-child('+(select_click+1)+')').addClass('di-vao-ben-trai').addClass('active').one('webkitAnimationEnd',function(){
//                 $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
//             });
//         }
//     })
//     $('#btn-next-productnew').on('click',function(event){
//         if($('.active_product').length==2)
//         {
//             $('.productnew:first-child').removeClass('active_product');
//         }
//         if($('.active_product').length==0)
//         {
//             $('.productnew:first-child').addClass('active_product');
//         }
//         var slide_sau = $('.active_product').next();    
//         if(slide_sau.length!=0)
//         {
            
//             $('.active_product').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(event){
//                 $('.bien-mat-ben-trai').removeClass('active_product').removeClass('bien-mat-ben-trai');
//             });
            
//             slide_sau.addClass('di-vao-ben-phai').addClass('active_product').one('webkitAnimationEnd',function(){
//                 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//             });
           
//         }
//         else{
//             $('.active_product').addClass('bien-mat-ben-trai').one('webkitAnimationEnd',function(event){
//                 $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active_product')
//             });
//             $('.productnew:first-child').addClass('di-vao-ben-phai').addClass('active_product').one('webkitAnimationEnd',function(event){
//                 $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
//             });
//         }
//     })
//     $('#btn-prev-productnew').on('click',function(event){
//         if($('.active_product').length==2)
//         {
//             $('.productnew:first-child').removeClass('active_product');
//             console.log('aa');
    
//         }
//         if($('.active_product').length==0)
//         {
//             $('.productnew:first-child').addClass('active_product');
//             console.log('aa');
    
//         }
//         var slide_sau = $('.active_product').prev();
//         // console.log($('.active_product').length)
        
//         if(slide_sau.length!=0)
//         {
            
//             $('.active_product').addClass('bien-mat-ben-phai').one('webkitAnimationEnd',function(event){
//                 $('.bien-mat-ben-phai').removeClass('active_product').removeClass('bien-mat-ben-phai');
//             });
            
//             slide_sau.addClass('di-vao-ben-trai').addClass('active_product').one('webkitAnimationEnd',function(){
//                 $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
//             });
           
//         }
//         else{
//             $('.active_product').addClass('bien-mat-ben-phai').one('webkitAnimationEnd',function(event){
//                 $('.bien-mat-ben-phai').removeClass('active_product').removeClass('bien-mat-ben-phai');
//             });
            
//             $('.productnew:last-child').addClass('di-vao-ben-trai').addClass('active_product').one('webkitAnimationEnd',function(){
//                 $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
//             });
//         }
//     })
// })