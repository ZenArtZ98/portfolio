const translations = {
  en: {
    navProjects: "Projects", navExperience: "Experience", navSkills: "Skills", navContact: "Contact",
    heroEyebrow: "AI automation · Python backend · system analysis",
    heroTitle: "I turn unclear ideas into working, documented tools.",
    heroLead: "Developer with hands-on experience in APIs, bots, data processing, AI-assisted engineering and product specifications.",
    viewProjects: "View selected projects", contactMe: "Contact me",
    availability: "Open to remote, hybrid and contract opportunities",
    sinceDevelopment: "development since", teamMembers: "people in the Sophyte team", lifeosTests: "automated LifeOS tests", grant: "Student Startup grant",
    selectedWork: "Selected work", projectsTitle: "Projects that connect engineering with real needs.",
    lifeosDescription: "Personal operating system built around Markdown and YAML: Android client, local notifications, safe file operations and a Python bridge to Google Calendar.",
    lifeosPoint1: "Kotlin and Jetpack Compose Android application", lifeosPoint2: "Conflict detection, backups and atomic writes", lifeosPoint3: "38 unit tests and 2 instrumented tests", lifeosPoint4: "Developed with ChatGPT and Codex as engineering assistants",
    sophyteDescription: "A platform for the Russian-speaking game-development community. I lead a four-person team and work across product architecture, backend, requirements and delivery.",
    pingDescription: "Host-monitoring application with CRUD operations, CSV import/export and a containerized frontend/backend setup.",
    viewRepository: "View repository ↗", moderationDescription: "Early neural content-moderation prototype and hands-on experiments with training and fine-tuning object-detection models.",
    experienceEyebrow: "Experience", experienceTitle: "A developer who understands the product around the code.", experienceLead: "Commercial and project work since 2022, from integrations to team coordination.",
    sophyteRole: "Founder, Team Lead & Fullstack Developer", sophyteExperience: "Product decomposition, architecture, backend and frontend development, system-analysis artifacts and coordination of a four-person team.",
    freelanceRole: "Freelance Fullstack Developer", freelanceExperience: "Web applications, Telegram bots, parsers and integrations with Wildberries, Solscan and other external services.",
    autoritetRole: "Backend / Fullstack Developer", autoritetExperience: "FastAPI platform for Wildberries integration, product management and classification.",
    masters: "Master's degree in Media Communications", university: "University of Tyumen",
    skillsEyebrow: "Capabilities", skillsTitle: "A cross-functional toolkit with a technical core.",
    contactEyebrow: "Let's work together", contactTitle: "Have a useful problem to solve?", contactLead: "I am open to AI automation, Python backend, integration and junior system-analysis opportunities.",
    footerText: "Built as a living portfolio, not a finished archive."
  },
  ru: {
    navProjects: "Проекты", navExperience: "Опыт", navSkills: "Навыки", navContact: "Контакты",
    heroEyebrow: "AI-автоматизация · Python backend · системный анализ",
    heroTitle: "Превращаю неясные идеи в работающие и документированные инструменты.",
    heroLead: "Разработчик с практическим опытом API, ботов, обработки данных, AI-assisted разработки и проектирования продуктов.",
    viewProjects: "Посмотреть проекты", contactMe: "Связаться",
    availability: "Открыт к удалённой, гибридной и проектной работе",
    sinceDevelopment: "в разработке с", teamMembers: "человека в команде Sophyte", lifeosTests: "автоматизированных тестов LifeOS", grant: "грант «Студенческий стартап»",
    selectedWork: "Избранные работы", projectsTitle: "Проекты на пересечении технологий и реальных потребностей.",
    lifeosDescription: "Личная операционная система на Markdown и YAML: Android-клиент, локальные уведомления, безопасная работа с файлами и Python-мост к Google Calendar.",
    lifeosPoint1: "Android-приложение на Kotlin и Jetpack Compose", lifeosPoint2: "Обработка конфликтов, резервные копии и атомарная запись", lifeosPoint3: "38 unit-тестов и 2 инструментальных теста", lifeosPoint4: "Разработка с ChatGPT и Codex как инженерными ассистентами",
    sophyteDescription: "Платформа для русскоязычного геймдев-сообщества. Руководил командой из четырёх человек и работал с архитектурой, backend, требованиями и выпуском продукта.",
    pingDescription: "Приложение мониторинга хостов с CRUD, импортом и экспортом CSV и контейнеризированными frontend и backend.",
    viewRepository: "Открыть репозиторий ↗", moderationDescription: "Ранний прототип нейросетевой модерации и практические эксперименты с обучением и дообучением моделей детекции.",
    experienceEyebrow: "Опыт", experienceTitle: "Разработчик, который понимает продукт вокруг кода.", experienceLead: "Коммерческая и проектная работа с 2022 года: от интеграций до координации команды.",
    sophyteRole: "Основатель, Team Lead и Fullstack-разработчик", sophyteExperience: "Декомпозиция продукта, архитектура, backend и frontend, аналитические артефакты и координация команды из четырёх человек.",
    freelanceRole: "Фриланс Fullstack-разработчик", freelanceExperience: "Веб-приложения, Telegram-боты, парсеры и интеграции с Wildberries, Solscan и другими сервисами.",
    autoritetRole: "Backend / Fullstack-разработчик", autoritetExperience: "FastAPI-платформа для интеграции с Wildberries, управления товарами и классификации.",
    masters: "Магистратура по медиакоммуникациям", university: "Тюменский государственный университет",
    skillsEyebrow: "Компетенции", skillsTitle: "Междисциплинарный набор навыков с техническим ядром.",
    contactEyebrow: "Давайте работать вместе", contactTitle: "Есть полезная задача?", contactLead: "Рассматриваю позиции в AI-автоматизации, Python backend, интеграциях и системном анализе.",
    footerText: "Живое портфолио, которое развивается вместе с проектами."
  }
};

const languageToggle = document.querySelector(".language-toggle");
const activeLabel = document.querySelector("[data-lang-active]");
const inactiveLabel = document.querySelector("[data-lang-inactive]");
const themeToggle = document.querySelector(".theme-toggle");
let language = localStorage.getItem("portfolio-language") || "en";
let theme = localStorage.getItem("portfolio-theme") || "dark";

function applyLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language]?.[key]) element.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-en][data-ru]").forEach((element) => {
    element.textContent = element.dataset[language];
  });
  if (activeLabel) activeLabel.textContent = language.toUpperCase();
  if (inactiveLabel) inactiveLabel.textContent = language === "en" ? "RU" : "EN";
  if (languageToggle) {
    languageToggle.setAttribute("aria-label", language === "en" ? "Переключить на русский" : "Switch to English");
  }
  const terminalInput = document.querySelector("[data-terminal-input]");
  if (terminalInput) terminalInput.placeholder = language === "en" ? "type a command" : "введите команду";
  localStorage.setItem("portfolio-language", language);
}

function applyTheme(nextTheme) {
  theme = nextTheme;
  document.documentElement.dataset.theme = theme;
  if (themeToggle) {
    const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }
  localStorage.setItem("portfolio-theme", theme);
}

languageToggle?.addEventListener("click", () => applyLanguage(language === "en" ? "ru" : "en"));
themeToggle?.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
applyTheme(theme);
applyLanguage(language);

const terminalForm = document.querySelector("[data-terminal-form]");
const terminalInput = document.querySelector("[data-terminal-input]");
const terminalOutput = document.querySelector("[data-terminal-output]");
const terminalResponses = {
  en: {
    help: "Commands: about · projects · stack · contact · clear",
    about: "Sergey Panfilov — developer focused on AI automation, Python backend and product systems.",
    projects: "LifeOS 0.4 · Sophyte · Ping Hosts · Content Moderation Prototype",
    stack: "Python · FastAPI · SQL · Docker · React · Kotlin · BPMN · ChatGPT · Codex",
    contact: "Email: sergey.volkov98@yandex.ru · Telegram: @zenartz98"
  },
  ru: {
    help: "Команды: about · projects · stack · contact · clear",
    about: "Сергей Панфилов — разработчик в AI-автоматизации, Python backend и продуктовых системах.",
    projects: "LifeOS 0.4 · Sophyte · Ping Hosts · прототип модерации",
    stack: "Python · FastAPI · SQL · Docker · React · Kotlin · BPMN · ChatGPT · Codex",
    contact: "Email: sergey.volkov98@yandex.ru · Telegram: @zenartz98"
  }
};

terminalForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = terminalInput.value.trim().toLowerCase();
  if (!command) return;
  if (command === "clear") {
    terminalOutput.textContent = "";
  } else {
    const response = terminalResponses[language][command] || (language === "en"
      ? `Command not found: ${command}. Try help.`
      : `Команда не найдена: ${command}. Попробуйте help.`);
    terminalOutput.textContent += `\n\n$ ${command}\n${response}`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
  terminalInput.value = "";
});

document.querySelectorAll("[data-code-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.codeTab;
    document.querySelectorAll("[data-code-tab]").forEach((button) => {
      const active = button === tab;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll("[data-code-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.codePanel !== target;
    });
  });
});
