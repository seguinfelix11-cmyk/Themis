// Themis — site interactions: language toggle, mobile nav, footer year.

const translations = {
  fr: {
    tagline: "Préparation LSAT et révision dossier d'admission",
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_pricing: "Tarifs",
    nav_booking: "Rendez-vous",

    hero_eyebrow: "Préparation LSAT et révision dossier d'admission",
    hero_title: "Réussissez votre admission en droit avec Themis",
    hero_sub: "Préparation au LSAT, révision de CV et de personal statement — un accompagnement personnalisé pour donner à votre candidature les meilleures chances.",
    hero_cta_primary: "Prendre rendez-vous",
    hero_cta_secondary: "Voir les tarifs",

    about_eyebrow: "À propos",
    about_title: "Un accompagnement dédié à votre réussite",
    about_p1: "Themis a été fondé par deux étudiant·e·s en droit de l'Université McGill avec une mission simple : rendre le parcours vers les études de droit plus accessible. Nous offrons du tutorat LSAT abordable ainsi qu'un accompagnement pour les demandes d'admission en droit, incluant la révision de CV et de personal statement, afin d'aider les futur·e·s étudiant·e·s en droit à naviguer le processus d'admission.",
    about_p2: "En tant qu'étudiant·e·s en droit de première génération, nous comprenons les défis que représente la poursuite d'études en droit sans accès à des services de consultation en admission coûteux, et nous nous engageons à offrir un accompagnement de grande qualité et abordable à celles et ceux qui en ont le plus besoin.",
    about_point1: "Préparation LSAT structurée et stratégique",
    about_point2: "Révision approfondie du personal statement",
    about_point3: "Optimisation du CV et du dossier",

    services_eyebrow: "Services",
    services_title: "Nos services",
    services_lead: "Un accompagnement complet, de la préparation à l'examen jusqu'à la soumission de votre dossier.",
    service1_title: "Préparation LSAT",
    service1_desc: "Tutorat personnalisé pour maîtriser la logique, la compréhension de lecture et le raisonnement analytique.",
    service2_title: "Personal Statement",
    service2_desc: "Brainstorming, structuration et révision pour un essai personnel percutant et authentique.",
    service3_title: "Révision de CV",
    service3_desc: "Optimisation de votre CV pour valoriser vos expériences et votre parcours académique.",

    pricing_eyebrow: "Tarifs",
    pricing_title: "Grille tarifaire",
    pricing_lead: "Des formules flexibles adaptées à vos besoins et à votre budget.",
    pricing_badge_free: "Gratuit",
    pricing_badge_popular: "Populaire",
    pricing_badge_best: "Tout inclus",
    price1_title: "Appel-consultation de 15 minutes",
    price1_amount: "Gratuit",
    price1_desc: "Un premier échange pour cerner vos besoins et objectifs.",
    price2_title: "Tutorat LSAT",
    price2_unit: "/heure",
    price2_desc: "Séances de tutorat individuel adaptées à votre niveau.",
    price3_title: "Rencontre de 30 minutes",
    price3_desc: "Une rencontre ciblée pour discuter d'un point précis.",
    price4_title: "Forfait révision",
    price4_desc: "2 révisions + une rencontre de 30 minutes.",
    price5_title: "Forfait brainstorming",
    price5_desc: "1 séance de brainstorming (deux rencontres de 30 minutes) + 2 révisions.",
    price6_title: "Forfait tout inclus",
    price6_desc: "Brainstorming + préparation LSAT (5 heures) + 2 révisions.",

    booking_eyebrow: "Rendez-vous",
    booking_title: "Prendre rendez-vous",
    booking_lead: "Réservez votre créneau directement en ligne via Calendly.",
    booking_placeholder: "Le calendrier en ligne sera bientôt disponible. En attendant, écrivez-nous par courriel.",
    booking_fallback: "Le calendrier ne s'affiche pas ? Écrivez-nous directement :",

    footer_tagline: "Préparation LSAT et révision dossier d'admission",
    footer_contact_label: "Contact",
    footer_rights: "Tous droits réservés."
  },
  en: {
    tagline: "LSAT prep and application review",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_booking: "Booking",

    hero_eyebrow: "LSAT prep and application review",
    hero_title: "Succeed in your law school application with Themis",
    hero_sub: "LSAT preparation, CV and personal statement review — personalized guidance to give your application the strongest possible chance.",
    hero_cta_primary: "Book a call",
    hero_cta_secondary: "View pricing",

    about_eyebrow: "About",
    about_title: "Guidance dedicated to your success",
    about_p1: "Themis was founded by two McGill law students with a simple mission: to make the path to law school more accessible. We offer affordable LSAT tutoring and law school application support, including CV and personal statement reviews, to help aspiring law students navigate the admissions process.",
    about_p2: "As first-generation law students ourselves, we understand the challenges of pursuing law without access to expensive admissions consulting, and we're committed to providing high-quality, cost-effective guidance to those who need it most.",
    about_point1: "Structured, strategic LSAT preparation",
    about_point2: "In-depth personal statement review",
    about_point3: "CV and application file optimization",

    services_eyebrow: "Services",
    services_title: "Our services",
    services_lead: "Comprehensive support, from exam preparation to submitting your application.",
    service1_title: "LSAT Preparation",
    service1_desc: "Personalized tutoring to master logic games, reading comprehension, and analytical reasoning.",
    service2_title: "Personal Statement",
    service2_desc: "Brainstorming, structuring, and reviewing for a compelling, authentic personal essay.",
    service3_title: "CV Review",
    service3_desc: "Optimizing your CV to showcase your experience and academic background.",

    pricing_eyebrow: "Pricing",
    pricing_title: "Pricing",
    pricing_lead: "Flexible packages tailored to your needs and budget.",
    pricing_badge_free: "Free",
    pricing_badge_popular: "Popular",
    pricing_badge_best: "All-inclusive",
    price1_title: "Free 15-minute consultation call",
    price1_amount: "Free",
    price1_desc: "A first conversation to understand your needs and goals.",
    price2_title: "LSAT tutoring",
    price2_unit: "/hour",
    price2_desc: "One-on-one tutoring sessions tailored to your level.",
    price3_title: "30-minute meeting",
    price3_desc: "A focused meeting to discuss a specific point.",
    price4_title: "Review package",
    price4_desc: "2 reviews + one 30-minute meeting.",
    price5_title: "Brainstorming package",
    price5_desc: "1 brainstorming session (two 30-minute meetings) + 2 reviews.",
    price6_title: "All-inclusive package",
    price6_desc: "Brainstorming + LSAT prep (5 hours) + 2 reviews.",

    booking_eyebrow: "Booking",
    booking_title: "Book an appointment",
    booking_lead: "Reserve your slot online directly through Calendly.",
    booking_placeholder: "Online booking is coming soon. In the meantime, reach out by email.",
    booking_fallback: "Calendar not showing? Email us directly:",

    footer_tagline: "LSAT prep and application review",
    footer_contact_label: "Contact",
    footer_rights: "All rights reserved."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.fr;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  try { localStorage.setItem("themis-lang", lang); } catch (e) { /* ignore */ }
}

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language toggle
  let initial = "fr";
  try {
    const saved = localStorage.getItem("themis-lang");
    if (saved && translations[saved]) initial = saved;
  } catch (e) { /* ignore */ }
  setLanguage(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Mobile nav
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Calendly: only load the widget when a real https:// URL is configured,
  // otherwise keep the placeholder message (avoids rendering a 404 iframe).
  const cal = document.getElementById("calendly-widget");
  if (cal) {
    const url = cal.getAttribute("data-calendly-url");
    const isReal = url && url !== "CALENDLY_PLACEHOLDER" && /^https:\/\//.test(url);
    if (isReal) {
      cal.classList.remove("calendly-placeholder");
      cal.classList.add("calendly-inline-widget");
      cal.setAttribute("data-url", url);
      cal.style.height = "660px";
      cal.textContent = "";
      const init = () => {
        if (window.Calendly && typeof window.Calendly.initInlineWidget === "function") {
          window.Calendly.initInlineWidget({ url, parentElement: cal });
          return true;
        }
        return false;
      };
      if (!init()) {
        let tries = 0;
        const timer = setInterval(() => {
          if (init() || ++tries > 40) clearInterval(timer);
        }, 250);
      }
    }
  }
});
