document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("#right-floating-menu button");

    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            // 移除所有按钮的活动状态
            buttons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            // 将当前点击的按钮设置为活动状态
            this.classList.add("active");
        });

        // 预先设置第一个按钮为活动状态
        if (index === 0) {
            button.classList.add("active");
        }
    });
});
