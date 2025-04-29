const burgerInput = document.getElementById("burger"); 
const dropdown = document.getElementById("dropdownMenu");
const burgerLabel = document.getElementById("burgerToggle");
burgerInput.onclick = function() {
 dropdown.classList.toggle("show"); 
 };

window.addEventListener("resize", () => {
const isMobile = window.innerWidth <= 872; 
if (!isMobile) {
burgerInput.checked = false; 
dropdown.classList.remove("show"); 
}
});

document.addEventListener("DOMContentLoaded", function () {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const body = document.body;

  // iPhone detection (iOS)
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  // Android detection
  const isAndroid = /android/i.test(userAgent);

  // Windows detection
  const isWindows = /windows/i.test(userAgent);

  if (isIOS) {
    document.body.classList.add("use-scale");
  } else if (isAndroid || isWindows) {
    document.body.style.zoom = "1.8";
  }
});




const wrapper = document.querySelectorAll(".experience-wrapper");

wrapper.forEach((wrapper) => {
  for (let i = 0; i < 6; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

  
    const top = Math.random() * 80 + 10;  // entre 10% y 90%
    const left = Math.random() * 80 + 10;

    circle.style.top = `${top}%`;
    circle.style.left = `${left}%`;

    wrapper.appendChild(circle);
  }
});

const icons = document.querySelectorAll('.icono'); // Selecciona todos los iconos

const observerExperience = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__rubberBand'); // Aplica la animación al icono que se vuelve visible
      observerExperience.unobserve(entry.target); // Deja de observar el elemento una vez animado
    }
  });
}, {
  threshold: 0.4 // Empieza la animación cuando el 40% sea visible
});

icons.forEach(icon => observerExperience.observe(icon)); // Observa todos los iconos



const carrusel = document.querySelectorAll('.carousel'); // Selecciona todos los iconos

const observerCarrusel = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__bounce'); // Aplica la animación al icono que se vuelve visible
      observerCarrusel.unobserve(entry.target); // Deja de observar el elemento una vez animado
    }
  });
}, {
  threshold: 0.4 // Empieza la animación cuando el 40% sea visible
});

carrusel.forEach(carru => observerCarrusel.observe(carru)); // Observa todos los iconos


async function loadLanguage(lang) {
    const response = await fetch('lang.json');
    const texts = await response.json();
  
    document.getElementById('name').textContent = texts[lang].name;
    document.getElementById('title').textContent = texts[lang].title;
    document.getElementById('tag1').textContent = texts[lang].tag1;
    document.getElementById('tag2').textContent = texts[lang].tag2;
    document.getElementById('description').textContent = texts[lang].description;

     // Traducción del navbar principal
  document.getElementById('nav_about').textContent = texts[lang].nav_about;
  document.getElementById('nav_projects').textContent = texts[lang].nav_projects;
  document.getElementById('nav_contact').textContent = texts[lang].nav_contact;

  // Traducción del menú desplegable
  document.getElementById('drop_about').textContent = texts[lang].nav_about;
  document.getElementById('drop_projects').textContent = texts[lang].nav_projects;
  document.getElementById('drop_contact').textContent = texts[lang].nav_contact;

 document.getElementById('section_technologies').textContent = texts[lang].section_technologies;
  document.getElementById('section_experience').textContent = texts[lang].section_experience;
  document.getElementById('section_projects').textContent = texts[lang].section_projects;

document.getElementById('exp_ponderosa_title').textContent = texts[lang].exp_ponderosa_title;
document.getElementById('exp_ponderosa_text').textContent = texts[lang].exp_ponderosa_text;
document.getElementById('exp_exportpack_title').textContent = texts[lang].exp_exportpack_title;
document.getElementById('exp_exportpack_text').textContent = texts[lang].exp_exportpack_text;

document.getElementById('agricola_tittle').textContent = texts[lang].agricola_title;
document.getElementById('agricola_text').textContent = texts[lang].agricola_text;
document.getElementById('cine_title').textContent = texts[lang].cine_title;
document.getElementById('cine_text').textContent = texts[lang].cine_text;
document.getElementById('galeri_tittle').textContent = texts[lang].galeria_title;
document.getElementById('galeria_text').textContent = texts[lang].galeria_text;

document.getElementById('section_studies').textContent = texts[lang].section_studies;
document.getElementById('study_highschool_years').textContent = texts[lang].study_highschool_years;
document.getElementById('study_highschool_level').textContent = texts[lang].study_highschool_level;
document.getElementById('study_highschool_title').textContent = texts[lang].study_highschool_title;
document.getElementById('study_university_years').textContent = texts[lang].study_university_years;
document.getElementById('study_university_level').textContent = texts[lang].study_university_level;
document.getElementById('study_university_institution').textContent = texts[lang].study_university_institution;
document.getElementById('study_university_title').textContent = texts[lang].study_university_title;
document.getElementById('certification_occupational_year').textContent = texts[lang].certification_occupational_year;
document.getElementById('certification_occupational_type').textContent = texts[lang].certification_occupational_type;
document.getElementById('certification_occupational_name').textContent = texts[lang].certification_occupational_name;
document.getElementById('certification_itoperator_year').textContent = texts[lang].certification_itoperator_year;
document.getElementById('certification_itoperator_type').textContent = texts[lang].certification_itoperator_type;
document.getElementById('certification_itoperator_name').textContent = texts[lang].certification_itoperator_name;
document.getElementById('certification_itessentials_year').textContent = texts[lang].certification_itessentials_year;
document.getElementById('certification_itessentials_type').textContent = texts[lang].certification_itessentials_type;
document.getElementById('certification_itessentials_name').textContent = texts[lang].certification_itessentials_name;
  
document.getElementById('section_me').textContent = texts[lang].section_me;
document.getElementById('text_me').textContent = texts[lang].text_me;
document.getElementById('footer_residence_title').textContent = texts[lang].footer_residence_title;
document.getElementById('footer_residence_extra').textContent = texts[lang].footer_residence_extra;
document.getElementById('footer_contact_title').textContent = texts[lang].footer_contact_title;

}
  

  loadLanguage('en');
  
  const languageSwitchers = document.querySelectorAll('.languageSwitcher');

  languageSwitchers.forEach(switcher => {
    switcher.addEventListener('change', function () {
      loadLanguage(this.value);

      languageSwitchers.forEach(otherSwitcher => {
        otherSwitcher.value = this.value;
      });
    });
  });