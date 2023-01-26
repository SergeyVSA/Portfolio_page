window.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn_mobile_menu").addEventListener("click", function () {
        document.querySelector(".mobile-menu").classList.toggle("hidden");
    });
    document.body.addEventListener("click", function (e) {
        if (!e.target.closest(".btn_mobile_menu")) {
            document.querySelector(".mobile-menu").classList.add("hidden");
        }
    });
});
