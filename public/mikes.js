
$(document).ready(function() {
        // grab the initial top offset of the navigation 
        var stickyNavTop = $('#hours').offset().top;

        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
            var scrollTop = $(window).scrollTop(); // our current vertical position from the top

            // if we've scrolled more than the navigation, change its position to fixed to stick to top,
            // otherwise change it back to relative
            if (scrollTop > stickyNavTop) { 
                $('#home').show();

            } else {
                $('#home').hide();
            }
        };

        stickyNav();
        // and run it again every time you scroll
        $(window).scroll(function() {
            stickyNav();
        });
    });  


/**
show() functions reveal the specified menu options, whilst hiding everything
else 
**/
function showStarters(){
    $('#starters').show();
    $('#calzones').hide();
    $('#wraps').hide();
    $('#salads').hide();
    clicked("#startersButton");
}

function showCalzones(){
    $('#starters').hide();
    $('#calzones').show();
    $('#wraps').hide();
    $('#salads').hide();
    clicked("#calzonesButton");
}

function showWraps(){
    $('#starters').hide();
    $('#calzones').hide();
    $('#wraps').show();
    $('#salads').hide();
    clicked("#wrapsButton");
}

function showSalads(){
    $('#starters').hide();
    $('#calzones').hide();
    $('#wraps').hide();
    $('#salads').show();
    clicked("#saladsButton");
}

/*
clicked(item) takes in a jQuery value (item). item is the id of the 
button to change color. The reason we have the options list is 
to loop through every button that isn't clicked and turn them 
to the "unclicked" (white background, blue font) state. 

The clicked button is turned to the "clicked" state (blue background, 
white font).
*/
function clicked(item){
    const options = ["#startersButton","#calzonesButton","#wrapsButton","#saladsButton"];
    
    const blue = ("#004a81");
    const white = ("white");
    
    // Loop through button id options
    for (var i=0; i<options.length; i++) {
        
        /* if button option is equal to the button that is clicked,
        we change background wo blue and font to white */
        if (item.valueOf() == options[i].valueOf()) {
            $(item).css("background-color",blue);
            $(item).css("color",white);
        } else {
            $(options[i]).css("background-color",white);
            $(options[i]).css("color",blue);
        }
    }
    
}


