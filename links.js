// ===== Datos compartidos (URLs, iconos) =====
const URLS = {
    app: "https://play.google.com/store/apps/details?id=com.volpcs.volptasksapp",
    spotify: "https://open.spotify.com/intl-es/artist/13FTmj2I6k1Cp0mE8f2nvO?si=wnLcuiNARVCcVZN-f3CS2A",
    apple: "https://music.apple.com/es/artist/volpsound/1885946987",
    youtube: "https://youtube.com/@volpsound",
    g1: "https://volpsound.gumroad.com/l/bdhtq",
    g2: "https://volpsound.gumroad.com/l/wnuwyt",
    g3: "https://volpsound.gumroad.com/l/mlkgtv"
};

const SOCIALS = [
    { nombre: "Spotify", url: URLS.spotify },
    { nombre: "Apple Music", url: URLS.apple },
    { nombre: "YouTube", url: URLS.youtube },
    { nombre: "Gumroad", url: "https://volpsound.gumroad.com" }
];

// ===== Textos por idioma =====
const T = {
    en: {
        tagline: "Clinical Sound Therapy, Soundscapes & Uncompressed WAV Audio",
        bio: "Precision frequencies and seamless uncompressed loops engineered for tinnitus relief, deep sleep, focus, and media production.",
        badges: ["🎧 Uncompressed WAV Audio", "🛡️ Secure Checkout (Gumroad / Google)", "📜 Royalty-Free License"],
        social: "Connect & listen to free samples",
        copy: "© 2026 VolpSound Audio. All rights reserved.",
        sec: ["📱 Official Application", "🎵 Streaming & Music Platforms", "🛒 Uncompressed WAV Audio Bundles (Gumroad)"],
        appTitle: "VolpSound Audio Generator (Android)",
        appDesc: "Create custom therapeutic frequencies, color noises, and ambient soundscapes directly from your mobile device on Google Play.",
        spDesc: "Stream our soundscapes and relaxation tracks continuously from anywhere.",
        amDesc: "Enjoy high-quality VolpSound audio directly on your Apple devices.",
        ytDesc: "Explore 11-hour sessions, extended loops, and official tracks on our main channel.",
        listen: "Listen", subscribe: "Subscribe", loops: "Loops", tracks: "Tracks",
        d1: "19 high-resolution WAV tracks with exact notch filters (4 kHz to 11 kHz) in pink and brown noise for targeted acoustic therapy.",
        d2: "12 seamless 60s WAV loops: deep brown, green, blue, pure white, violet noise, sine tones, and real-world ambiences.",
        d3: "9 extended 3.5-minute seamless tracks, ideal for YouTube video editing, podcasts, and continuous relaxation."
    },
    es: {
        tagline: "Terapia de Sonido Clínica, Paisajes Sonoros & Audio WAV",
        bio: "Frecuencias de precisión y bucles limpios sin compresión diseñados para el alivio del tinnitus, descanso profundo, enfoque y producción multimedia.",
        badges: ["🎧 Audio WAV Sin Compresión", "🛡️ Pago Seguro (Gumroad / Google)", "📜 Licencia Royalty-Free"],
        social: "Conecta y escucha muestras gratuitas",
        copy: "© 2026 VolpSound Audio. Todos los derechos reservados.",
        sec: ["📱 Aplicación Oficial", "🎵 Streaming y Plataformas Musicales", "🛒 Paquetes de Audio WAV Sin Compresión (Gumroad)"],
        appTitle: "Generador de Audio VolpSound (Android)",
        appDesc: "Crea tus propias frecuencias terapéuticas, ruidos de color y ambientes personalizados directamente desde tu dispositivo móvil en Google Play.",
        spDesc: "Escucha nuestros paisajes sonoros y pistas de relajación en streaming continuo.",
        amDesc: "Disfruta de la mejor calidad de audio de VolpSound directamente en tu dispositivo Apple.",
        ytDesc: "Explora los videos de 11 horas, loops extendidos y pistas oficiales en nuestro canal principal.",
        listen: "Escuchar", subscribe: "Suscribirse", loops: "Loops", tracks: "Pistas",
        d1: "19 pistas WAV de alta resolución con filtros de muesca exactos (4 kHz a 11 kHz) en ruido rosa y marrón para terapia acústica dirigida.",
        d2: "12 bucles perfectos de 60s en calidad WAV: ruido marrón profundo, verde, azul, blanco puro, violeta, tonos sinusoidales y ambientes reales.",
        d3: "9 pistas extendidas de 3.5 minutos sin cortes abruptos, ideales para edición de video en YouTube, podcasts y relajación continua."
    },
    de: {
        tagline: "Klinische Klangtherapie, Klanglandschaften & Unkomprimiertes WAV-Audio",
        bio: "Präzisionsfrequenzen und nahtlose unkomprimierte Loops zur Tinnitus-Linderung, für tiefen Schlaf, Fokus und Medienproduktion.",
        badges: ["🎧 Unkomprimiertes WAV-Audio", "🛡️ Sicherer Kauf (Gumroad / Google)", "📜 Lizenzfrei (Royalty-Free)"],
        social: "Verbinden & kostenlose Hörproben anhören",
        copy: "© 2026 VolpSound Audio. Alle Rechte vorbehalten.",
        sec: ["📱 Offizielle App", "🎵 Streaming & Musikplattformen", "🛒 Unkomprimierte WAV-Audiopakete (Gumroad)"],
        appTitle: "VolpSound Audio-Generator (Android)",
        appDesc: "Erstellen Sie therapeutische Frequenzen, Farbrauschen und Klangwelten direkt auf Ihrem Smartphone über Google Play.",
        spDesc: "Hören Sie unsere Klanglandschaften und Entspannungstracks im ununterbrochenen Stream.",
        amDesc: "Genießen Sie VolpSound in höchster Audioqualität direkt auf Ihren Apple-Geräten.",
        ytDesc: "Entdecken Sie 11-Stunden-Sitzungen und offizielle Tracks auf unserem Hauptkanal.",
        listen: "Anhören", subscribe: "Abonnieren", loops: "Loops", tracks: "Tracks",
        d1: "19 hochauflösende WAV-Tracks mit exakten Kerbfiltern (4 kHz bis 11 kHz) in Rosa- und Braunrauschen zur gezielten Therapie.",
        d2: "12 nahtlose 60s-WAV-Loops: Tiefes Braun-, Grün-, Blau-, Weiß-, Violett-Rauschen, Sinustöne und echte Umgebungsgeräusche.",
        d3: "9 erweiterte 3,5-Minuten-Tracks ohne harte Schnitte, ideal für Videobearbeitung, Podcasts und Entspannung."
    },
    fr: {
        tagline: "Thérapie Sonore Clinique, Paysages Sonores & Audio WAV Non Compressé",
        bio: "Fréquences de précision et boucles sans compression conçues pour le soulagement des acouphènes, le sommeil profond et la concentration.",
        badges: ["🎧 Audio WAV Non Compressé", "🛡️ Paiement Sécurisé (Gumroad / Google)", "📜 Licence Libre de Droits"],
        social: "Rejoignez-nous et écoutez des extraits gratuits",
        copy: "© 2026 VolpSound Audio. Tous droits réservés.",
        sec: ["📱 Application Officielle", "🎵 Streaming et Plateformes Musicales", "🛒 Packs Audio WAV Non Compressés (Gumroad)"],
        appTitle: "Générateur Audio VolpSound (Android)",
        appDesc: "Créez vos propres fréquences thérapeutiques et bruits colorés directement depuis votre mobile sur Google Play.",
        spDesc: "Écoutez nos paysages sonores et pistes de relaxation en streaming continu.",
        amDesc: "Profitez de la qualité audio optimale de VolpSound sur vos appareils Apple.",
        ytDesc: "Explorez nos sessions de 11 heures et nos pistes officielles sur notre chaîne principale.",
        listen: "Écouter", subscribe: "S'abonner", loops: "Boucles", tracks: "Pistes",
        d1: "19 pistes WAV haute résolution avec filtres coupe-bande précis (4 kHz à 11 kHz) pour soulager les acouphènes.",
        d2: "12 boucles WAV parfaites de 60s : bruits brun, vert, bleu, blanc pur, violet, ondes sinusoïdales et ambiances.",
        d3: "9 pistes étendues de 3,5 minutes sans coupure, idéales pour le montage vidéo, les podcasts et la détente."
    },
    it: {
        tagline: "Terapia del Suono Clinica, Paesaggi Sonori & Audio WAV Non Compresso",
        bio: "Frequenze di precisione e loop continui senza compressione progettati per il sollievo dall'acufene, il sonno profondo e la concentrazione.",
        badges: ["🎧 Audio WAV Non Compresso", "🛡️ Pagamento Sicuro (Gumroad / Google)", "📜 Licenza Royalty-Free"],
        social: "Connettiti e ascolta campioni gratuiti",
        copy: "© 2026 VolpSound Audio. Tutti i diritti riservati.",
        sec: ["📱 Applicazione Ufficiale", "🎵 Streaming e Piattaforme Musicali", "🛒 Pacchetti Audio WAV Non Compressi (Gumroad)"],
        appTitle: "Generatore Audio VolpSound (Android)",
        appDesc: "Crea frequenze terapeutiche personalizzate, rumori colorati e ambienti sonori dal tuo dispositivo su Google Play.",
        spDesc: "Ascolta i nostri paesaggi sonori e tracce rilassanti in streaming continuo.",
        amDesc: "Goditi la massima qualità audio di VolpSound direttamente sui tuoi dispositivi Apple.",
        ytDesc: "Esplora sessioni da 11 ore e tracce ufficiali sul nostro canale principale.",
        listen: "Ascolta", subscribe: "Iscriviti", loops: "Loop", tracks: "Tracce",
        d1: "19 tracce WAV ad alta risoluzione con filtri notch esatti (da 4 kHz a 11 kHz) per terapia acustica mirata.",
        d2: "12 loop WAV perfetti da 60s: rumore marrone profondo, verde, blu, bianco puro, viola, toni sinusoidali e ambienti reali.",
        d3: "9 tracce estese da 3,5 minuti senza tagli bruschi, ideali per montaggio video, podcast e relax continuo."
    },
    pt: {
        tagline: "Terapia Sonora Clínica, Paisagens Sonoras & Áudio WAV Sem Compressão",
        bio: "Frequências de precisão e loops contínuos sem compressão, criados para o alívio do zumbido, sono profundo, foco e produção de mídia.",
        badges: ["🎧 Áudio WAV Sem Compressão", "🛡️ Pagamento Seguro (Gumroad / Google)", "📜 Licença Royalty-Free"],
        social: "Conecte-se e ouça amostras gratuitas",
        copy: "© 2026 VolpSound Audio. Todos os direitos reservados.",
        sec: ["📱 Aplicativo Oficial", "🎵 Streaming e Plataformas de Música", "🛒 Pacotes de Áudio WAV Sem Compressão (Gumroad)"],
        appTitle: "Gerador de Áudio VolpSound (Android)",
        appDesc: "Crie frequências terapêuticas, ruídos coloridos e ambientes sonoros personalizados direto do seu celular no Google Play.",
        spDesc: "Ouça nossas paisagens sonoras e faixas de relaxamento em streaming contínuo.",
        amDesc: "Aproveite o áudio de alta qualidade da VolpSound diretamente nos seus dispositivos Apple.",
        ytDesc: "Explore sessões de 11 horas, loops estendidos e faixas oficiais no nosso canal principal.",
        listen: "Ouvir", subscribe: "Inscrever-se", loops: "Loops", tracks: "Faixas",
        d1: "19 faixas WAV em alta resolução com filtros notch exatos (4 kHz a 11 kHz) em ruído rosa e marrom para terapia acústica direcionada.",
        d2: "12 loops WAV perfeitos de 60s: ruído marrom profundo, verde, azul, branco puro, violeta, tons senoidais e ambientes reais.",
        d3: "9 faixas estendidas de 3,5 minutos sem cortes bruscos, ideais para edição de vídeo, podcasts e relaxamento contínuo."
    },
    ja: {
        tagline: "臨床サウンドセラピー、サウンドスケープ＆非圧縮WAVオーディオ",
        bio: "耳鳴りの緩和、深い睡眠、集中、メディア制作のために設計された、高精度の周波数とシームレスな非圧縮ループ。",
        badges: ["🎧 非圧縮WAVオーディオ", "🛡️ 安全な決済 (Gumroad / Google)", "📜 ロイヤリティフリーライセンス"],
        social: "つながって無料サンプルを聴く",
        copy: "© 2026 VolpSound Audio. All rights reserved.",
        sec: ["📱 公式アプリ", "🎵 ストリーミング＆音楽プラットフォーム", "🛒 非圧縮WAVオーディオバンドル (Gumroad)"],
        appTitle: "VolpSound オーディオジェネレーター (Android)",
        appDesc: "Google Playから、治療用周波数、カラーノイズ、アンビエントサウンドをスマートフォンで自由に作成できます。",
        spDesc: "サウンドスケープとリラックストラックをいつでもどこでもストリーミング。",
        amDesc: "VolpSoundの高音質オーディオをApple端末で楽しめます。",
        ytDesc: "11時間セッション、拡張ループ、公式トラックをメインチャンネルでご覧ください。",
        listen: "聴く", subscribe: "登録", loops: "ループ", tracks: "トラック",
        d1: "ピンクノイズとブラウンノイズに正確なノッチフィルター(4kHz〜11kHz)を適用した、19曲の高解像度WAVトラック。",
        d2: "ブラウン、グリーン、ブルー、ホワイト、バイオレットノイズ、サイン波、環境音を収録した60秒のシームレスWAVループ12点。",
        d3: "YouTube動画編集、ポッドキャスト、リラックスに最適な、3.5分のシームレス拡張トラック9点。"
    },
    ko: {
        tagline: "임상 사운드 테라피, 사운드스케이프 & 무손실 WAV 오디오",
        bio: "이명 완화, 깊은 수면, 집중, 미디어 제작을 위해 설계된 정밀 주파수와 끊김 없는 무압축 루프.",
        badges: ["🎧 무압축 WAV 오디오", "🛡️ 안전 결제 (Gumroad / Google)", "📜 로열티 프리 라이선스"],
        social: "연결하고 무료 샘플 들어보기",
        copy: "© 2026 VolpSound Audio. All rights reserved.",
        sec: ["📱 공식 앱", "🎵 스트리밍 & 음악 플랫폼", "🛒 무압축 WAV 오디오 번들 (Gumroad)"],
        appTitle: "VolpSound 오디오 제너레이터 (Android)",
        appDesc: "Google Play에서 치료용 주파수, 컬러 노이즈, 앰비언트 사운드를 스마트폰으로 직접 만들어 보세요.",
        spDesc: "사운드스케이프와 휴식 트랙을 언제 어디서나 스트리밍으로 들어보세요.",
        amDesc: "VolpSound의 고음질 오디오를 Apple 기기에서 즐기세요.",
        ytDesc: "11시간 세션, 확장 루프, 공식 트랙을 메인 채널에서 만나보세요.",
        listen: "듣기", subscribe: "구독", loops: "루프", tracks: "트랙",
        d1: "핑크 및 브라운 노이즈에 정확한 노치 필터(4kHz~11kHz)를 적용한 19개의 고해상도 WAV 트랙.",
        d2: "브라운, 그린, 블루, 화이트, 바이올렛 노이즈, 사인파, 실제 환경음을 담은 60초 심리스 WAV 루프 12개.",
        d3: "YouTube 영상 편집, 팟캐스트, 지속적인 휴식에 이상적인 3.5분 확장 트랙 9개."
    }
};

// ===== Construcción de las secciones =====
function buildCategorias(t) {
    return [
        {
            titulo: t.sec[0],
            items: [
                { titulo: t.appTitle, desc: t.appDesc, url: URLS.app, tag: "Google Play", icon: "🎛️", featured: true }
            ]
        },
        {
            titulo: t.sec[1],
            items: [
                { titulo: "Spotify", desc: t.spDesc, url: URLS.spotify, tag: t.listen, icon: "🟢" },
                { titulo: "Apple Music", desc: t.amDesc, url: URLS.apple, tag: t.listen, icon: "🍎" },
                { titulo: "YouTube / YouTube Music", desc: t.ytDesc, url: URLS.youtube, tag: t.subscribe, icon: "📺" }
            ]
        },
        {
            titulo: t.sec[2],
            items: [
                { titulo: "Clinical Notched Sound Therapy Bundle (Tinnitus Relief)", desc: t.d1, url: URLS.g1, tag: "$19 USD • 19 " + t.loops, icon: "🩺", featured: true },
                { titulo: "Ultimate Ambient, Sleep & Color Noise Pack", desc: t.d2, url: URLS.g2, tag: "$14 USD • 12 " + t.loops, icon: "🌙" },
                { titulo: "Extended Ambient & Sleep Soundscapes (3.5 Min)", desc: t.d3, url: URLS.g3, tag: "$16 USD • 9 " + t.tracks, icon: "🎬" }
            ]
        }
    ];
}

// ===== Render =====
function el(tag, className, text) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
}

function render(lang) {
    const t = T[lang] || T.en;
    document.documentElement.lang = lang;

    document.getElementById("ui-tagline").textContent = t.tagline;
    document.getElementById("ui-bio").textContent = t.bio;
    document.getElementById("ui-social-title").textContent = t.social;
    document.getElementById("ui-copyright").textContent = t.copy;

    const badges = document.getElementById("trust-badges-container");
    badges.innerHTML = "";
    t.badges.forEach(b => badges.appendChild(el("span", "badge", b)));

    const cont = document.getElementById("links-container");
    cont.innerHTML = "";
    buildCategorias(t).forEach(cat => {
        const section = el("section", "category-section");
        section.appendChild(el("h2", "category-title", cat.titulo));
        const grid = el("div", "cards-grid");

        cat.items.forEach(item => {
            const a = el("a", "link-card" + (item.featured ? " featured" : ""));
            a.href = item.url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            a.appendChild(el("div", "card-icon", item.icon));

            const content = el("div", "card-content");
            const header = el("div", "card-header");
            header.appendChild(el("span", "card-title", item.titulo));
            header.appendChild(el("span", "card-tag", item.tag));
            content.appendChild(header);
            content.appendChild(el("p", "card-desc", item.desc));
            a.appendChild(content);

            grid.appendChild(a);
        });

        section.appendChild(grid);
        cont.appendChild(section);
    });

    const social = document.getElementById("social-container");
    social.innerHTML = "";
    SOCIALS.forEach(s => {
        const a = el("a", "social-btn", s.nombre);
        a.href = s.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        social.appendChild(a);
    });
}

// ===== Inicio =====
(function init() {
    const selector = document.getElementById("language-selector");
    const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    const initial = T[browserLang] ? browserLang : "en";

    selector.value = initial;
    render(initial);

    selector.addEventListener("change", e => render(e.target.value));
})();