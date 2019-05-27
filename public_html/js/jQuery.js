/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $(".logoMenu").click(function(){
        var sideMenu = $(".sideMenu").attr('class');
        if(sideMenu === "sideMenu dispNone"){
            $(".sideMenu").removeClass("dispNone");
        }else{
            $(".sideMenu").addClass("dispNone");
        }
    });
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 400) {
            $('.logoFade').fadeIn();
        } else {
            $('.logoFade').fadeOut();
        }
    });
});