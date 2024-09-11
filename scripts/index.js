document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btn-group button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var targetId = button.getAttribute("data-target");
            if (targetId) { // Ensure targetId is not null
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var resumeButton = document.getElementById("resumeButton");
    if (resumeButton) {
        resumeButton.addEventListener("click", function () {
            window.location.href = "../cv/index.html"; // Redirect to another HTML file
        });
    }
});
