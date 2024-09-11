document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-group button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");

            if (targetId) { // Ensure targetId is not null
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const resumeButton = document.getElementById("resumeButton");

    if (resumeButton) {
        resumeButton.addEventListener("click", () => {
            window.location.href = "../cv/index.html"; // Redirect to another HTML file
        });
    }
});