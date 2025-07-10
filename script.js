document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split(',').map(s => s.trim()).filter(Boolean);
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const certifications = document.getElementById('certifications').value;
    const achievements = document.getElementById('achievements').value;
    const projects = document.getElementById('projects').value;

    let resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Skills</h3>
        <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        <h3>Work Experience</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        <h3>Education</h3>
        <p>${education.replace(/\n/g, '<br>')}</p>
    `;

    if (certifications.trim()) {
        resumeHTML += `<h3>Certifications</h3><p>${certifications.replace(/\n/g, '<br>')}</p>`;
    }
    if (achievements.trim()) {
        resumeHTML += `<h3>Achievements</h3><p>${achievements.replace(/\n/g, '<br>')}</p>`;
    }
    if (projects.trim()) {
        resumeHTML += `<h3>Projects</h3><p>${projects.replace(/\n/g, '<br>')}</p>`;
    }

    const output = document.getElementById('resumeOutput');
    output.innerHTML = resumeHTML;
    output.style.display = 'block';
    output.scrollIntoView({ behavior: 'smooth' });
});
