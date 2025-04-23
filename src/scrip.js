const burgerInput = document.getElementById("burger"); 
const dropdown = document.getElementById("dropdownMenu");
const burgerLabel = document.getElementById("burgerToggle");
burgerInput.onclick = function() {
 dropdown.classList.toggle("show"); 
 };

window.addEventListener("resize", () => {
const isMobile = window.innerWidth <= 768; 
if (!isMobile) {
burgerInput.checked = false; 
dropdown.classList.remove("show"); 
}
});

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
  }
  
  // Cargar idioma por defecto
  loadLanguage('en');
  
  // Cambio dinámico desde el selector
  document.getElementById('languageSwitcher').addEventListener('change', function () {
    loadLanguage(this.value);
  });