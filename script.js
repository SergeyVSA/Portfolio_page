
    window.addEventListener("DOMContentLoaded", function () {
        document.querySelector("#open-menu-btn").addEventListener("click", function () {
            document.querySelector(".mobile-menu").classList.add("visible");
        });
        document.body.addEventListener("click", function (e) {
            if (!e.target.closest("#open-menu-btn")) {
                document.querySelector(".mobile-menu").classList.remove("visible");
            }
        });
    });

