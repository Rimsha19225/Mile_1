(function () {
    var form = document.getElementById("resumeForm");
    var output = document.getElementById("resumeOutput");
    form.addEventListener("submit", function (e) {
        var _a;
        e.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var about = document.getElementById("about").value;
        var educationGroups = document.querySelectorAll(".education-group");
        var educationHTML = Array.from(educationGroups).map(function (group) {
            var level = group.querySelector('[name="level"]').value;
            var degree = group.querySelector('[name="degree"]').value;
            var institution = group.querySelector('[name="institution"]').value;
            var year = group.querySelector('[name="year"]').value;
            return "\n            <div style=\"margin-bottom: 15px;\">\n                <strong>".concat(level, "</strong><br/>\n                <span>").concat(degree, " - ").concat(institution, " (").concat(year, ")</span>\n            </div>");
        }).join("");
        var experienceGroups = document.querySelectorAll(".experience-group");
        var experienceHTML = Array.from(experienceGroups).map(function (group) {
            var company = group.querySelector('[name="company"]').value;
            var experienceYears = group.querySelector('[name="experienceYears"]').value;
            var para = group.querySelector('[name="eperience"]').value;
            return "<p><strong>".concat(company, " - ").concat(experienceYears, " year(s)</strong></p><p>").concat(para, "</p>");
        }).join("");
        var skills = document.getElementById("skills").value.split(",");
        var hobbies = document.getElementById("hobbies").value.split(",");
        var fileInput = document.getElementById("file");
        var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var reader = new FileReader();
        reader.onload = function () {
            var imgSrc = reader.result;
            output.innerHTML = "\n        <div class=\"resume\">\n          <div class=\"left\">\n            <img src=\"".concat(imgSrc, "\" alt=\"Profile\" class=\"profile-pic\" />\n            <div class=\"section-title\">Contact</div>\n            <p><span class=\"icon-circle\"><i class=\"fas fa-envelope\"></i></span> ").concat(email, "</p>\n            <p><span class=\"icon-circle\"><i class=\"fas fa-phone\"></i></span> ").concat(phone, "</p>\n            <p><span class=\"icon-circle\"><i class=\"fas fa-map-marker-alt\"></i></span> ").concat(address, "</p>\n            <div class=\"section-title\">Skills</div>\n            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "</ul>\n            <div class=\"section-title\">Hobbies</div>\n            <ul>").concat(hobbies.map(function (hobby) { return "<li>".concat(hobby.trim(), "</li>"); }).join(""), "</ul>\n          </div>\n          <div class=\"right\">\n            <div class=\"my-scriptina-text\">\n                <h2 class=\"name-head\">").concat(name, "</h2>\n            </div>\n            <div class=\"sub-right\">\n                <h2 class=\"about\">About Me</h2>\n                <p class=\"about-para\">").concat(about, "</p>\n                <h2 class=\"education\">Education</h2>\n                <p class=\"edu-area\">").concat(educationHTML, "</p>\n                <h2 class=\"experience\">Experience</h2>\n                <p class=\"exp-area\">").concat(experienceHTML, "</p>\n            </div>\n          </div>\n        </div>\n      ");
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    });
})();
function addEducation() {
    var container = document.getElementById('educationContainer');
    var group = document.createElement('div');
    group.className = 'education-group';
    group.style.padding = '15px';
    group.style.borderBottom = '1px solid #ccc';
    group.style.marginBottom = '10px';
    group.innerHTML = "\n    <input type=\"text\" name=\"level\" placeholder=\"Education Level (e.g., Graduation, College, School)\" required />\n    <input type=\"text\" name=\"degree\" placeholder=\"Degree (e.g. Program)\" required />\n    <input type=\"text\" name=\"institution\" placeholder=\"Institution\" required />\n    <input type=\"number\" name=\"year\" placeholder=\"Graduation Year\" required />\n  ";
    container === null || container === void 0 ? void 0 : container.appendChild(group);
}
function addExperience() {
    var container = document.getElementById('experienceContainer');
    var group = document.createElement('div');
    group.className = 'experience-group';
    group.style.padding = '15px';
    group.style.borderBottom = '1px solid #ccc';
    group.style.marginBottom = '10px';
    group.innerHTML = "\n    <input type=\"text\" name=\"company\" placeholder=\"Company\" />\n    <input type=\"number\" name=\"experienceYears\" placeholder=\"Years of Experience\" />\n    <textarea name=\"eperience\" placeholder=\"Experience Description\" required></textarea>\n  ";
    container === null || container === void 0 ? void 0 : container.appendChild(group);
}
