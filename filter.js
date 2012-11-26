$(document).ready(function() {
    $('.similar').click(function(){
        arrayFilterOption = [];

        var lifestyleoption = 'filteroption_' + $('body').data('lifestyle');
        var nutritionoption = 'filteroption_' + $('body').data('nutrition');
        var fitnessoption   = 'filteroption_' + $('body').data('fitness');
        $('#site-content .content-box').each(function(){
            if(!$(this).hasClass(fitnessoption) && !$(this).hasClass(nutritionoption) && !$(this).hasClass(lifestyleoption)) { 
                $(this).addClass('hidden').fadeOut('normal');
            } else {
                $(this).removeClass('hidden').fadeIn('slow');
            }
        });
        // display nonUGC elements polls question and qblogs
        $('#site-content .content-box.poll').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box.question').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box .qblog').parent().fadeIn('slow').removeClass('hidden');
        
        // re-run masonry
        $('#site-content').masonry();
        //return false;
    });
    
    $('.random').click(function(){
        arrayFilterOption = [];
        $('.caret .level-3 > a').each(function(){
            arrayFilterOption.push($(this).attr('class'));
        });
        var m = arrayFilterOption.length -1;
        var n = 0;
        var foption = Math.floor( Math.random() * (n - m + 1) ) + m;
        var filterVal = arrayFilterOption[foption];
        $('#site-content .content-box').each(function(){
            if(!$(this).hasClass(filterVal)) { 
                $(this).addClass('hidden').fadeOut('normal');
            } else {
                $(this).removeClass('hidden').fadeIn('slow');
            }
        });
        
        // display nonUGC elements polls question and qblogs
        $('#site-content .content-box.poll').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box.question').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box .qblog').parent().fadeIn('slow').removeClass('hidden');
        
        // re-run masonry
        $('#site-content').masonry();
        //return false;
    });
    
    // Flyout menu filter
    $('.level-3 a').click(function(){
        $(this).css('outline','none');
        $('.close').animate({opacity: 1}, 500);
        $('.level-3.current').removeClass('current');
        $(this).parent().addClass('current');
        
        //and filter ... now
        var filterVal = $(this).attr('class');
        if(filterVal == 'all') { 
            $('#site-content .content-box.hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $('#site-content .content-box').each(function(){
                if(!$(this).hasClass(filterVal)) { 
                    $(this).addClass('hidden').fadeOut('normal');
                } else {
                    $(this).removeClass('hidden').fadeIn('slow');
                }
            });
        }
        // display nonUGC elements polls question and qblogs
        $('#site-content .content-box.poll').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box.question').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box .qblog').parent().fadeIn('slow').removeClass('hidden');
        // change filter category headings to reflect the name selected 
        var filterName = $(this).text();
        $(this).closest('ul').parent('.level-2').find('a').eq(0).text(filterName);
        
        // re-run masonry
        $('#site-content').masonry();
        //return false;
    });
    // change filter category headings to reflect the name selected
    $('.level-4 a').click(function(){
        var filterName = $(this).text();
        $(this).closest('nav').find('.club a').eq(0).text(filterName);
    });
    // controlling the close box
    $('.close a').click(function(){
        $('.level-3.close').animate({opacity: 0}, 500);
            // reset the category names to there original state
            var categoryOne = $('.level-2').eq(0).attr('class').split(' ')[1];
            $('.level-2.fitness > a').text(categoryOne);
            var categoryTwo = $('.level-2').eq(1).attr('class').split(' ')[1];
            $('.level-2.nutrition > a').text(categoryTwo);
            var categoryThree = $('.level-2').eq(2).attr('class').split(' ')[1];
            $('.level-2.lifestyle > a').text(categoryThree);
            var categoryFour = $('.level-2').eq(3).attr('class').split(' ')[1];
            $('.level-2.club > a').text(categoryFour);
    }); 
});
