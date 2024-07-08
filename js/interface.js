document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("#right-floating-menu button");

    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {

            buttons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");
        });

        if (index === 0) {
            button.classList.add("active");
        }
    });
});
