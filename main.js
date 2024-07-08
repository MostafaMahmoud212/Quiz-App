console.log("Hello from Main.js");

import {  hello, fetching, age, salary } from './Home.js';
import { AutoImport, Hello2, userName as username1 } from './Auth.js'; // user Name موجود عندي هنا فهديله اسم بديل 
import * as  Home from './Home.js';  // كده انا عملت import لكل حاجة في Home ويعتبر حطيتها في object اسمه Home

hello("Mostafa")
fetching()

Hello2("WIDRGS")

let userName = " Mostafa Mahmoud #2";

// console.log(userName);  //  Mostafa Mahmoud #2 
// console.log(username1); //  Mostafa Mahmoud

Home.fetching(); // fetching
Home.age; // 22 

// console.log(age); // 22
// console.log(salary); // 2000


// الترتيب هنا مهم لازم تكتب export default , export العاديه
import mainFunction, { Tmam } from "./Auth.js"; //  #2 export default 

// معمولها export default فتقدر تعملها import من غير { } وباسمها او باسم تاني عادي 

// console.log(mainFunction()); // User is not Authenticated
// console.log(Tmam); // Tmam

// console.log(AutoImport); // بيعمله import by default



                // // //      JQuery

$(".test");  //  ==  querySelectorAll  بتعمل select لاي class test
jQuery(".test");  //  زي اللى فوق بس مش مستخدمة
const x = $(".test");
// console.log(x);

/*

    Effects => Animations => JQuery Methods => Functions => any element selected by JQuery

   #1 hide, show, toggle
    hide => بيخفي العنصر في الوقت اللى انت محدده  m  لو بيخفي الحاجة بيعتمد على display none
    show => بيظهر العنصر في الوقت اللى انت محدده 
    toggle => لو ظاهر يخفيه لو مختفي يظهره  

   #2 slideUp, slideDown, slideToggle  => زي الستارة 

   #3 fadeOut, fadeIn, fadeToggle, fadeTo
    fadeTo => fadeTo( time, time اللى هيقف عده هذا الوميض )

   #4 animate  => JQuery Method 
    بتاخد  2 paramaters => properties => Change ,  Time 
    بتاخد  Object is"t a Css Code  =>  numeric values 
*/

// $('.test').hide( 1000 )
// $('.test').show( 1000 );
// $('.test').toggle(5000);

// $('.test').slideUp( 5000)
// $('.test').slideDown( 5000)

// $('.test').fadeOut( 1000 );
// $('.test').fadeIn( 1000 );
// $('.test').fadeToggle( 1000 );
// $('.test').fadeTo( 1000, 0.5 );

// $('.test').animate( {width: "100%", height: "2vh", backgroundColor: "rgb(200, 30, 100)"}, 5000 );


/*

    Jquery Methods for events  => 

    click
    $(document).ready           ==            $().load مش موجود in JQuery
        بيستنا لما Document بستنا يحمل   VS   بيستنا لما document & img تحمل
        احسن في performanse
*/

// $('.test').mouseenter( function() {
//   $('.test').animate( {width: "90%", height: "20vh"}, 100 );
// })

// $("button").click( function() {
//   $(".test").toggle(1000)
// })

// $('button').on('click', function() {})

// $('button').click( function(e) {
//   // e.target
//   $(this).toggle(1000, function() { // استخدمت callback function عشان الاثنين يشتغلو بعد بعض
//     $(".test").toggle(1000)
//   })
// })

                // exersize   حلو 

// $('section').animate( {width: "100%"}, 1000).animate( {height: "100vh"}, 1000, function () {
//   $(".container > h3").fadeIn(1000, function () {
//     $("p").fadeIn(1000, function () {
//       $(".col-md-4").slideDown(1000, function() {
//         $('h3').fadeIn(1000) 
//       })
//     })
//   });
// });


/*

    JQuery Methods  
     1-  Setters          &                 GEtters  
          html(value)                       html()   // هيشتغل inerHtml
          text(val)                         text()  // هيشتغل   inerText
          val(val)                          val()
          css(prop, value)     css(attributeName)
          attr(attributeName, attValue)     attr(attributeName)

     2-  DOM Methods 
          addClass  removeClass  toggleClass
          empty() =>  بيفضي contant For element
          remove() => بيمسح element from HTMl
          append() =>  اضافة عنصر جديد في Div
          after(), before() =>  اضافة عنصر جديد قبل وبعد Div

     3-  Dimension =>   ( width  &&  height ) نفس الكلام على الاثنين 
          widht => actual width of your selected element  => Width الفعلي الفعلي بدون اي اضافات
          innerWidth  =>  Width + Padding
          outerWidth() => Width + Padding + border
          outerWidth(false) => Width + Padding + border
          outerWidth(true) => Width + Padding + border + margin
*/

          // #1  JQuery Methods

// $('.test2').html('<h2>Hello form jQuery</h2>'); // as a Setter
// console.log($('.test2').html()); // as a Getter

// $('.test2').text('<h2>Hello form jQuery</h2>'); 
// console.log($('.test2').text()); 

// console.log($('input').val());
// $('input').val("Hamada updated2");

// console.log(document.querySelector('img').getAttribute('src')); //  in JQuery  ==  attr()

// console.log($('img').attr('src')); // as a Getter //  ./image/FB_IMG_1666120839012.jpg 
// $('img').attr('src', './image/9029c67565e3b1b62ba3c44b7b1c1e89.jpg') // as a Setter


// console.log($(".test3").css("backgroundColor")); // rgb(0, 255, 255)
// $(".test3").css("backgroundColor", "red"); //  هيغيره للون الاحمر


          // #2 DOM Methods

// $('.test3').addClass("bg-danger");
// $('.test3').removeClass("bg-info");
// $('.test3').toggleClass("bg-success");

// $('.test3').empty();

// $('.test3').remove();

// $('.test3').append(`<h2>HELlo Form Jquery</h2>`);

// $('.test3').after(`<h2>HELlo Form Jquery after</h2>`);
// $('.test3').before(`<h2>HELlo Form Jquery before</h2>`);

// console.log( $( ".test3" ).width() ); // Width الفعلي الفعلي بدون اي اضافات V // 200
// console.log( $( ".test3" ).innerWidth() ); // Width + Padding //  240
// console.log( $( ".test3" ).outerWidth() ); // Width + Padding + border //  260
// console.log( $( ".test3" ).outerWidth(true) ); // Width + Padding + border+ margin //  280


                //  Traversing  => التنقل

/*

    next,  nextAll  => اللى قبله
    prev, prevAll   => اللى بعده
    siblings  =>  كل اخواته اللى قبله واللى بعده 
    parent  =>  الاب المباشر له 
    parents  =>  كل ابائه
    parentsUntil( 'c1' )  =>  الى الاب كذا
    children  => direct children only
    find()  =>  بيدور على  العنصر اللى بتدهوله
    eq(0)  =>  بتحدد رقم عنصر في هذه المجموعة
    not('mos')  =>  كله ما عدى رقم واحد
*/

// $( "#main" ).next().css('borderColor', 'yellow');
// $( "#main" ).nextAll().css('borderColor', 'yellow');

// $( "#main" ).prev().css('borderColor', 'yellow');
// $( "#main" ).prevAll().css('borderColor', 'yellow');

// $( "#main" ).siblings().css('borderColor', 'yellow');

// $( "#main" ).parent().css('borderColor', 'yellow');

// $( "#main" ).parents().css('borderColor', 'yellow');

// $( "#main" ).parentsUntil('.c1').css('borderColor', 'yellow');

// $( ".c3" ).children().css('borderColor', 'yellow');

// $( ".c1" ).find('.c3').css('borderColor', 'yellow');

// $( "#main" ).siblings().eq(0).css('borderColor', 'yellow');

// $( "#main" ).siblings().not('.mos').css('borderColor', 'yellow');



                            //   تطبيق JQurey على exam bootsrab

/*
 
    JQuery Method  For Window
        scrollTop => works as a setter and getter

    JQuery Method  For Html 
        offset => فراغ
        بيرجع object  { left:  , top: }

*/



                        //  JQuery Plugin

// is A  JS File => library => Call my Firing Function 

//  1- Animation  - 2- Customization
//  call my function => Parameters
// velocity =>  السرعة 

    //  مواقع jQuery Plugin المشهورة

// 1- skitter slider


$(document).ready(function() {
    $(".skitter-large").skitter({  //  configration 
        //  التعديلات دي موجودة بالتفصيل في الموقع في  Options
        velocity: .5,   // السرعة 
        interval: 500, // كل نص ثانية الصورة هتتغير
        dots: true,
        with_animations: ["cube", "cubeRandom", "block", "cubeStop", "cubeStopRandom"]
    })
});



//  2-  particles.JS

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './JS/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


// 3-  https://owlcarousel2.github.io/OwlCarousel2
// 4-  https://kenwheeler.github.io/slick/
// 5-  https://mattboldt.com/demos/typed-js/
// 6-  https://getwaves.io/
// 7-  https://www.blobmaker.app/
// 8-  https://wowjs.uk/docs.html
// 9-  https://matthew.wagerfield.com/parallax/
// 10- https://www.chartjs.org/