$(document).ready(function () {
    $('.thucdon').hover(function () {
        // Hover vào phần tử có class "nav-item active" (có thể điều chỉnh phần tử chính xác)

        $('.sub-menu').toggleClass('show');
    });
});
$(document).ready(function () {
    $('.nav-item').click(function () {
        $('.navbar-nav .nav-item').removeClass('active'); // Remove the active class from all items
        $(this).addClass('active'); // Add the active class to the clicked item
    });
});
// $(function () {
//     $('.nav-item').click(function () {
//         // alert('ok');
//         $('.nav-item .active').removeClass('active');
//         $(this).addClass('active');
//     });
// });
