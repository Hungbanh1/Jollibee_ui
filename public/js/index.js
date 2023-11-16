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

// $(document).ready(function () {
//     $('.select_product').click(function () {
//         $('.list_chick').toggleClass('show');
//     });
// });
$(document).ready(function () {
    $('.select_product').click(function () {
        // event.stopPropagation();
        // Lấy lớp của phần tử được click
        var clickedElement = $(this);
        var listElement = clickedElement.find('.list_nood, .list_chick,.list_water,.list_add');
        var clickedClass = listElement.attr('class');

        // In lớp ra console để kiểm tra
        console.log(clickedClass);

        // Tiếp tục với việc xử lý lớp nhận được
        // ...

        // Kiểm tra xem lớp "d-none" có tồn tại hay không
        if (listElement.hasClass('d-none')) {
            // Xử lý khi lớp "d-none" tồn tại
            listElement.toggleClass('show');
            console.log('Đã thêm hoặc loại bỏ lớp "show"');
        }
        $('.select_product input').click(function (event) {
            event.stopPropagation();
        });
    });
});
$(document).ready(function () {
    // Nút "Plus"
    $('.plus').click(function () {
        var currentVal = parseInt($('.qty').val());
        $('.qty').val(currentVal + 1);
    });

    // Nút "Minus"
    $('.minus').click(function () {
        var currentVal = parseInt($('.qty').val());
        if (currentVal > 1) {
            $('.qty').val(currentVal - 1);
        }
    });
});
//calendar
document.addEventListener('DOMContentLoaded', function () {
    const datePicker = document.getElementById('datePicker');
    let defaultDateValue; // Biến để lưu giá trị mặc định

    // Lấy ngày tháng hiện tại
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Tháng trong JavaScript tính từ 0
    const currentYear = currentDate.getFullYear();

    // Định dạng ngày tháng hiện tại thành dạng 'dd-mm-yyyy'
    const currentDateString = `${currentDay}-${currentMonth}-${currentYear}`;

    flatpickr(datePicker, {
        enableTime: false,
        dateFormat: 'd-m-Y', // Định dạng ngày tháng
        defaultDate: currentDateString, // Đặt giá trị mặc định là ngày tháng hiện tại
        onMonthChange: function (selectedDates, dateStr, instance) {
            // Sự kiện xảy ra khi tháng thay đổi
            const selectedMonth = instance.currentMonth; // Lấy tháng hiện tại
            const selectedYear = instance.currentYear; // Lấy năm hiện tại
            const selectedValue = `${selectedMonth}-${selectedYear}`;
        },
    });
});
