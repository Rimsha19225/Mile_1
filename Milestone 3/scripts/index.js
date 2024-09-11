// Get references to form elements
var resumeForm = document.getElementById('resumeForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var institutionInput = document.getElementById('institution');
var yearInput = document.getElementById('year');
var companyInput = document.getElementById('company');
var positionInput = document.getElementById('position');
var experienceYearsInput = document.getElementById('experienceYears');
var skillsInput = document.getElementById('skills');
var fileInput = document.getElementById('file');
var resumePicture = document.getElementById('resumePicture');
// Event listener to handle form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh
    // Handle image display
    if (fileInput.files && fileInput.files[0]) {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                resumePicture.innerHTML = "<img src=\"".concat(e.target.result, "\" alt=\"Profile Picture\" class=\"profile-pic\">");
            }
        };
        reader.readAsDataURL(file);
    }
    // Create the resume dynamically
    var resume = "\n        <h1>".concat(nameInput.value, "'s Resume</h1>\n        <section>\n            <h2>Personal Information</h2>\n            <p><strong>Name:</strong> ").concat(nameInput.value, "</p>\n            <p><strong>Email:</strong> ").concat(emailInput.value, "</p>\n        </section>\n\n        <section>\n            <h2>Education</h2>\n            <p><strong>Degree:</strong> ").concat(degreeInput.value, "</p>\n            <p><strong>Institution:</strong> ").concat(institutionInput.value, "</p>\n            <p><strong>Year of Graduation:</strong> ").concat(yearInput.value, "</p>\n        </section>\n\n        <section>\n            <h2>Work Experience</h2>\n            <p><strong>Company:</strong> ").concat(companyInput.value, "</p>\n            <p><strong>Position:</strong> ").concat(positionInput.value, "</p>\n            <p><strong>Years of Experience:</strong> ").concat(experienceYearsInput.value, "</p>\n        </section>\n\n        <section>\n            <h2>Skills</h2>\n            <p>").concat(skillsInput.value, "</p>\n        </section>\n    ");
    // Display the resume in the browser
    var resumeSection = document.createElement('section');
    resumeSection.innerHTML = resume;
    // Append the generated resume to the body (or any specific container)
    document.body.appendChild(resumeSection);
});
