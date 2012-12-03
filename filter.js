$(document).ready(function() {
    // always show these elements in filter results
    function nonUCG(){
        $('#site-content .content-box.poll').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box.question').fadeIn('slow').removeClass('hidden');
        $('#site-content .content-box .qblog').parent().fadeIn('slow').removeClass('hidden');
    };
    // reset the category names to there original state
    function resetFilterHeadings(){
            var categoryOne = $('.level-2').eq(0).attr('class').split(' ')[1];
            $('.level-2.fitness > a').text(categoryOne);
            var categoryTwo = $('.level-2').eq(1).attr('class').split(' ')[1];
            $('.level-2.nutrition > a').text(categoryTwo);
            var categoryThree = $('.level-2').eq(2).attr('class').split(' ')[1];
            $('.level-2.lifestyle > a').text(categoryThree);
            var categoryFour = $('.level-2').eq(3).attr('class').split(' ')[1];
            $('.level-2.club > a').text(categoryFour);
    };
    // filter member like me
    $('.similar').click(function(){
        $('.level-3.close').animate({opacity: 1}, 500);
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
        // add results to flyout menu
        var fitnessName = $(this).siblings('.caret').find('ul .level-2 ul li').find('.' + fitnessoption).eq(0).text();
        $('.level-2.fitness > a').text(fitnessName);
        var nutritionName = $(this).siblings('.caret').find('ul .level-2 ul li').find('.' + nutritionoption).eq(0).text();
        $('.level-2.nutrition > a').text(nutritionName);
        var lifestyleName = $(this).siblings('.caret').find('ul .level-2 ul li').find('.' + lifestyleoption).eq(0).text();
        $('.level-2.lifestyle > a').text(lifestyleName);

         nonUCG();       
        // re-run masonry
        $('#site-content').masonry();
    });
    // filter randomly
    $('.random').click(function(){
        $('.aux.close').animate({opacity: 1}, 500);
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
                
        // change filter category headings to reflect the name selected
        var filterCategoryName = $(this).siblings('.caret').find('ul .level-2 ul li').find('.' + filterVal).eq(0).text();
        $(this).html('<span> | </span><a href="#">' + filterCategoryName + '</a>');
        
        nonUCG();
        // re-run masonry
        $('#site-content').masonry();
    });
    // reset the random filter
    $('.aux.close').click(function(){
        $(this).animate({opacity: 0}, 500);
        // reset name back to random
        $('.aux.random > a').text('SURPRISE ME');
        // show all boxes
        $(this).closest('#site-content-wrapper').find('#site-content .content-box.hidden').each(function(){
            $(this).removeClass('hidden').fadeIn('slow')
        });
        $('#site-content').masonry();
    }); 
    
    // filter categories
    $('.level-3 a').click(function(){
        $(this).css('outline','none');
        resetFilterHeadings();
        $('.caret .close').animate({opacity: 1}, 500);
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
        // change filter category headings to reflect the name selected 
        var filterName = $(this).text();
        $(this).closest('ul').parent('.level-2').find('a').eq(0).text(filterName);
        
        nonUCG();
        // re-run masonry
        $('#site-content').masonry();
    });
    // change filter category headings to reflect the name selected
    $('.level-4 a').click(function(){
        var filterName = $(this).text();
        $(this).closest('nav').find('.club a').eq(0).text(filterName);
    });
    // controlling the close box
    $('.close > a').click(function(){
        $('.level-3.close').animate({opacity: 0}, 500);
            resetFilterHeadings();
    });
});