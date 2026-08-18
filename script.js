// 1. Datos del Portafolio
const portfolioProjects = [
    /*{
      id: "yo",
      title: "Yo / Resume",
      subtitle: "Álvaro Menacho",
      category: "01 / PORTFOLIO",
      tagline: "Desarrollador de Productos Digitales End-to-End",
      coverBg: "linear-gradient(135deg, #2b1f1d 0%, #4a3431 100%)",
      iconName: "user",
      color: "#E2BA49",
      description: "Soy un desarrollador de software con enfoque absoluto en producto y experiencia de usuario. No me considero un perfil junior tradicional porque tengo la capacidad de diseñar, estructurar, programar y lanzar aplicaciones completas y complejas de forma autónoma...",
      bullets: [
        "Perfil autodidacta con pasión por la excelencia técnica y el diseño de interfaces limpias.",
        "Creador de Haba, un gestor de finanzas personales para desktop completamente desarrollado y lanzado al mercado.",
        "Creador de Riquisssimo, una app nativa para iOS en TestFlight que integra IA.",
        "Mentalidad orientada a la resolución de problemas."
      ],
      techStack: ["React", "TypeScript", "SwiftUI", "Electron", "Vite", "Node.js", "Gemini API"],
      links: [
        { label: "Ver GitHub", url: "https://github.com/alvaromenachojs", primary: true, icon: "github" },
        { label: "LinkedIn", url: "https://linkedin.com/in/alvaromenacho", primary: false, icon: "linkedin" }
      ]
    },*/
    {
      id: "haba",
      title: "Haba",
      subtitle: "Desktop Finance App",
      category: "01 / DESKTOP APP",
      tagline: "Administración financiera Brillante, Agradable y Clara",
      coverBg: "url('./assets/logoHaba.png')",
      iconName: "wallet",
      color: "#10B981",
      description: "Haba está diseñada para promover y accesibilizar las finanzas personales proporcionándole a los usuarios una herramienta con la cual se sientan cómodos y a gusto conociendo su salud financiera",
      bullets: [
        "Lanzada al mercado de forma independiente y con usuarios activos en macOS y Windows",
        "Implementación de PostHog para obtener metricas de usuarios",
        "Comunicación activa con usurios mediante un apartado dentro de Haba dedicado a sus comentarios y recomendaciones"
      ],
      techStack: ["Electron", "React", "HTML 5", "Tailwind CSS", "Posthog"],
      links: [
        { label: "Sitio Web", url: "https://alvarovert.github.io/Haba_page/", primary: true, icon: "external-link" },
      ]
    },
    {
      id: "riquisssimo",
      title: "Riquisssimo",
      subtitle: "Mobile Recipe App",
      category: "02 / MOBILE APP",
      tagline: "Cocina algo Riquisimo con los alimentos que ya tienes",
      coverBg: "url('./assets/logoRiquisssimo.png')",
      iconName: "wallet",
      color: "#10B981",
      description: "Riquisssimo esta hecho par los que tiene hambre, los que tienen antojo, para los que no saben que cocinar pero tiene un par de cosas en la refrigeradora. Usualmente las aplicaciones de cocina funcionan diciéndole al usuario que comprar para hacer cierta receta, Riquisssimo en cambio te dice que recetas puedes hacer basado en lo que ya tienes o los ingredientes que quieras usar",
      bullets: [
        "Integración con la API de Google Gemini",
        "Prompt internto eficiente para crear un balance entre proponer buenas recetas y la velocidad con las que son propuestas ",
        "Instrucciones de preparación muy claros con los detalles de la dificultad y el tiempo empleado para cocinar"
      ],
      techStack: ["Flutter", "Dart", "Gemini API"],
      links: [
      /*  { label: "Sitio Web", url: "#", primary: true, icon: "external-link" },
        { label: "Descargar App", url: "#", primary: false, icon: "external-link" } */
      ]
    },
    /*
    {
      id: "bubu",
      title: "Bubu",
      subtitle: "Mobile Social App",
      category: "03 / MOBILE APP",
      tagline: "Administración financiera de alto rendimiento para escritorio.",
      coverBg: "url('./assets/logoBubu.png')",
      iconName: "wallet",
      color: "#10B981",
      description: "Haba es una aplicación nativa de escritorio diseñada y lanzada al mercado para ayudar a las personas a tomar el control absoluto de sus finanzas personales.",
      bullets: [
        "Lanzada al mercado de forma independiente con un pipeline estable.",
        "Base de datos optimizada localmente para garantizar privacidad.",
        "Visualizaciones dinámicas y gráficos interactivos."
      ],
      techStack: ["React", "TypeScript", "OnGrok"],
      links: [
        { label: "Sitio Web", url: "#", primary: true, icon: "external-link" },
        { label: "Descargar App", url: "#", primary: false, icon: "external-link" }
      ]
    }, */
    {
      id: "kiwi",
      title: "Kiwi",
      subtitle: "Desktop Office Automation App",
      category: "03 / DESKTOP APP",
      tagline: "Consolidar archivos Excels de forma rapida, sencilla y comoda ",
      coverBg: "url('./assets/logoKiwi.png')",
      iconName: "wallet",
      color: "#10B981",
      description: "Kiwi es una aplicación amigable que te ayuda a consolidar todos los archivos excel que quieras aplicando los filtros de columnas o registros que desees.",
      bullets: [
        "Optimizada con Polars para no consumir tantos recursos en procesamientos grandes",
        "Automatiza una tarea altamente repetitiva en interfaz altamente amigable y funcional",
        "Selección de todos los archivos excel que se necesiten, además de la opción de aplicar filtros de columnas y/o registros para la consolidación"
      ],
      techStack: ["Electron", "Python", "Polars", "Node", "JavaScript ES6"],
      links: [
        /* { label: "Sitio Web", url: "#", primary: true, icon: "external-link" },
        { label: "Descargar App", url: "#", primary: false, icon: "external-link" } */
      ]
    },
    // Nota: Por brevedad en la respuesta, puedes pegar aquí el resto de tus objetos Riquisssimo, Skills y Contacto exactamente igual que en tu archivo original.
];

// 2. Estado Global
let activeIndex = 0;
let theme = localStorage.getItem("alvaro-portfolio-theme") || "dirty";

// 3. Selectores del DOM
const carouselTrack = document.getElementById('carousel-track');
const paginationDots = document.getElementById('pagination-dots');
const ambientGlow = document.getElementById('ambient-glow');
const body = document.getElementById('app-body');
const header = document.getElementById('main-header');
const footer = document.getElementById('main-footer');

// 4. Renderizado del Carrusel 3D
function renderCarousel() {
    carouselTrack.innerHTML = '';
    paginationDots.innerHTML = '';

    // Actualizar Glow
    ambientGlow.style.background = portfolioProjects[activeIndex]?.color || "#FFD73B";

    portfolioProjects.forEach((project, index) => {
        const offset = index - activeIndex;
        const absOffset = Math.abs(offset);
        const isCenter = index === activeIndex;

        // Matemáticas 3D extraídas de tu código React
        const xTranslation = offset * 140 + (offset > 0 ? 60 : offset < 0 ? -60 : 0);
        const zTranslation = -150 * absOffset;
        const rotationY = offset > 0 ? -45 : offset < 0 ? 45 : 0;
        const opacityValue = absOffset === 0 ? 1 : absOffset === 1 ? 0.7 : absOffset === 2 ? 0.4 : 0.15;
        const scaleValue = isCenter ? 1.05 : 0.85;
        const zIndex = 50 - absOffset;

        // Estilos condicionales por tema
        const isDirty = theme === 'dirty';
        const borderColor = isCenter ? (isDirty ? "border-white/50 ring-4 ring-white/10" : "border-[#FFD73B] ring-4 ring-[#FFD73B]/20") : "border-transparent";
        const titleColor = isDirty ? "text-white" : "text-[#FFD73B]";

        // Crear la carta
        const card = document.createElement('div');
        card.className = `card-3d absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] cursor-pointer group rounded-xl shadow-2xl overflow-visible flex flex-col items-center justify-end`;
        card.style.transform = `translateX(${xTranslation}px) translateZ(${zTranslation}px) rotateY(${rotationY}deg) scale(${scaleValue})`;
        card.style.opacity = opacityValue;
        card.style.zIndex = zIndex;

        card.innerHTML = `
            <div class="absolute -top-12 left-0 right-0 text-center transition-all duration-300 pointer-events-none ${isCenter ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}">
                <span class="text-xs uppercase tracking-[0.25em] font-medium block mb-1 ${isDirty ? 'text-white/60' : 'text-[#FFD73B]/70'}">${project.category}</span>
                <h3 class="text-xl md:text-2xl font-bold font-sans uppercase tracking-widest ${titleColor}" style="text-shadow: ${!isDirty ? '1px 1px 0px rgba(0,0,0,0.15)' : 'none'}">${project.title}</h3>
            </div>
            <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border-2 ${borderColor}" style="background: ${project.coverBg}; background-size: cover; background-position: center; background-repeat: no-repeat;">
            </div>
        `;

        card.onclick = () => {
            if (isCenter) openModal(project);
            else {
                activeIndex = index;
                renderCarousel();
            }
        };

        carouselTrack.appendChild(card);

        // Crear Puntos de Paginación
        const dot = document.createElement('button');
        dot.className = `h-2.5 rounded-full transition-all duration-300 ${
            isCenter 
                ? (isDirty ? "w-8 bg-white" : "w-8 bg-[#FFD73B]") 
                : (isDirty ? "w-2.5 bg-white/20 hover:bg-white/50" : "w-2.5 bg-[#FFD73B]/30 hover:bg-[#FFD73B]/60")
        }`;
        dot.onclick = () => { activeIndex = index; renderCarousel(); };
        paginationDots.appendChild(dot);
    });

    lucide.createIcons(); // Renderizar iconos recién insertados
}

// 5. Manejo del Modal (ProjectDetails)
const modal = document.getElementById('project-modal');
const modalInner = document.getElementById('modal-inner');
const modalRibbon = document.getElementById('modal-ribbon');

function openModal(project) {
    const isDirty = theme === 'dirty';
    
    modalRibbon.style.background = `linear-gradient(90deg, transparent, ${project.color}, transparent)`;
    
    // Inyectar HTML del detalle del proyecto respetando tu estructura original
    modalInner.innerHTML = `
        <div class="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
            <div>
                <span class="text-[10px] font-mono tracking-widest block uppercase ${isDirty ? "text-white/50" : "text-stone-400"}">${project.category}</span>
                <h2 class="text-2xl md:text-3xl font-extrabold uppercase font-sans tracking-wide" style="color: ${isDirty ? 'inherit' : '#FFD73B'}">${project.title}</h2>
                <p class="text-sm italic font-medium ${isDirty ? "text-white/60" : "text-stone-500"}">${project.subtitle}</p>
            </div>
            <button onclick="closeModal()" class="p-1.5 rounded-full hover:bg-black/10 transition-colors ${isDirty ? 'text-white/70 hover:text-white' : 'text-stone-400 hover:text-stone-700'}">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>
        </div>

        <div class="space-y-4 mb-6">
            <p class="text-base font-bold font-sans tracking-wide leading-snug ${isDirty ? "text-amber-200/90" : "text-amber-600"}">"${project.tagline}"</p>
            <p class="text-sm leading-relaxed ${isDirty ? "text-white/90" : "text-stone-700"}">${project.description}</p>
        </div>

        <div class="space-y-3 mb-6">
            <span class="text-[10px] font-mono opacity-60 block border-b border-white/5 pb-1">PUNTOS CLAVE / LOGROS:</span>
            <ul class="space-y-2 text-xs leading-relaxed">
                ${project.bullets.map(b => `
                    <li class="flex gap-2 items-start">
                        <span class="p-0.5 rounded-full mt-0.5 ${isDirty ? "bg-amber-400/20 text-amber-200" : "bg-amber-100 text-amber-700"}"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>
                        <span class="${isDirty ? "text-white/90" : "text-stone-700"}">${b}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="mb-6">
            <span class="text-[10px] font-mono opacity-60 block mb-2 uppercase">Tecnologías Clave:</span>
            <div class="flex flex-wrap gap-1.5">
                ${project.techStack.map(tech => `
                    <span class="text-[10px] font-mono px-2 py-1 rounded transition-colors ${isDirty ? "bg-stone-800 text-stone-300" : "bg-stone-100 text-stone-700"}">${tech}</span>
                `).join('')}
            </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2 border-t border-white/10 pt-4 mt-auto">
            ${project.links.map(link => `
                <a href="${link.url}" target="_blank" class="flex-1 py-2.5 rounded-lg text-xs font-mono uppercase tracking-widest text-center flex items-center justify-center gap-1.5 transition-all ${link.primary ? (isDirty ? 'bg-white text-[#74534D] hover:bg-stone-100 font-semibold' : 'bg-[#FFD73B] text-black hover:bg-[#ffd11a] font-semibold') : (isDirty ? 'bg-stone-800/80 text-white border border-stone-700 hover:bg-stone-700' : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50')}">
                    <i data-lucide="${link.icon}" class="w-4 h-4"></i> ${link.label}
                </a>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('modal-active');
    lucide.createIcons();
}

function closeModal() {
    modal.classList.remove('modal-active');
}

// Cerrar modal al hacer click en el fondo oscuro
document.getElementById('modal-backdrop').addEventListener('click', closeModal);

// 6. Controles y Eventos Globales
document.getElementById('btn-prev').addEventListener('click', () => {
    if(activeIndex > 0) { activeIndex--; renderCarousel(); }
});
document.getElementById('btn-next').addEventListener('click', () => {
    if(activeIndex < portfolioProjects.length - 1) { activeIndex++; renderCarousel(); }
});
window.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft" && activeIndex > 0) { activeIndex--; renderCarousel(); }
    if (e.key === "ArrowRight" && activeIndex < portfolioProjects.length - 1) { activeIndex++; renderCarousel(); }
    if (e.key === "Escape") { closeModal(); }
});

// 7. Sistema de Temas (Dirty / Clean)
function applyTheme() {
    const isDirty = theme === 'dirty';
    
    // Configuración general del body
    body.className = `min-h-screen flex flex-col justify-between overflow-x-hidden relative transition-colors duration-700 font-sans ${isDirty ? "bg-[#74534D] text-white" : "bg-white text-stone-900"}`;
    header.className = `w-full py-6 px-8 border-b z-40 backdrop-blur-sm relative transition-colors duration-500 ${isDirty ? "border-white/10" : "border-stone-200"}`;
    footer.className = `w-full py-6 px-8 border-t z-40 relative text-center md:text-left transition-colors duration-500 ${isDirty ? "border-white/10" : "border-stone-200"}`;
    
    // Título y Logo
    document.getElementById('logo-text').className = `text-sm font-bold font-mono tracking-widest transition-colors ${isDirty ? "text-white" : "text-black"}`;
    document.getElementById('main-title').className = `text-sm md:text-base font-extrabold font-sans uppercase tracking-[0.3em] leading-tight select-none transition-colors duration-500 ${isDirty ? "text-white" : "text-[#FFD73B]"}`;
    document.getElementById('main-title').style.textShadow = !isDirty ? "1px 1px 0px rgba(0,0,0,0.1)" : "none";

    // Botones del Tema
    document.getElementById('btn-dirty').className = `px-3.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${isDirty ? "bg-white text-[#74534D] font-bold shadow-md scale-105" : "text-stone-400 hover:text-stone-600 bg-transparent"}`;
    document.getElementById('btn-clean').className = `px-3.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${!isDirty ? "bg-[#FFD73B] text-black font-extrabold shadow-md scale-105" : "text-white/50 hover:text-white bg-transparent"}`;

    // Links del Footer
    document.getElementById('footer-text').className = `text-xs font-mono tracking-widest transition-colors ${isDirty ? "text-white/60" : "text-stone-400"}`;
    const links = document.querySelectorAll('#footer-links a');
    links.forEach(link => {
        link.className = `text-xs font-mono tracking-wider transition-colors hover:underline ${isDirty ? "text-white/70 hover:text-white" : "text-stone-500 hover:text-black"}`;
    });

    // Fondo del Modal
    const modalContent = document.getElementById('modal-content');
    modalContent.className = `relative rounded-3xl p-6 md:p-8 border shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col justify-between w-[95%] max-h-[85vh] md:w-[40vw] md:h-[85vh] transition-all duration-500 transform scale-95 translate-y-8 ${isDirty ? "bg-[#4e332f] text-white border-white/10" : "bg-white text-stone-900 border-stone-200"}`;
    modalContent.style.boxShadow = !isDirty ? "0px 10px 40px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.03)" : "0 25px 60px -15px rgba(0,0,0,0.4)";

    renderCarousel();
}

document.getElementById('btn-dirty').addEventListener('click', () => { theme = 'dirty'; localStorage.setItem('alvaro-portfolio-theme', theme); applyTheme(); });
document.getElementById('btn-clean').addEventListener('click', () => { theme = 'clean'; localStorage.setItem('alvaro-portfolio-theme', theme); applyTheme(); });

// Inicialización
applyTheme();