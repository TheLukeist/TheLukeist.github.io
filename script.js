let menuVisible = false;
const clic = document.getElementById("clic");
const header = document.querySelector("header");
let lastScroll = window.scrollY;
let scrollstop;

const skillsSection = document.getElementById("Skills");
const skills = document.getElementsByClassName("progress")

function mostrarOcultarMenu(){
    clic.classList.toggle("responsive");
    menuVisible = !menuVisible;
}

function selec(){
    clic.classList.remove("responsive");
    menuVisible = false;
}

function skillsefect() {
    const rect = skillsSection.getBoundingClientRect();
    const dist = rect.top;
    
    if (dist < window.innerHeight - 100 && !skillsSection.dataset.animated) {
        Array.from(skills).forEach((skill, index) => {
            const classes = ["Python", "JavaScript", "HTMLCSS", "C", 
                           "Git", "Excel", "SQL", "Ruby"];
            skill.classList.add(classes[index]);
        });
        skillsSection.dataset.animated = "true";
    }
}

function visibility(){
    const currentscroll = window.scrollY;
    clearTimeout(scrollstop);

    if (Math.abs(currentscroll - lastScroll) > 5){
        header.classList.add("content-header-hidden");
    }
    scrollstop = setTimeout(() =>{
        header.classList.remove("content-header-hidden");        
    }, 150);
    
    lastScroll = currentscroll;
}

window.addEventListener("scroll", () => {
    skillsefect();
    visibility();
});

document.addEventListener("click", (e) => {
    if(!navigator.contains(e.target) && !document.querySelector(".clic-responsive").contains(e.target)) {
        clic.classList.remove("responsive");
        menuVisible = false;
    }
});
