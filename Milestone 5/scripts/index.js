// Toggle visibility of Work Experience based on job status
var jobStatus = document.getElementById('job-status');
var workDetails = document.getElementById('work-details');
jobStatus.addEventListener('change', function () {
    workDetails.style.display = jobStatus.value === 'yes' ? 'block' : 'none';
});
// Dynamically show education details based on selected level
var educationLevel = document.getElementById('education-level');
var educationDetails = document.getElementById('education-details');
educationLevel.addEventListener('change', function () {
    var html = '';
    switch (educationLevel.value) {
        case 'school':
            html = "\n        <label for=\"school-name\">School Name:</label>\n        <input type=\"text\" id=\"school-name\" placeholder=\"Your School Name\">\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" id=\"degree\" placeholder=\"Degree Name\">\n        <label for=\"school-year\">Year:</label>\n        <input type=\"text\" id=\"school-year\" placeholder=\"Passout Year\">\n      ";
            break;
        case 'college':
            html = "\n        <label for=\"college-name\">College Name:</label>\n        <input type=\"text\" id=\"college-name\" placeholder=\"Your College Name\">\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" id=\"degree\" placeholder=\"Degree Name\">\n        <label for=\"college-year\">Year:</label>\n        <input type=\"text\" id=\"college-year\" placeholder=\"Passout Year\">\n        <label for=\"school-name\">School Name:</label>\n        <input type=\"text\" id=\"school-name\" placeholder=\"Your School Name\">\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" id=\"degree\" placeholder=\"Degree Name\">\n        <label for=\"school-year\">Year:</label>\n        <input type=\"text\" id=\"school-year\" placeholder=\"Passout Year\">\n      ";
            break;
        case 'university':
            html = "\n        <label for=\"university-name\">University Name:</label>\n        <input type=\"text\" id=\"university-name\" placeholder=\"Your University Name\">\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" id=\"degree\" placeholder=\"Degree Name\">\n        <label for=\"university-year\">Year:</label>\n        <input type=\"text\" id=\"university-year\" placeholder=\"Passout Year\">\n        <label for=\"college-name\">College Name:</label>\n        <input type=\"text\" id=\"college-name\" placeholder=\"Your College Name\">\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" id=\"degree\" placeholder=\"Degree Name\">\n        <label for=\"college-year\">Year:</label>\n        <input type=\"text\" id=\"college-year\" placeholder=\"Passout Year\">\n        <label for=\"school-name\">School Name:</label>\n        <input type=\"text\" id=\"school-name\" placeholder=\"Your School Name\">\n        <label for=\"degree\">Degree:</label>\n        <input type=\"text\" id=\"degree\" placeholder=\"Degree Name\">\n        <label for=\"school-year\">Year:</label>\n        <input type=\"text\" id=\"school-year\" placeholder=\"Passout Year\">\n      ";
            break;
    }
    educationDetails.innerHTML = html;
});
// Handle image preview
var profilePictureInput = document.getElementById('profile-picture');
var imgElement = document.getElementById('profile-picture-preview');
profilePictureInput.addEventListener('change', function () {
    var _a;
    var file = (_a = this.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a, _b, _c;
            var imgSrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            if (imgElement) {
                imgElement.src = imgSrc;
                imgElement.src = (_b = e.target) === null || _b === void 0 ? void 0 : _b.result;
            }
            else {
                var newImgElement = document.createElement('img');
                newImgElement.id = 'profile-picture-preview';
                newImgElement.style.width = '150px';
                newImgElement.style.height = '150px';
                newImgElement.style.float = 'right'; // Align the image to the right
                newImgElement.style.borderRadius = '50%'; // Optional: Add a circular profile effect
                newImgElement.style.margin = '0 50px';
                newImgElement.style.marginTop = '20px'; // Add some margin around the image
                newImgElement.src = (_c = e.target) === null || _c === void 0 ? void 0 : _c.result;
                document.body.appendChild(newImgElement);
            }
        };
        reader.readAsDataURL(file);
    }
});
// Submit button functionality to create the resume
var submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    event.preventDefault();
    // Capture personal information
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
    var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
    var address = ((_d = document.getElementById('address')) === null || _d === void 0 ? void 0 : _d.value) || '';
    // Capture education details
    var educationInfo = '';
    if (educationLevel.value === 'school') {
        var schoolName = ((_e = document.getElementById('school-name')) === null || _e === void 0 ? void 0 : _e.value) || '';
        var schoolDegree = ((_f = document.getElementById('degree')) === null || _f === void 0 ? void 0 : _f.value) || '';
        var schoolYear = ((_g = document.getElementById('school-year')) === null || _g === void 0 ? void 0 : _g.value) || '';
        educationInfo = "<p><strong>School:</strong> ".concat(schoolName, " <br> <strong>Degree:</strong> ").concat(schoolDegree, " <br> <strong>Year:</strong> ").concat(schoolYear, "</p>");
    }
    else if (educationLevel.value === 'college') {
        var collegeName = ((_h = document.getElementById('college-name')) === null || _h === void 0 ? void 0 : _h.value) || '';
        var collegeDegree = ((_j = document.getElementById('degree')) === null || _j === void 0 ? void 0 : _j.value) || '';
        var collegeYear = ((_k = document.getElementById('college-year')) === null || _k === void 0 ? void 0 : _k.value) || '';
        var schoolName = ((_l = document.getElementById('school-name')) === null || _l === void 0 ? void 0 : _l.value) || '';
        var schoolDegree = ((_m = document.getElementById('degree')) === null || _m === void 0 ? void 0 : _m.value) || '';
        var schoolYear = ((_o = document.getElementById('school-year')) === null || _o === void 0 ? void 0 : _o.value) || '';
        educationInfo = " <p><strong>College:</strong> ".concat(collegeName, " <br> <strong>Degree:</strong> ").concat(collegeDegree, " <br> <strong>Year:</strong> ").concat(collegeYear, " <br> <strong>School:</strong> ").concat(schoolName, " <br> <strong>Degree:</strong> ").concat(schoolDegree, " <br> <strong>Year:</strong> ").concat(schoolYear, "</p>");
    }
    else if (educationLevel.value === 'university') {
        var universityName = ((_p = document.getElementById('university-name')) === null || _p === void 0 ? void 0 : _p.value) || '';
        var universityDegree = ((_q = document.getElementById('degree')) === null || _q === void 0 ? void 0 : _q.value) || '';
        var universityYear = ((_r = document.getElementById('university-year')) === null || _r === void 0 ? void 0 : _r.value) || '';
        var collegeName = ((_s = document.getElementById('college-name')) === null || _s === void 0 ? void 0 : _s.value) || '';
        var collegeDegree = ((_t = document.getElementById('degree')) === null || _t === void 0 ? void 0 : _t.value) || '';
        var collegeYear = ((_u = document.getElementById('college-year')) === null || _u === void 0 ? void 0 : _u.value) || '';
        var schoolName = ((_v = document.getElementById('school-name')) === null || _v === void 0 ? void 0 : _v.value) || '';
        var schoolDegree = ((_w = document.getElementById('degree')) === null || _w === void 0 ? void 0 : _w.value) || '';
        var schoolYear = ((_x = document.getElementById('school-year')) === null || _x === void 0 ? void 0 : _x.value) || '';
        educationInfo = "<p><strong>University:</strong> ".concat(universityName, " <br> <strong>Degree:</strong> ").concat(universityDegree, " <br> <strong>Year:</strong> ").concat(universityYear, " <br> <strong>College:</strong> ").concat(collegeName, " <br> <strong>Degree:</strong> ").concat(collegeDegree, " <br> <strong>Year:</strong> ").concat(collegeYear, " <br> <strong>School:</strong> ").concat(schoolName, "<br> <strong>Degree:</strong> ").concat(schoolDegree, "<br> <strong>Year:</strong> ").concat(schoolYear, "</p>");
    }
    // Capture skills data
    var skillsInput = document.getElementById('skills');
    var skills = (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) || 'No skills provided';
    // Capture work experience if applicable
    var workExperience = '';
    if (jobStatus.value === 'yes') {
        var companyName = ((_y = document.getElementById('company-name')) === null || _y === void 0 ? void 0 : _y.value) || '';
        var jobTitle = ((_z = document.getElementById('job-title')) === null || _z === void 0 ? void 0 : _z.value) || '';
        var jobYear = ((_0 = document.getElementById('job-year')) === null || _0 === void 0 ? void 0 : _0.value) || '';
        workExperience = "\n      <h3>Work Experience</h3>\n      <p><strong>Company Name:</strong> ".concat(companyName, "</p>\n      <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n      <p><strong>Years of Experience:</strong> ").concat(jobYear, "</p>\n    ");
    }
    // Generate resume HTML
    var resume = "\n    <h2>".concat(name, " Resume</h2>\n    <section>\n      <h3>Personal Information</h3>\n      <img src=\"").concat((imgElement === null || imgElement === void 0 ? void 0 : imgElement.src) || '', "\" style=\"width: 150px; float: right; border-radius: 50%; margin: 20px;\">\n      <p><strong>Name:</strong> ").concat(name, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Address:</strong> ").concat(address, "</p>\n    </section>\n    <section>\n      <h3>Education</h3>\n      ").concat(educationInfo || 'No education information provided.', "\n    </section>\n    <section>\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    </section>\n    ").concat(workExperience, "\n    <section>\n      <p align=\"center\"><button id=\"download-btn\" style=\"background-color: #ff910b; border-radius: 10px; border: none; font-weight: bolder; font-size: 16px;\">Download as PDF</button></p>\n    </section>\n  ");
    // Display the resume in a new section
    var resumeContainer = document.createElement('div');
    resumeContainer.id = 'resume-container'; // Added ID for reference
    resumeContainer.className = 'resume-container';
    resumeContainer.innerHTML = resume;
    document.body.appendChild(resumeContainer);
    // Handle PDF download
    (_1 = document.getElementById('download-btn')) === null || _1 === void 0 ? void 0 : _1.addEventListener('click', function () {
        var printWindow = window.open('', '', 'height=600,width=800');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write('<html><head><title>Print</title></head><body>');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write(resumeContainer.outerHTML);
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write('</body></html>');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.focus();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.close();
    });
});
