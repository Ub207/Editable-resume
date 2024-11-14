document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById('resume-form');
    var generateBtn = document.getElementById('generate-btn');
    var resumeDisplay = document.getElementById('resume-display');
    var resumeContent = document.getElementById('resume-content');
    var editBtn = document.getElementById('edit-btn');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Capture form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Populate the resume content
        resumeContent.innerHTML = "\n            <div class=\"resume-section\"><h2>Name</h2><p>".concat(name, "</p></div>\n            <div class=\"resume-section\"><h2>Email</h2><p>").concat(email, "</p></div>\n            <div class=\"resume-section\"><h2>Phone</h2><p>").concat(phone, "</p></div>\n            <div class=\"resume-section\"><h2>Education</h2><p>").concat(education, "</p></div>\n            <div class=\"resume-section\"><h2>Experience</h2><p>").concat(experience, "</p></div>\n            <div class=\"resume-section\"><h2>Skills</h2><p>").concat(skills, "</p></div>\n        ");
        // Hide the form and show the resume display
        form.style.display = 'none';
        resumeDisplay.style.display = 'block';
    });
    // Add functionality to the "Edit" button
    editBtn.addEventListener('click', function () {
        // Show the form and hide the resume display
        form.style.display = 'block';
        resumeDisplay.style.display = 'none';
    });
});
