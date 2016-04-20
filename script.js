function toggleSearch() {
    switch(window.location.hash) {
        case '#search':
            $('.wrapper').html($('.search-menu').clone());
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
});
function search(input) {
    
}