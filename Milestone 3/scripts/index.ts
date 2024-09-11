// Get references to form elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const institutionInput = document.getElementById('institution') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;
const companyInput = document.getElementById('company') as HTMLInputElement;
const positionInput = document.getElementById('position') as HTMLInputElement;
const experienceYearsInput = document.getElementById('experienceYears') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const fileInput = document.getElementById('file') as HTMLInputElement;
const resumePicture = document.getElementById('resumePicture') as HTMLDivElement;

// Event listener to handle form submission
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    // Handle image display
    if (fileInput.files && fileInput.files[0]) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function (e) {
            if (e.target) {
                resumePicture.innerHTML = `<img src="${e.target.result}" alt="Profile Picture" class="profile-pic">`;
            }
        };
        
        reader.readAsDataURL(file);
    }

    // Create the resume dynamically
    const resume = `
        <h1>${nameInput.value}'s Resume</h1>
        <section>
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
        </section>

        <section>
            <h2>Education</h2>
            <p><strong>Degree:</strong> ${degreeInput.value}</p>
            <p><strong>Institution:</strong> ${institutionInput.value}</p>
            <p><strong>Year of Graduation:</strong> ${yearInput.value}</p>
        </section>

        <section>
            <h2>Work Experience</h2>
            <p><strong>Company:</strong> ${companyInput.value}</p>
            <p><strong>Position:</strong> ${positionInput.value}</p>
            <p><strong>Years of Experience:</strong> ${experienceYearsInput.value}</p>
        </section>

        <section>
            <h2>Skills</h2>
            <p>${skillsInput.value}</p>
        </section>
    `;

    // Display the resume in the browser
    const resumeSection = document.createElement('section');
    resumeSection.innerHTML = resume;

    // Append the generated resume to the body (or any specific container)
    document.body.appendChild(resumeSection);
});