// --- Simple i18n dictionary ---
const t = {
    en: {
      title: "Stockholm: Tell Us What You Think",
      tagline: "Two quick questions for visitors and locals who’ve spent time here.",
      chooseLanguageLabel: "Choose language",
      formTitle: "Share your thoughts",
      qWorstLabel: "What do you think is the worst thing with Stockholm?",
      qWorstPlaceholder: "e.g., prices, weather, crowds…",
      qUnderratedLabel: "What is the most underrated thing about Stockholm?",
      qUnderratedPlaceholder: "e.g., islands, libraries, parks…",
      nameLabel: "First name (optional)",
      namePlaceholder: "Your name",
      countryLabel: "Country (optional)",
      countryPlaceholder: "e.g., Spain",
      submitBtn: "Submit your answer",
      requiredHint: "This question is required.",
      thanksNamed: "Thanks, {name}! Your thoughts were saved locally.",
      thanksAnon: "Thanks! Your thoughts were saved locally.",
      recentTitle: "Recent submissions",
      clearBtn: "Clear local data",
      itemBy: "by",
      itemFrom: "from",
      itemWorst: "Worst",
      itemUnderrated: "Most underrated",
      cleared: "Local data cleared.",
    },
    sv: {
      title: "Stockholm: Berätta vad du tycker",
      tagline: "Två snabba frågor till dig som vistats i Stockholm.",
      chooseLanguageLabel: "Välj språk",
      formTitle: "Dela dina tankar",
      qWorstLabel: "Vad tycker du är det sämsta med Stockholm?",
      qWorstPlaceholder: "t.ex. priser, väder, trängsel…",
      qUnderratedLabel: "Vad är mest underskattat med Stockholm?",
      qUnderratedPlaceholder: "t.ex. öarna, biblioteken, parker…",
      nameLabel: "Förnamn (valfritt)",
      namePlaceholder: "Ditt namn",
      countryLabel: "Land (valfritt)",
      countryPlaceholder: "t.ex. Spanien",
      submitBtn: "Skicka in",
      requiredHint: "Den här frågan är obligatorisk.",
      thanksNamed: "Tack, {name}! Dina svar sparades lokalt.",
      thanksAnon: "Tack! Dina svar sparades lokalt.",
      recentTitle: "Senaste svaren",
      clearBtn: "Rensa lokal data",
      itemBy: "av",
      itemFrom: "från",
      itemWorst: "Sämst",
      itemUnderrated: "Mest underskattat",
      cleared: "Lokal data rensad.",
    },
    es: {
      title: "Estocolmo: Cuéntanos qué piensas",
      tagline: "Dos preguntas rápidas para quienes han estado en la ciudad.",
      chooseLanguageLabel: "Elegir idioma",
      formTitle: "Comparte tu opinión",
      qWorstLabel: "¿Qué es lo peor de Estocolmo para ti?",
      qWorstPlaceholder: "p. ej., precios, clima, multitudes…",
      qUnderratedLabel: "¿Qué es lo más subestimado de Estocolmo?",
      qUnderratedPlaceholder: "p. ej., islas, bibliotecas, parques…",
      nameLabel: "Nombre (opcional)",
      namePlaceholder: "Tu nombre",
      countryLabel: "País (opcional)",
      countryPlaceholder: "p. ej., España",
      submitBtn: "Enviar",
      requiredHint: "Esta pregunta es obligatoria.",
      thanksNamed: "¡Gracias, {name}! Tus respuestas se guardaron localmente.",
      thanksAnon: "¡Gracias! Tus respuestas se guardaron localmente.",
      recentTitle: "Envíos recientes",
      clearBtn: "Borrar datos locales",
      itemBy: "por",
      itemFrom: "de",
      itemWorst: "Lo peor",
      itemUnderrated: "Infravalorado",
      cleared: "Datos locales borrados.",
    },
    de: {
      title: "Stockholm: Sag uns, was du denkst",
      tagline: "Zwei kurze Fragen an alle, die hier waren.",
      chooseLanguageLabel: "Sprache wählen",
      formTitle: "Teile deine Meinung",
      qWorstLabel: "Was ist für dich das Schlechteste an Stockholm?",
      qWorstPlaceholder: "z. B. Preise, Wetter, Menschenmengen…",
      qUnderratedLabel: "Was ist in Stockholm am meisten unterbewertet?",
      qUnderratedPlaceholder: "z. B. Inseln, Bibliotheken, Parks…",
      nameLabel: "Vorname (optional)",
      namePlaceholder: "Dein Name",
      countryLabel: "Land (optional)",
      countryPlaceholder: "z. B. Spanien",
      submitBtn: "Absenden",
      requiredHint: "Diese Frage ist erforderlich.",
      thanksNamed: "Danke, {name}! Deine Antworten wurden lokal gespeichert.",
      thanksAnon: "Danke! Deine Antworten wurden lokal gespeichert.",
      recentTitle: "Neueste Einsendungen",
      clearBtn: "Lokale Daten löschen",
      itemBy: "von",
      itemFrom: "aus",
      itemWorst: "Schlechtestes",
      itemUnderrated: "Unterbewertet",
      cleared: "Lokale Daten gelöscht.",
    },
    fr: {
      title: "Stockholm : dites-nous ce que vous en pensez",
      tagline: "Deux petites questions pour celles et ceux qui y ont séjourné.",
      chooseLanguageLabel: "Choisir la langue",
      formTitle: "Partagez votre avis",
      qWorstLabel: "Selon vous, quel est le pire côté de Stockholm ?",
      qWorstPlaceholder: "ex. prix, météo, foule…",
      qUnderratedLabel: "Qu’est-ce qui est le plus sous-estimé à Stockholm ?",
      qUnderratedPlaceholder: "ex. îles, bibliothèques, parcs…",
      nameLabel: "Prénom (facultatif)",
      namePlaceholder: "Votre prénom",
      countryLabel: "Pays (facultatif)",
      countryPlaceholder: "ex. Espagne",
      submitBtn: "Envoyer",
      requiredHint: "Cette question est obligatoire.",
      thanksNamed: "Merci, {name} ! Vos réponses ont été enregistrées localement.",
      thanksAnon: "Merci ! Vos réponses ont été enregistrées localement.",
      recentTitle: "Dernières contributions",
      clearBtn: "Effacer les données locales",
      itemBy: "par",
      itemFrom: "de",
      itemWorst: "Pire",
      itemUnderrated: "Sous-estimé",
      cleared: "Données locales effacées.",
    },
  };
  
  // --- DOM helpers ---
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  
  // --- DOM helpers ---
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

// Apply translations
function applyLanguage(lang){
  const dict = t[lang] || t.en;
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  $$("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
  document.documentElement.lang = lang;
}

// ==== RESULT PAGE ====
async function loadResponses() {
  const resultsContainer = document.getElementById("results");
  if (!resultsContainer) return; // inte på resultat.html

  try {
    const res = await fetch("/.netlify/functions/get-responses");
    if (!res.ok) throw new Error("Failed to fetch responses");
    const data = await res.json();

    if (data.length === 0) {
      resultsContainer.innerHTML = "<p>No responses yet.</p>";
      return;
    }

    resultsContainer.innerHTML = "";
    data.forEach((entry) => {
      const card = document.createElement("div");
      card.classList.add("response-card");

      card.innerHTML = `
        <p><strong>Name:</strong> ${entry.data.name || "-"}</p>
        <p><strong>Country:</strong> ${entry.data.country || "-"}</p>
        <p><strong>Worst thing:</strong> ${entry.data.worst || "-"}</p>
        <p><strong>Most underrated:</strong> ${entry.data.underrated || "-"}</p>
      `;

      resultsContainer.appendChild(card);
    });
  } catch (err) {
    resultsContainer.innerHTML = `<p class="error">Error loading responses: ${err.message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Language init
  const initialLang = localStorage.getItem("stockholmOpinions.lang") || "en";
  const langSelect = $("#lang-select");
  if (langSelect) {
    langSelect.value = initialLang;
    applyLanguage(initialLang);

    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("stockholmOpinions.lang", lang);
      applyLanguage(lang);
    });
  }

  // Load responses on results page
  loadResponses();
});