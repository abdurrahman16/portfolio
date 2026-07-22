/* ==========================================================================
   PORTFOLIO DATA
   Edit the arrays below to update Skills, Projects, Experience and Education.
   Everything on the page is rendered from this data — no HTML editing needed.
   ========================================================================== */

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      languageSwitch: "日本語"
    },
    hero: {
  eyebrow: "~/whoami",
  role: "Web Developer",
  roleAlt: "System Engineer",
  status: "Available for new opportunities",

  intro:
    "I'm a Web Developer and System Engineer with 3+ years of IT experience, currently pursuing a Master's degree at Saga University. With business-level English (IELTS B2), Japanese communication skills (JLPT N3 level), and a CCNA certification, I bring a unique combination of software development, networking, and international communication skills to every project.",

  primaryCta: "View My Projects",
  secondaryCta: "Download CV",

  statYears: "IT Experience",
  statProjects: "Projects Built",
  statStack: "Web & Network Technologies"
},
    about: {
  eyebrow: "~/about",
  title: "About me",
  copy1:
    "I'm a Web Developer and System Engineer who enjoys building practical software and solving technical problems. My experience spans front-end development, back-end systems, databases, and networking, allowing me to understand applications from both the software and infrastructure perspectives.",

  copy2:
    "I work with technologies such as React, Node.js, Express.js, MongoDB, Java, and Spring Boot. I also hold the Cisco Certified Network Associate (CCNA 200-301) certification, strengthening my knowledge of networking, system infrastructure, and troubleshooting.",

  copy3:
    "I'm currently pursuing a Master's degree in Information Science and Technology at Saga University, Japan. I enjoy continuously learning new technologies and am looking for opportunities where I can contribute as a Web Developer or System Engineer while continuing to grow as an IT professional.",

  factFocusLabel: "Focus",
  factFocusValue: "Web Development & System Engineering",

  factEducationLabel: "Education",
  factEducationValue: "M.Sc. in Information Science & Technology",

  factLocationLabel: "Based in",
  factLocationValue: "Saga, Japan",

  factStatusLabel: "Certification",
  factStatusValue: "Cisco Certified Network Associate (CCNA)"
},
    skills: {
      eyebrow: "~/skills",
      title: "Technical skills",
      lede: "Technologies I use regularly, grouped by where they sit in the stack."
    },
    projects: {
      eyebrow: "~/projects",
      title: "Selected projects",
      lede: "A mix of front-end, full-stack and backend work. Filter by type or open a card for the full write-up.",
      buttons: {
        github: "GitHub",
        liveDemo: "Live Demo",
        viewDetails: "View Details"
      },
      modal: {
        features: "Main features",
        technologies: "Technologies used",
        role: "My role",
        challenges: "Challenges",
        solutions: "Solutions",
        github: "View on GitHub",
        liveDemo: "Open Live Demo"
      }
    },
    experience: {
      eyebrow: "~/experience",
      title: "Experience"
    },
    education: {
      eyebrow: "~/education",
      title: "Education"
    },
    contact: {
      eyebrow: "~/contact",
      title: "Let's work together",
      lede: "Have a role, a project, or just want to say hello? My inbox is open.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me a bit about the role or project...",
        submit: "Send message",
        errors: {
          name: "Please enter your name.",
          email: "Please enter a valid email address.",
          message: "Message should be at least 10 characters.",
          generic: "Please fix the fields above and try again.",
          success: "Thanks — your message has been noted. I'll get back to you soon!"
        }
      },
      labels: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        location: "Location"
      }
    },
    footer: {
      copy: "© {year} Mohammad Abdur Rahman. All rights reserved."
    }
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "自己紹介",
      skills: "スキル",
      projects: "実績",
      experience: "経歴",
      education: "学歴",
      contact: "お問い合わせ",
      languageSwitch: "English"
    },
    hero: {
      eyebrow: "~/自己紹介",
      role: "Web Developer",
      roleAlt: "System Engineer",
      status: "新しい機会を歓迎します",
      intro: "3年以上のIT経験を持つ Web Developer / System Engineer です。Saga University で情報科学技術を学びながら、英語（IELTS B2）、日本語（JLPT N3）、CCNA の知識を活かして、実務レベルの開発とインフラ対応を両立させています。",
      primaryCta: "実績を見る",
      secondaryCta: "履歴書をダウンロード",
      statYears: "開発経験年数",
      statProjects: "納品実績",
      statStack: "使用技術数"
    },
    about: {
      eyebrow: "~/自己紹介",
      title: "プロフィール",
      copy1: "私は Web Developer と System Engineer を軸に、実務で使えるソフトウェアを設計・構築することに興味があります。フロントエンド開発、バックエンド開発、データベース、ネットワークまでを横断して理解できることが、私の強みです。",
      copy2: "React、Node.js、Express.js、MongoDB、Java、Spring Boot などを使って実装を行ってきました。さらに Cisco Certified Network Associate（CCNA 200-301）を保有しており、ネットワーク・インフラ・トラブルシューティングの知識も活かしています。",
      copy3: "現在、日本の Saga University で情報科学技術の大学院課程に在籍しながら、新しい技術を学び続けています。Web Developer または System Engineer として、継続的に成長できる環境で貢献したいと考えています。",
      factFocusLabel: "専門領域",
      factFocusValue: "Web 開発 & システムエンジニアリング",
      factEducationLabel: "学歴",
      factEducationValue: "情報科学技術修士課程（在学中）",
      factLocationLabel: "所在地",
      factLocationValue: "日本・佐賀",
      factStatusLabel: "資格",
      factStatusValue: "Cisco Certified Network Associate（CCNA）"
    },
    skills: {
      eyebrow: "~/スキル",
      title: "技術スキル",
      lede: "日常的に扱う技術を、スタックの観点から整理した内容です。"
    },
    projects: {
      eyebrow: "~/実績",
      title: "代表プロジェクト",
      lede: "フロントエンド、フルスタック、バックエンドを横断した実績です。カテゴリで絞り込み、詳細も確認できます。",
      buttons: {
        github: "GitHub",
        liveDemo: "デモを見る",
        viewDetails: "詳細を見る"
      },
      modal: {
        features: "主な機能",
        technologies: "使用技術",
        role: "担当範囲",
        challenges: "課題",
        solutions: "解決策",
        github: "GitHub で見る",
        liveDemo: "ライブデモを開く"
      }
    },
    experience: {
      eyebrow: "~/経歴",
      title: "経歴"
    },
    education: {
      eyebrow: "~/学歴",
      title: "学歴"
    },
    contact: {
      eyebrow: "~/お問い合わせ",
      title: "一緒に働ける機会を探しています",
      lede: "採用、プロジェクト、あるいは単純なご挨拶でも大丈夫です。気軽にご連絡ください。",
      form: {
        nameLabel: "お名前",
        namePlaceholder: "お名前を入力してください",
        emailLabel: "メールアドレス",
        emailPlaceholder: "you@example.com",
        messageLabel: "メッセージ",
        messagePlaceholder: "職種やプロジェクトの内容を教えてください",
        submit: "送信する",
        errors: {
          name: "お名前を入力してください。",
          email: "有効なメールアドレスを入力してください。",
          message: "メッセージは10文字以上で入力してください。",
          generic: "入力内容を確認してもう一度お試しください。",
          success: "ありがとうございます。メッセージを受け付けました。折り返しご連絡いたします。"
        }
      },
      labels: {
        email: "メール",
        linkedin: "LinkedIn",
        github: "GitHub",
        location: "所在地"
      }
    },
    footer: {
      copy: "© {year} Mohammad Abdur Rahman. All rights reserved."
    }
  }
};

let currentLanguage = localStorage.getItem("portfolio-language") || ((navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en");

const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Java", level: 78 },
      { name: "Spring Boot", level: 75 },
      { name: "C#", level: 65 },
      { name: "Python", level: 72 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Vercel", level: 85 },
    ],
  },
];

// EDIT PROJECTS HERE — add, remove, or update entries in this array.
const PROJECTS = [
{
  title: "Inventory Management CRUD Application",
  category: "Full Stack",
  description:
    "A full-stack inventory management system for creating, viewing, updating, and deleting product records.",
  image: "assets/inventoryapp.png",
  fullDescription:
    "A full-stack inventory management application designed to simplify product and stock management. The system provides a clean interface for managing inventory records, including product names, SKUs, categories, quantities, and prices through complete CRUD operations.",
  technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/abdurrahman16/Inventory-Operation",
  liveDemo: "#",
  role:
    "Sole developer — designed the application structure, developed the REST API, connected MongoDB, and built the React frontend.",
  features: [
    "Create, view, update, and delete inventory items",
    "Product management with SKU, category, quantity, and price",
    "Search and filter products by name or category",
    "RESTful API built with Node.js and Express.js",
    "MongoDB database integration for persistent data storage",
  ],
  challenges:
    "Managing the connection between the React frontend, REST API, and MongoDB database while keeping inventory data synchronized after CRUD operations.",
  solutions:
    "Implemented a structured REST API with Express.js and Mongoose, then connected the React frontend to the API using asynchronous requests and state management to automatically refresh inventory data after each operation.",
},
  {
    title: "Bank Queue Management System Windows Application",
    category: "Full Stack",
    description: "A real time bank queue management windows application system",
    image: "assets/bankqueue.png",
    fullDescription:
      "A bank queue management system that allows customers to take a ticket and wait for their turn, while bank staff can manage the queue in real time. The system includes a WebSocket server for real-time updates and a client application for both customers and staff.",
    technologies: ["C#", "Dot Net", "Devexpress", "SQL Server"],
    github: "https://github.com/abdurrahman16/TMS",
    liveDemo: "#",
    role: "Sole developer — built both the customer and admin dashboard",
    features: [
      "Multiple departments with separate queues",
      "Easy ticket generation and display for customers",
      "Persisted queue state",
      "Real-time updates for staff and customers using SQL Server",
    ],
    challenges: "Ensuring that the queue state remains consistent across multiple clients and handling network interruptions gracefully.",
    solutions:
      "Implemented a robus solution with rela time date refresh and a SQL Server backend to ensure that the queue state is always consistent and up-to-date.",
  },
  {
  title: "Japan Weather Monitoring System",
  category: "Full Stack",
  description:
    "A full-stack web application that displays weather information for all prefectures in Japan with secure user authentication.",
  image: "assets/japanweather.png",
  fullDescription:
    "A full-stack weather monitoring application built with the MERN stack. Users can create accounts, log in securely, and view weather information for prefectures across Japan through a simple and responsive interface.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
  github: "https://github.com/abdurrahman16/Japan-Weather-Monitoring-System",
  liveDemo: "#",
  role: "Sole developer.",
  features: [
    "Weather information for all prefectures in Japan",
    "User registration and login system",
    "Secure authentication",
    "Responsive user interface",
    "Backend API for weather and user data",
  ],
  challenges:
    "Managing weather data for multiple prefectures while integrating user authentication between the frontend and backend.",
  solutions:
    "Built a RESTful API with Node.js and Express, used MongoDB for data management, and implemented a React-based frontend for a smooth and responsive user experience.",
},
  {
  title: "Job Searching Web Application",
  category: "Full Stack",
  description:
    "A job-seeker platform where users can create accounts, upload resumes, and browse job opportunities through an integrated job board.",
  image: "assets/jobsearch.png",
  fullDescription:
    "A full-stack job searching web application designed for job seekers. Users can register, manage their accounts, upload resumes, and browse job opportunities displayed through a Google Jobs Information API. Administrators can access and manage uploaded resume files through an admin interface.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
  github: "https://github.com/your-github-handle/job-searching-web-application",
  liveDemo: "",
  role: "Sole developer — designed and developed the frontend, backend, authentication system, resume upload functionality, and admin features.",
  features: [
    "User registration and login",
    "Job seeker profile management",
    "Resume upload functionality",
    "Admin dashboard for viewing uploaded resumes",
    "Job board powered by Google Jobs Information API",
    "Search and browse job opportunities",
    "MongoDB database integration",
    "Responsive web interface",
  ],
  challenges:
    "Building a complete job-seeker workflow that connects user authentication, resume file uploads, administrator access, and external job information in a single application.",
  solutions:
    "Developed a RESTful backend with Node.js and Express, used MongoDB for user and application data, implemented secure file upload functionality, and integrated external job information to provide users with a practical job-searching experience.",
},
  {
  title: "Movie Finder App in Japan",
  category: "Full Stack",
  description:
    "A movie search platform that helps users find where movies are showing across Japan, including available prefectures, cinema halls, ticket prices, and availability status.",
  image: "assets/moviefinder.png",
  fullDescription:
    "A full-stack movie discovery application built with the MERN stack. Users can search for a movie by name and view detailed screening information, including the Japanese prefecture, cinema hall, ticket price, and availability status. The application uses a custom API developed for the platform to manage and provide movie screening information.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
  github: "https://github.com/your-github-handle/movie-finder-japan",
  liveDemo: "https://your-demo-link.example.com",
  role: "Sole developer — designed and developed the frontend, backend, database, and custom API.",
  features: [
    "Search movies by title",
    "Find movie screenings across Japan",
    "View available prefectures",
    "View cinema hall information",
    "Display ticket prices",
    "Show movie availability status",
    "Custom REST API developed for the application",
    "MongoDB database integration",
    "Responsive user interface",
  ],
  challenges:
    "Organizing movie screening information across multiple prefectures and cinema halls while clearly communicating whether a movie is currently available or unavailable.",
  solutions:
    "Built a custom REST API with Node.js and Express to manage movie and cinema data, used MongoDB for data storage, and developed a React interface that dynamically displays screening locations, ticket prices, and availability status.",
},
  {
  title: "Emergency Rescue System",
  category: "Research",
  description:
    "A mobile-based real-time health alert system for emergency notification and location-aware rescue coordination.",
  image: "assets/sosandoirdapp.png",
  fullDescription:
    "A mobile-based emergency health alert system designed to provide rapid SOS notifications, real-time GPS location sharing, and coordinated rescue support. The system integrates Flutter and Firebase to connect patients, relatives, responders, hospital users, and administrators through real-time emergency communication.",
  technologies: [
    "Flutter",
    "Dart",
    "Firebase Authentication",
    "Cloud Firestore",
    "Firebase Cloud Messaging",
    "GPS / Geolocation",
    "Google Maps",
    "SMS"
  ],
  github: "https://github.com/your-github-handle/Emergency_Rescue_System",
  liveDemo: "",
  role: "Researcher and sole developer.",
  features: [
    "One-click SOS emergency alert activation",
    "Real-time GPS location sharing",
    "Multi-role emergency notification system",
    "Firebase-based real-time data synchronization",
    "Push notifications using Firebase Cloud Messaging",
    "SMS fallback for limited Internet connectivity",
    "Map-based emergency location visualization",
    "Role-based support for patients, relatives, responders, hospitals, and administrators"
  ],
  challenges:
    "Ensuring reliable emergency communication and accurate location sharing under different network conditions.",
  solutions:
    "Integrated Firebase Cloud Services, GPS-based location tracking, push notifications, and SMS fallback communication, and evaluated the system using 25 Android smartphones under Wi-Fi and 4G network conditions."
},
];

const EXPERIENCE = [
  {
    title: "System Engineer",
    company: "Green Tech Dahaka, Bangladesh",
    date: "2022 — 2025",
    responsibilities: [
      "Designed and built full-stack web applications for small business clients",
      "Worked directly with clients to scope requirements and set realistic timelines",
      "Deployed and maintained production applications on Vercel and cloud hosts",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Remote IT Support Specialist",
    company: "Merb Resources Ltd, Nigeria",
    date: "2020-2021",
    responsibilities: [
      "Contributed features to an internal Wordpress/PHP service used by other teams",
      "Wrote unit and integration tests to raise coverage on legacy modules",
      "Participated in code reviews and sprint planning as part of an agile team",
    ],
    technologies: ["PHP", "Wordpress", "MySQL", "Git"],
  },
];

const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    university: "Jashore University of Science and Technology, Bangladesh",
    date: "2017 — 2022",
    field: "Focus on software engineering, web technologies, and databases",
  },
  {
    degree: "Graduate in Computer Science and Information Technology, Japan",
    university: "Saga National University, Japan",
    date: "April 2025 — March 2027",
    field: "Science and Engineering, with a focus on advanced software development and research",
  },
];

/* ==========================================================================
   RENDER: SKILLS
   ========================================================================== */
function getTranslation(key) {
  const parts = key.split(".");
  let value = TRANSLATIONS[currentLanguage];
  for (const part of parts) {
    value = value?.[part];
    if (value === undefined) break;
  }
  return value ?? key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = getTranslation(key);
    if (typeof translation === "string") {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    const translation = getTranslation(key);
    if (typeof translation === "string") {
      element.setAttribute("placeholder", translation);
    }
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = getTranslation("nav.languageSwitch");
    toggle.setAttribute("aria-label", currentLanguage === "ja" ? "Switch to English" : "日本語に切り替える");
  }

  const footerCopy = document.querySelector(".footer-copy");
  if (footerCopy) {
    footerCopy.textContent = getTranslation("footer.copy").replace("{year}", new Date().getFullYear());
  }

  document.documentElement.lang = currentLanguage === "ja" ? "ja" : "en";
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("portfolio-language", lang);
  applyTranslations();
  renderProjects();
  renderSkills();
  renderExperience();
  renderEducation();
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-card">
      <p class="skill-card-title">${group.category}</p>
      ${group.items
        .map(
          (item) => `
        <div class="skill-row">
          <div class="skill-row-top">
            <span class="skill-name">${item.name}</span>
            <span class="skill-level">${item.level}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-level="${item.level}"></div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `
  ).join("");
}

/* ==========================================================================
   RENDER: PROJECTS + FILTERING
   ========================================================================== */
const projectFilterState = { current: "All" };

function renderProjectFilters() {
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  const container = document.getElementById("projectFilters");
  container.innerHTML = categories
    .map(
      (cat, i) => `
      <button class="filter-btn${cat === "All" ? " is-active" : ""}" role="tab"
        aria-selected="${cat === "All"}" data-filter="${cat}">${cat}</button>
    `
    )
    .join("");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    projectFilterState.current = btn.dataset.filter;
    container.querySelectorAll(".filter-btn").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", String(active));
    });
    renderProjects();
  });
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const filtered =
    projectFilterState.current === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilterState.current);

  grid.innerHTML = filtered
    .map(
      (project, index) => `
    <article class="project-card reveal is-visible">
      <div class="project-media" data-project-index="${PROJECTS.indexOf(project)}">
        <img src="${project.image}" alt="${project.title} preview" loading="lazy" />
      </div>
      <div class="project-body">
        <span class="project-category">${project.category}</span>
        <h3 class="project-title" data-project-index="${PROJECTS.indexOf(project)}">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tag-list">
          ${project.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          ${project.github ? `<a class="btn btn-ghost btn-sm" href="${project.github}" target="_blank" rel="noopener noreferrer">${getTranslation("projects.buttons.github")}</a>` : ""}
          ${project.liveDemo ? `<a class="btn btn-ghost btn-sm" href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">${getTranslation("projects.buttons.liveDemo")}</a>` : ""}
          <button class="btn btn-primary btn-sm" data-project-index="${PROJECTS.indexOf(project)}" data-view-details>${getTranslation("projects.buttons.viewDetails")}</button>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

/* ==========================================================================
   RENDER: EXPERIENCE + EDUCATION TIMELINES
   ========================================================================== */
function renderExperience() {
  const el = document.getElementById("experienceTimeline");
  if (!el) return;

  el.innerHTML = EXPERIENCE.map(
    (job) => `
    <div class="timeline-item reveal">
      <span class="timeline-date">${job.date}</span>
      <h3 class="timeline-title">${job.title}</h3>
      <span class="timeline-org">${job.company}</span>
      <ul class="timeline-desc">
        ${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}
      </ul>
      <div class="tag-list">
        ${job.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  `
  ).join("");
}

function renderEducation() {
  const el = document.getElementById("educationTimeline");
  if (!el) return;

  el.innerHTML = EDUCATION.map(
    (edu) => `
    <div class="timeline-item reveal">
      <span class="timeline-date">${edu.date}</span>
      <h3 class="timeline-title">${edu.degree}</h3>
      <span class="timeline-org">${edu.university}</span>
      <p class="timeline-desc">${edu.field}</p>
    </div>
  `
  ).join("");
}

/* ==========================================================================
   PROJECT DETAIL MODAL (no page reload, no separate page)
   ========================================================================== */
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
let lastFocusedElement = null;

function openProjectModal(index) {
  const project = PROJECTS[index];
  if (!project) return;

  modalBody.innerHTML = `
    <div class="modal-media">
      <img src="${project.image}" alt="${project.title} preview" loading="lazy" />
    </div>
    <span class="modal-category">${project.category}</span>
    <h2 class="modal-title" id="modalTitle">${project.title}</h2>
    <p>${project.fullDescription}</p>

    <p class="modal-section-label">${getTranslation("projects.modal.features")}</p>
    <ul>${project.features.map((f) => `<li>${f}</li>`).join("")}</ul>

    <p class="modal-section-label">${getTranslation("projects.modal.technologies")}</p>
    <div class="tag-list">${project.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}</div>

    <p class="modal-section-label">${getTranslation("projects.modal.role")}</p>
    <p>${project.role}</p>

    <p class="modal-section-label">${getTranslation("projects.modal.challenges")}</p>
    <p>${project.challenges}</p>

    <p class="modal-section-label">${getTranslation("projects.modal.solutions")}</p>
    <p>${project.solutions}</p>

    <div class="modal-actions">
      ${project.github ? `<a class="btn btn-ghost" href="${project.github}" target="_blank" rel="noopener noreferrer">${getTranslation("projects.modal.github")}</a>` : ""}
      ${project.liveDemo ? `<a class="btn btn-primary" href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">${getTranslation("projects.modal.liveDemo")}</a>` : ""}
    </div>
  `;

  lastFocusedElement = document.activeElement;
  modalOverlay.classList.add("is-open");
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeProjectModal() {
  modalOverlay.classList.remove("is-open");
  modalOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.getElementById("projectsGrid").addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-project-index]");
  if (!trigger) return;
  openProjectModal(Number(trigger.dataset.projectIndex));
});

modalClose.addEventListener("click", closeProjectModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeProjectModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("is-open")) {
    closeProjectModal();
  }
});

/* ==========================================================================
   NAVIGATION: scroll state, mobile menu, active link, smooth scroll
   ========================================================================== */
const navHeader = document.getElementById("navHeader");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  toggleBackToTop();
  updateActiveNavLink();
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = ["home", "about", "skills", "projects", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

function updateActiveNavLink() {
  let currentId = sections[0]?.id;
  const scrollPos = window.scrollY + 120;
  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) currentId = section.id;
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
}

/* ==========================================================================
   BACK TO TOP
   ========================================================================== */
const backToTop = document.getElementById("backToTop");
function toggleBackToTop() {
  backToTop.classList.toggle("is-visible", window.scrollY > 480);
}
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==========================================================================
   SCROLL REVEAL + SKILL BAR ANIMATION
   ========================================================================== */
function initScrollReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = `${fill.dataset.level}%`;
          barObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".skill-bar-fill").forEach((el) => barObserver.observe(el));
}

/* ==========================================================================
   CONTACT FORM VALIDATION
   ========================================================================== */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function setFieldError(fieldId, message) {
  const row = document.getElementById(fieldId).closest(".form-row");
  const errorEl = document.getElementById(`${fieldId}-error`);
  if (message) {
    row.classList.add("has-error");
    errorEl.textContent = message;
  } else {
    row.classList.remove("has-error");
    errorEl.textContent = "";
  }
}

function validateContactForm() {
  let isValid = true;

  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const message = document.getElementById("cf-message").value.trim();
  const errors = getTranslation("contact.form.errors");

  if (name.length < 2) {
    setFieldError("cf-name", errors.name);
    isValid = false;
  } else {
    setFieldError("cf-name", "");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setFieldError("cf-email", errors.email);
    isValid = false;
  } else {
    setFieldError("cf-email", "");
  }

  if (message.length < 10) {
    setFieldError("cf-message", errors.message);
    isValid = false;
  } else {
    setFieldError("cf-message", "");
  }

  return isValid;
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "";

  if (!validateContactForm()) {
    formStatus.style.color = "#f0938c";
    formStatus.textContent = getTranslation("contact.form.errors.generic");
    return;
  }

  // NOTE: There is no backend wired up yet. Replace this block with a real
  // request (e.g. fetch() to your API, or a service like Formspree/EmailJS)
  // when you're ready to receive submissions.
  formStatus.style.color = "";
  formStatus.textContent = getTranslation("contact.form.errors.success");
  contactForm.reset();
});

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      setLanguage(currentLanguage === "ja" ? "en" : "ja");
    });
  }

  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderExperience();
  renderEducation();
  initScrollReveal();
  updateActiveNavLink();
  toggleBackToTop();
  applyTranslations();
});
