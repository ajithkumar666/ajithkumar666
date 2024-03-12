// Menu links
let getAbout = document.getElementById("getAbout");
let getResume = document.getElementById("getResume");
let getSkills = document.getElementById("getSkills");
let getEducation = document.getElementById("getEducation");
let getContact = document.getElementById("getContact");

// Sections
let about = document.getElementById("about");
let resume = document.getElementById("resume");
let skills = document.getElementById("skills");
let education = document.getElementById("education");
let contact = document.getElementById("contact");


function removeClass() {
    // Links
    getAbout.classList.remove('selected');
    getResume.classList.remove('selected');
    getContact.classList.remove('selected');
    getEducation.classList.remove('selected');
    getSkills.classList.remove('selected');
    // Sections
    about.classList.remove('view');
    resume.classList.remove('view');
    contact.classList.remove('view');
    education.classList.remove('view');
    skills.classList.remove('view');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})

getEducation.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        education.classList.add('view');
        getEducation.classList.add('selected');
    }
})

getSkills.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        skills.classList.add('view');
        getSkills.classList.add('selected');
    }
})

