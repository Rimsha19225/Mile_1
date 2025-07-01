(() => {
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const output = document.getElementById("resumeOutput") as HTMLDivElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLTextAreaElement).value;

    const educationGroups = document.querySelectorAll(".education-group");
        const educationHTML = Array.from(educationGroups).map(group => {
        const level = (group.querySelector('[name="level"]') as HTMLInputElement).value;
        const degree = (group.querySelector('[name="degree"]') as HTMLInputElement).value;
        const institution = (group.querySelector('[name="institution"]') as HTMLInputElement).value;
        const year = (group.querySelector('[name="year"]') as HTMLInputElement).value;
        return `
            <div style="margin-bottom: 15px;">
                <strong>${level}</strong><br/>
                <span>${degree} - ${institution} (${year})</span>
            </div>`;
        }).join("");

    const experienceGroups = document.querySelectorAll(".experience-group");
    const experienceHTML = Array.from(experienceGroups).map(group => {
    const company = (group.querySelector('[name="company"]') as HTMLInputElement).value;
    const experienceYears = (group.querySelector('[name="experienceYears"]') as HTMLInputElement).value;
    const para = (group.querySelector('[name="eperience"]') as HTMLTextAreaElement).value;
    return `<p><strong>${company} - ${experienceYears} year(s)</strong></p><p>${para}</p>`;
    }).join("");

    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",");
    const hobbies = (document.getElementById("hobbies") as HTMLInputElement).value.split(",");

    const fileInput = document.getElementById("file") as HTMLInputElement;
    const file = fileInput.files?.[0];

    const reader = new FileReader();
    reader.onload = () => {
      const imgSrc = reader.result as string;

      output.innerHTML = `
        <div class="resume">
          <div class="left">
            <img src="${imgSrc}" alt="Profile" class="profile-pic" />
            <div class="section-title">Contact</div>
            <p><span class="icon-circle"><i class="fas fa-envelope"></i></span> ${email}</p>
            <p><span class="icon-circle"><i class="fas fa-phone"></i></span> ${phone}</p>
            <p><span class="icon-circle"><i class="fas fa-map-marker-alt"></i></span> ${address}</p>
            <div class="section-title">Skills</div>
            <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
            <div class="section-title">Hobbies</div>
            <ul>${hobbies.map(hobby => `<li>${hobby.trim()}</li>`).join("")}</ul>
          </div>
          <div class="right">
            <div class="my-scriptina-text">
                <h2 class="name-head">${name}</h2>
            </div>
            <div class="sub-right">
                <h2 class="about">About Me</h2>
                <p class="about-para">${about}</p>
                <h2 class="education">Education</h2>
                <p class="edu-area">${educationHTML}</p>
                <h2 class="experience">Experience</h2>
                <p class="exp-area">${experienceHTML}</p>
            </div>
          </div>
        </div>
      `;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
})();

function addEducation() {
  const container = document.getElementById('educationContainer');

  const group = document.createElement('div');
  group.className = 'education-group';
  group.style.padding = '15px';
  group.style.borderBottom = '1px solid #ccc';
  group.style.marginBottom = '10px';

  group.innerHTML = `
    <input type="text" name="level" placeholder="Education Level (e.g., Graduation, College, School)" required />
    <input type="text" name="degree" placeholder="Degree (e.g. Program)" required />
    <input type="text" name="institution" placeholder="Institution" required />
    <input type="number" name="year" placeholder="Graduation Year" required />
  `;

  container?.appendChild(group);
}


function addExperience() {
  const container = document.getElementById('experienceContainer');

  const group = document.createElement('div');
  group.className = 'experience-group';
  group.style.padding = '15px';
  group.style.borderBottom = '1px solid #ccc';
  group.style.marginBottom = '10px';

  group.innerHTML = `
    <input type="text" name="company" placeholder="Company" />
    <input type="number" name="experienceYears" placeholder="Years of Experience" />
    <textarea name="eperience" placeholder="Experience Description" required></textarea>
  `;

  container?.appendChild(group);
}
