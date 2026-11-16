const ecosistemaVolpSound = [
    {
        categoria: "📱 Aplicación Oficial",
        items: [
            {
                titulo: "Generador de Audio VolpSound (Android)",
                descripcion: "Crea tus propias frecuencias terapéuticas, ruidos de color y ambientes personalizados directamente desde tu dispositivo móvil en Google Play.",
                url: "https://play.google.com/store/apps/details?id=com.volpcs.volptasksapp",
                etiqueta: "Google Play",
                icono: "🎛️",
                destacado: true
            }
        ]
    },
    {
        categoria: "🎵 Streaming y Plataformas Musicales",
        items: [
            {
                titulo: "Spotify",
                descripcion: "Escucha nuestros paisajes sonoros y pistas de relajación en streaming continuo.",
                url: "https://open.spotify.com/intl-es/artist/13FTmj2I6k1Cp0mE8f2nvO?si=wnLcuiNARVCcVZN-f3CS2A",
                etiqueta: "Escuchar",
                icono: "🟢",
                destacado: false
            },
            {
                titulo: "Apple Music",
                descripcion: "Disfruta de la mejor calidad de audio de VolpSound directamente en tu dispositivo Apple.",
                url: "https://music.apple.com/es/artist/volpsound/1885946987",
                etiqueta: "Escuchar",
                icono: "🍎",
                destacado: false
            },
            {
                titulo: "YouTube / YouTube Music",
                descripcion: "Explora los videos, loops extendidos y pistas oficiales en nuestro canal principal.",
                url: "https://youtube.com/@volpsound",
                etiqueta: "Suscribirse",
                icono: "📺",
                destacado: false
            }
        ]
    },
    {
        categoria: "🛒 Paquetes de Audio WAV Sin Compresión (Gumroad)",
        items: [
            {
                titulo: "Clinical Notched Sound Therapy Bundle (Tinnitus Relief)",
                descripcion: "19 pistas WAV de alta resolución con filtros de muesca exactos (4 kHz a 11 kHz) en ruido rosa y marrón para terapia acústica dirigida.",
                url: "https://volpsound.gumroad.com/l/bdhtq",
                etiqueta: "$19 USD • 19 Loops",
                icono: "🩺",
                destacado: true
            },
            {
                titulo: "Ultimate Ambient, Sleep & Color Noise Pack",
                descripcion: "12 bucles perfectos de 60s en calidad WAV: ruido marrón profundo, verde, azul, blanco puro, violeta, tonos sinusoidales y ambientes reales.",
                url: "https://volpsound.gumroad.com/l/wnuwyt",
                etiqueta: "$14 USD • 12 Loops",
                icono: "🌙",
                destacado: false
            },
            {
                titulo: "Extended Ambient & Sleep Soundscapes (3.5 Min)",
                descripcion: "9 pistas extendidas de 3.5 minutos sin cortes abruptos, ideales para edición de video en YouTube, podcasts y relajación continua.",
                url: "https://volpsound.gumroad.com/l/mlkgtv",
                etiqueta: "$16 USD • 9 Pistas",
                icono: "🎬",
                destacado: false
            }
        ]
    }
];

const redesSociales = [
    { nombre: "YouTube", url: "https://youtube.com/@volpsound" },
    { nombre: "TikTok", url: "https://tiktok.com/@volpsound" },
    { nombre: "Instagram", url: "https://instagram.com/volpsound/" },
    { nombre: "Facebook", url: "https://facebook.com/61588200543382/" }
];

// Renderizado automático al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const linksContainer = document.getElementById("links-container");
    const socialContainer = document.getElementById("social-container");

    ecosistemaVolpSound.forEach(grupo => {
        const section = document.createElement("section");
        section.className = "category-section";

        const title = document.createElement("h2");
        title.className = "category-title";
        title.textContent = grupo.categoria;
        section.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "cards-grid";

        grupo.items.forEach(item => {
            const card = document.createElement("a");
            card.href = item.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.className = `link-card ${item.destacado ? "featured" : ""}`;

            card.innerHTML = `
                <div class="card-icon">${item.icono}</div>
                <div class="card-content">
                    <div class="card-header">
                        <span class="card-title">${item.titulo}</span>
                        <span class="card-tag">${item.etiqueta}</span>
                    </div>
                    <p class="card-desc">${item.descripcion}</p>
                </div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        linksContainer.appendChild(section);
    });

    redesSociales.forEach(red => {
        const btn = document.createElement("a");
        btn.href = red.url;
        btn.target = "_blank";
        btn.rel = "noopener noreferrer";
        btn.className = "social-btn";
        btn.textContent = red.nombre;
        socialContainer.appendChild(btn);
    });
});
