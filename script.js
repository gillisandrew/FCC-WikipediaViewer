function toggleSearch(state) {
    switch(state) {
        case '#search':
            $('.wrapper').html($('.search-menu'));
            break;
        default:
            $('.wrapper').html($('.initial-menu'));
            break;
    }
}

$(document).ready(function() {
    toggleSearch(window.location.hash);
});