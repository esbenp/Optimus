$(document).ready(function(){
    var filters = $('.packages-filters');
    var packages = $('.packages');

    filters.find('.filter').on('click', function(){
        var clicked = $(this);
        var filterBy = clicked.attr('data-filter');

        var attributeSelector = filterBy === '*' ? '' : '[data-filter="' + filterBy + '"]';

        packages.find('li').fadeOut(400);
        packages.find('li' + attributeSelector).stop().fadeIn(400);

        filters.find('.active').removeClass('active');
        clicked.addClass('active');
    });
});
