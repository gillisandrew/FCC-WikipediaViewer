function toggleSearch() {
    switch(window.location.hash) {
        case '#search':
            $('.wrapper').html($('.search-menu').clone(true));
            break;
        default:
            $('.wrapper').html($('.initial-menu').clone());
            break;
    }
}
$(document).ready(function() {
    toggleSearch();
    $(window).on('hashchange', function() {
        toggleSearch();
    });
    $('.search-submit').click(function() {
        getInput();
    });
    $(document).keypress(function(e) {
        if(e.which == 13) {
            getInput();
        }
    });
});

function getInput() {
    var input = $('.search-field').val();
    search(input)
}

function displayResults(results) {
    $('.wrapper .search-results').html('');
    for(var i=0; i < results.length; i++) {
        var item = $('.templates .result-item').clone();
        item.find('.item-title').html(results[i].title).attr('href', 'https://en.wikipedia.org/wiki/' + results[i].title);
        item.find('.item-snippet').html(results[i].snippet + '...');
        item.appendTo('.wrapper .search-results');
    }
}


function search(cleanInput) {
    var remote = 'https://en.wikipedia.org/w/api.php/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=' + cleanInput + '&callback=?';
    $.ajax({
        url: remote,
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'FCC-WikipediaViewer/1.0 (gillis.andrew@gmail.com)' },
        success: function(data) {
            console.log(data);
            displayResults(data.query.search)
        },
        error: function(err) {
            console.error(err);
        }
    });
}