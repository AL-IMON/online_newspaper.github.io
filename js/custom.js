/*--------------------------------------------------------------
#                               tabvar
--------------------------------------------------------------*/
// jQuery(document).ready(function($){

//     $('.tab_bar_block_new li').on('click',function(){

//         if(!$(this).hasClass('active')){
    
//             var tabIndex = $(this).attr('tabIndex');
    
//             $('.tab_bar_block_new li').removeClass('active');
    
//             $(this).addClass('active');
    
//             $('.list_display_block1').hide();
    
//             $('#' + tabIndex).show();
    
//         }
    
//     });
    
// });




jQuery('#test1').mCustomScrollbar({

    height: 270,
    autoHideScrollbar:true

});

jQuery('#mostview1').mCustomScrollbar({

    height: 270,
    autoHideScrollbar:true

});



$(".editor_picks_list").hover(function(){

    $(this).find('.displayTime').show();

},function(){

    $(this).find('.displayTime').hide();

});



  