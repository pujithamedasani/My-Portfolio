const textElement = document.getElementById('typing-text');
const phrases = ["Full Stack Developer.","Software Developer Intern.", "AI Intern.", "Data Enthusiast.", "Mern Specialist."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Experience Data Object
const experienceData = {
    agumentik: {
        title: "Full Stack Developer Intern (MERN + Redux)",
        org: "Agumentik Group of Companies",
        period: "May 2026 - Present",
        details: [
            "Employing MERN technology stack (MongoDB, Express, React.js, and Node.js) in building full-stack online apps.",
            "Building state management and responsive UIs using Redux and React.js.",
            "Implementing secure JWT authorization and role-based access control.",
            "Collaborating within the Agile process using sprint methodologies and stand-up meetings."
        ]
    },
    edunet: {
        title: "Green Skills and AI Intern",
        org: "Edunet Foundation",
        period: "Aug 2025 - Sep 2025",
        details: [
            "Developed an end-to-end project using Python, Pandas, and Scikit-learn for renewable energy data exploration.",
            "Cleaned complex Kaggle datasets and experimented with linear and tree-based regressors.",
            "Created an interactive Streamlit app for trend charts and model predictions.",
            "Discussed tradeoffs like model complexity vs interpretability with mentors."
        ]
    },
    elevate: {
        title: "SQL Developer Internship",
        org: "Elevate Labs",
        period: "Jun 2025 - Jul 2025",
        details: [
            "Hammered out 150+ SQL queries across MySQL and SQLite, significantly reducing query time.",
            "Normalized messy table sets and implemented strategic indexing for airline reservation systems.",
            "Collaborated with backend teams to wire queries and business logic into APIs."
        ]
    }
};

function openModal(id) {
    const data = experienceData[id];
    const modal = document.getElementById("experienceModal");
    const body = document.getElementById("modal-body");

    body.innerHTML = `
        <h3>${data.title}</h3>
        <span class="modal-org">${data.org}</span>
        <p style="font-family: monospace; font-size: 0.9rem; margin-bottom: 20px;">${data.period}</p>
        <ul>
            ${data.details.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

function closeModal() {
    const modal = document.getElementById("experienceModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal if user clicks outside of the content box
window.onclick = function(event) {
    const modal = document.getElementById("experienceModal");
    if (event.target == modal) {
        closeModal();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (textElement) typeEffect();
    
    //const contactForm = document.querySelector('.contact-form');
    //if (contactForm) {
        //contactForm.addEventListener('submit', (e) => {
            //e.preventDefault();
            //alert("Success! Your message has been sent ");
            //contactForm.reset(); // Clears the form after clicking send
        //});
    //}
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
