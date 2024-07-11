$(document).ready(function () {
    $(".dropdown").click(function () {
        $(this).next(".dropdown-menu").slideToggle("fast");
        // $(this).addClass("active");
        $(this).parent("li").siblings("li").children(".dropdown-menu").slideUp("fast");
        // $(this).parent("li").siblings("li").children(".dropdown").removeClass("active")
    })
    $(".form-control").click(function () {
        $(this).addClass("outline");
    })
    $("#menubar").click(function () {
        $("body").toggleClass("close");
        $("#jend").toggleClass("justify-end");
    })
})
