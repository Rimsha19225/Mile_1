// Toggle visibility of Work Experience based on job status
const jobStatus = document.getElementById('job-status') as HTMLSelectElement;
const workDetails = document.getElementById('work-details') as HTMLDivElement;

jobStatus.addEventListener('change', () => {
  workDetails.style.display = jobStatus.value === 'yes' ? 'block' : 'none';
});

// Dynamically show education details based on selected level
const educationLevel = document.getElementById('education-level') as HTMLSelectElement;
const educationDetails = document.getElementById('education-details') as HTMLDivElement;

educationLevel.addEventListener('change', () => {
  let html = '';
  switch (educationLevel.value) {
    case 'school':
      html = `
        <label for="school-name">School Name:</label>
        <input type="text" id="school-name" placeholder="Your School Name">
        <label for="degree">Degree:</label>
        <input type="text" id="degree" placeholder="Degree Name">
        <label for="school-year">Year:</label>
        <input type="text" id="school-year" placeholder="Passout Year">
      `;
      break;
    case 'college':
      html = `
        <label for="college-name">College Name:</label>
        <input type="text" id="college-name" placeholder="Your College Name">
        <label for="degree">Degree:</label>
        <input type="text" id="degree" placeholder="Degree Name">
        <label for="college-year">Year:</label>
        <input type="text" id="college-year" placeholder="Passout Year">
        <label for="school-name">School Name:</label>
        <input type="text" id="school-name" placeholder="Your School Name">
        <label for="degree">Degree:</label>
        <input type="text" id="degree" placeholder="Degree Name">
        <label for="school-year">Year:</label>
        <input type="text" id="school-year" placeholder="Passout Year">
      `;
      break;
    case 'university':
      html = `
        <label for="university-name">University Name:</label>
        <input type="text" id="university-name" placeholder="Your University Name">
        <label for="degree">Degree:</label>
        <input type="text" id="degree" placeholder="Degree Name">
        <label for="university-year">Year:</label>
        <input type="text" id="university-year" placeholder="Passout Year">
        <label for="college-name">College Name:</label>
        <input type="text" id="college-name" placeholder="Your College Name">
        <label for="degree">Degree:</label>
        <input type="text" id="degree" placeholder="Degree Name">
        <label for="college-year">Year:</label>
        <input type="text" id="college-year" placeholder="Passout Year">
        <label for="school-name">School Name:</label>
        <input type="text" id="school-name" placeholder="Your School Name">
        <label for="degree">Degree:</label>
        <input type="text" id="degree" placeholder="Degree Name">
        <label for="school-year">Year:</label>
        <input type="text" id="school-year" placeholder="Passout Year">
      `;
      break;
  }
  educationDetails.innerHTML = html;
});

// Handle image preview
const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
const imgElement = document.getElementById('profile-picture-preview') as HTMLImageElement;

profilePictureInput.addEventListener('change', function () {
  const file = this.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      if (imgElement) {
        imgElement.src = e.target?.result as string;
      } else {
        const newImgElement = document.createElement('img');
        newImgElement.id = 'profile-picture-preview';
        newImgElement.style.width = '150px';
        newImgElement.style.height = '150px';
        newImgElement.style.float = 'right'; // Align the image to the right
        newImgElement.style.borderRadius = '50%'; // Optional: Add a circular profile effect
        newImgElement.style.margin = '0 50px';
        newImgElement.style.marginTop = '20px'; // Add some margin around the image
        newImgElement.src = e.target?.result as string;
        document.body.appendChild(newImgElement);
      }
    };
    reader.readAsDataURL(file);
  }
});

// Submit button functionality to create the resume
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Capture personal information
  const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
  const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
  const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
  const address = (document.getElementById('address') as HTMLInputElement)?.value || '';

   // Capture education details
   let educationInfo = '';
   if (educationLevel.value === 'school') {
     const schoolName = (document.getElementById('school-name') as HTMLInputElement)?.value || '';
     const schoolDegree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
     const schoolYear = (document.getElementById('school-year') as HTMLInputElement)?.value || '';
     educationInfo = `<p><strong>School:</strong> ${schoolName} <br> <strong>Degree:</strong> ${schoolDegree} <br> <strong>Year:</strong> ${schoolYear}</p>`;
   } else if (educationLevel.value === 'college') {
     const collegeName = (document.getElementById('college-name') as HTMLInputElement)?.value || '';
     const collegeDegree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
     const collegeYear = (document.getElementById('college-year') as HTMLInputElement)?.value || '';
     const schoolName = (document.getElementById('school-name') as HTMLInputElement)?.value || '';
     const schoolDegree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
     const schoolYear = (document.getElementById('school-year') as HTMLInputElement)?.value || '';
     educationInfo =` <p><strong>College:</strong> ${collegeName} <br> <strong>Degree:</strong> ${collegeDegree} <br> <strong>Year:</strong> ${collegeYear} <br> <strong>School:</strong> ${schoolName} <br> <strong>Degree:</strong> ${schoolDegree} <br> <strong>Year:</strong> ${schoolYear}</p>`;
   } else if (educationLevel.value === 'university') {
     const universityName = (document.getElementById('university-name') as HTMLInputElement)?.value || '';
     const universityDegree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
     const universityYear = (document.getElementById('university-year') as HTMLInputElement)?.value || '';
     const collegeName = (document.getElementById('college-name') as HTMLInputElement)?.value || '';
     const collegeDegree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
     const collegeYear = (document.getElementById('college-year') as HTMLInputElement)?.value || '';
     const schoolName = (document.getElementById('school-name') as HTMLInputElement)?.value || '';
     const schoolDegree = (document.getElementById('degree') as HTMLInputElement)?.value || '';
     const schoolYear = (document.getElementById('school-year') as HTMLInputElement)?.value || '';
     educationInfo = `<p><strong>University:</strong> ${universityName} <br> <strong>Degree:</strong> ${universityDegree} <br> <strong>Year:</strong> ${universityYear} <br> <strong>College:</strong> ${collegeName} <br> <strong>Degree:</strong> ${collegeDegree} <br> <strong>Year:</strong> ${collegeYear} <br> <strong>School:</strong> ${schoolName}<br> <strong>Degree:</strong> ${schoolDegree}<br> <strong>Year:</strong> ${schoolYear}</p>`;
   }

  // Capture skills data
  const skillsInput = document.getElementById('skills') as HTMLInputElement;
  const skills = skillsInput?.value || 'No skills provided';

  // Capture work experience if applicable
  let workExperience = '';
  if (jobStatus.value === 'yes') {
    const companyName = (document.getElementById('company-name') as HTMLInputElement)?.value || '';
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement)?.value || '';
    const jobYear = (document.getElementById('job-year') as HTMLInputElement)?.value || '';
    workExperience = `
      <h3>Work Experience</h3>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Job Title:</strong> ${jobTitle}</p>
      <p><strong>Years of Experience:</strong> ${jobYear}</p>
    `;
  }

  // Generate resume HTML
  const resume = `
    <h2>${name} Resume</h2>
    <section>
      <h3>Personal Information</h3>
      <img src="${imgElement?.src || ''}" style="width: 150px; float: right; border-radius: 50%; margin: 20px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
    </section>
    <section>
      <h3>Education</h3>
      ${educationInfo || 'No education information provided.'}
    </section>
    <section>
      <h3>Skills</h3>
      <p>${skills}</p>
    </section>
    ${workExperience}
  `;

  // Display the resume in a new section
  const resumeContainer = document.createElement('div');
  resumeContainer.className = 'resume-container';
  resumeContainer.innerHTML = resume;

  document.body.appendChild(resumeContainer);
});
