/* ==========================================================================
   PORTFOLIO DATA
   Edit the arrays below to update Skills, Projects, Experience and Education.
   Everything on the page is rendered from this data — no HTML editing needed.
   ========================================================================== */

const TRANSLATIONS = {
  en: {
    accessibility: {
      skipLink: "Skip to content",
      backToTop: "Back to top",
      closeDetails: "Close project details"
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      languageSwitch: "日本語",
      menuToggle: "Toggle navigation menu"
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
      filterLabel: "Filter projects by category",
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
      },
      locationValue: "Saga, Japan / Open to relocation"
    },
    footer: {
      copy: "© {year} Mohammad Abdur Rahman. All rights reserved."
    }
  },
  ja: {
    accessibility: {
      skipLink: "本文へ移動",
      backToTop: "ページ上部へ戻る",
      closeDetails: "プロジェクト詳細を閉じる"
    },
    nav: {
      home: "ホーム",
      about: "自己紹介",
      skills: "スキル",
      projects: "実績",
      experience: "経歴",
      education: "学歴",
      contact: "お問い合わせ",
      languageSwitch: "English",
      menuToggle: "ナビゲーションメニューを開く"
    },
    hero: {
      eyebrow: "~/自己紹介",
      role: "Web開発者",
      roleAlt: "システムエンジニア",
      status: "新しい機会を歓迎します",
      intro: "IT業界で3年以上の経験を持つWeb開発者・システムエンジニアです。現在、佐賀大学大学院で情報科学技術を学んでいます。英語力（IELTS B2）、日本語力（JLPT N3相当）、CCNAの知識を活かし、開発とインフラの両面から貢献します。",
      primaryCta: "実績を見る",
      secondaryCta: "履歴書をダウンロード",
      statYears: "開発経験年数",
      statProjects: "納品実績",
      statStack: "使用技術数"
    },
    about: {
      eyebrow: "~/自己紹介",
      title: "プロフィール",
      copy1: "Web開発者・システムエンジニアとして、実用的なソフトウェアの開発と技術課題の解決に取り組んでいます。フロントエンド、バックエンド、データベース、ネットワークの経験を活かし、ソフトウェアとインフラの両面からアプリケーションを理解しています。",
      copy2: "React、Node.js、Express.js、MongoDB、Java、Spring Bootなどを用いた開発経験があります。Cisco Certified Network Associate（CCNA 200-301）を取得しており、ネットワーク、システムインフラ、トラブルシューティングの知識も備えています。",
      copy3: "現在、日本の佐賀大学大学院で情報科学技術を専攻しています。新しい技術を学び続けながら、Web開発者またはシステムエンジニアとして貢献し、成長できる機会を探しています。",
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
      filterLabel: "プロジェクトをカテゴリで絞り込む",
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
      title: "職務経歴"
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
      },
      locationValue: "日本・佐賀／転居可能"
    },
    footer: {
      copy: "© {year} Mohammad Abdur Rahman. 無断転載を禁じます。"
    }
  }
};

const savedLanguage = localStorage.getItem("portfolio-language");
let currentLanguage = savedLanguage === "en" || savedLanguage === "ja" ? savedLanguage : "ja";

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
    title: "A Complete Job Scraper from Multiple Sources",
    category: "Full Stack",
    description:
      "A dynamic MERN scraping system that collects job listings from multiple sources and brings them together in a real-time dashboard.",
    image: "assets/Job%20Scraper.png",
    fullDescription:
      "A full-stack job scraping platform built with the MERN stack. It gathers job listings from multiple sources and presents them in a centralized, real-time dashboard for quick review and discovery.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "",
    liveDemo: "",
    role:
      "Full-stack developer — developed the scraping workflow and dashboard experience.",
    features: [
      "Collect job listings from multiple sources",
      "Centralized dashboard for viewing job results",
      "Dynamic updates for recently collected listings",
      "MERN-based full-stack architecture",
    ],
    challenges:
      "Bringing job listings from different sources into a clear, consistent dashboard.",
    solutions:
      "Combined the scraping workflow with a centralized dashboard so collected listings can be reviewed together.",
  },
  {
    title: "Corporate Professional Home Page",
    category: "Frontend",
    description:
      "A polished corporate homepage concept designed to present a company's services, strengths, and contact information.",
    image: "assets/Corporate%20Professional.png",
    fullDescription:
      "A professional corporate homepage concept with a clean visual hierarchy, service highlights, and clear calls to action. This portfolio preview uses sample company content and imagery.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "",
    liveDemo: "",
    role: "Web developer — built the corporate homepage and responsive layout.",
    features: [
      "Corporate hero section with a clear call to action",
      "Service and company overview sections",
      "Responsive layout for desktop and mobile screens",
      "Sample content and illustration for portfolio display",
    ],
    challenges:
      "Presenting business information in a professional layout that remains easy to navigate across screen sizes.",
    solutions:
      "Used a clear page structure and responsive layout to keep the primary company information easy to find.",
  },
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

const PROJECT_TRANSLATIONS = {
  "A Complete Job Scraper from Multiple Sources": {
    title: "複数サイト対応の求人スクレイピングシステム",
    category: "フルスタック",
    description: "複数の求人情報サイトから求人を収集し、リアルタイムのダッシュボードに集約するMERNシステムです。",
    fullDescription: "MERNスタックで構築したフルスタックの求人情報収集プラットフォームです。複数の情報源から求人を取得し、一覧性の高いリアルタイムダッシュボードに集約します。",
    role: "フルスタック開発者として、求人収集処理とダッシュボードを開発しました。",
    features: [
      "複数の情報源から求人情報を収集",
      "収集した求人を一元管理するダッシュボード",
      "新着求人情報を動的に表示",
      "MERNスタックによるフルスタック構成"
    ],
    challenges: "異なる情報源の求人情報を、見やすく一貫性のある形式で表示すること。",
    solutions: "求人収集処理と一元管理ダッシュボードを連携し、集めた求人をまとめて確認できるようにしました。"
  },
  "Corporate Professional Home Page": {
    title: "コーポレートサイト",
    category: "フロントエンド",
    description: "企業のサービスや強み、問い合わせ先を分かりやすく伝えるコーポレートサイトのデザイン案です。",
    fullDescription: "明確な情報設計、サービス紹介、行動を促す導線を備えたコーポレートサイトのデザイン案です。ポートフォリオ用にサンプルの会社情報と画像を使用しています。",
    role: "Web開発者として、コーポレートサイトとレスポンシブレイアウトを制作しました。",
    features: [
      "明確な導線を備えたメインビジュアル",
      "サービスおよび会社概要の紹介",
      "デスクトップとモバイルに対応したレイアウト",
      "ポートフォリオ表示用のサンプルコンテンツと画像"
    ],
    challenges: "さまざまな画面サイズで見やすく、企業情報を適切に伝えること。",
    solutions: "分かりやすいページ構成とレスポンシブレイアウトにより、重要な情報を見つけやすくしました。"
  },
  "Inventory Management CRUD Application": {
    title: "在庫管理アプリケーション",
    category: "フルスタック",
    description: "商品情報の登録・閲覧・更新・削除ができるフルスタックの在庫管理システムです。",
    fullDescription: "商品と在庫の管理を効率化する在庫管理アプリケーションです。商品名、SKU、カテゴリ、数量、価格などの情報を、使いやすい画面から一元管理できます。",
    role: "単独開発者として、アプリケーション設計、REST API、MongoDB連携、Reactの画面開発を担当しました。",
    features: [
      "在庫商品の登録・閲覧・更新・削除",
      "SKU、カテゴリ、数量、価格による商品管理",
      "商品名やカテゴリによる検索・絞り込み",
      "Node.jsとExpress.jsによるREST API",
      "MongoDBによるデータ永続化"
    ],
    challenges: "Reactの画面、REST API、MongoDB間の連携と、操作後の在庫情報の同期。",
    solutions: "Express.jsとMongooseでREST APIを構築し、非同期通信と状態管理を用いて操作後に在庫情報を更新するようにしました。"
  },
  "Bank Queue Management System Windows Application": {
    title: "銀行向け順番待ち管理システム",
    category: "フルスタック",
    description: "銀行の来店客と職員がリアルタイムで利用できる、Windows向け順番待ち管理システムです。",
    fullDescription: "来店客が受付番号を取得し、職員が順番待ちをリアルタイムで管理できるシステムです。リアルタイム更新用のWebSocketサーバーと、来店客・職員向けのクライアントアプリケーションで構成されています。",
    role: "単独開発者として、来店客向け画面と管理者ダッシュボードの両方を開発しました。",
    features: [
      "複数窓口ごとの順番待ち管理",
      "来店客向けの簡単な受付番号発行と表示",
      "順番待ち状態の保存",
      "SQL Serverを利用したリアルタイム更新"
    ],
    challenges: "複数のクライアント間で順番待ち状態を保ち、ネットワーク切断にも適切に対応すること。",
    solutions: "SQL Serverをバックエンドに採用し、リアルタイムのデータ更新によって状態の一貫性を保ちました。"
  },
  "Japan Weather Monitoring System": {
    title: "日本の天気情報モニタリングシステム",
    category: "フルスタック",
    description: "安全なユーザー認証を備え、日本全国の都道府県の天気情報を表示するWebアプリケーションです。",
    fullDescription: "MERNスタックで構築した天気情報アプリケーションです。ユーザー登録とログインを行い、シンプルでレスポンシブな画面から日本各地の天気情報を確認できます。",
    role: "単独開発者として開発しました。",
    features: [
      "日本全国の都道府県の天気情報",
      "ユーザー登録とログイン",
      "安全なユーザー認証",
      "レスポンシブなユーザーインターフェース",
      "天気情報とユーザーデータ用のバックエンドAPI"
    ],
    challenges: "複数の都道府県の天気情報と、フロントエンド・バックエンド間のユーザー認証を連携すること。",
    solutions: "Node.jsとExpressでREST APIを構築し、MongoDBでデータを管理して、Reactで使いやすい画面を実装しました。"
  },
  "Job Searching Web Application": {
    title: "求人検索Webアプリケーション",
    category: "フルスタック",
    description: "アカウント作成や履歴書のアップロードを行い、求人情報を検索できる求職者向けプラットフォームです。",
    fullDescription: "求職者向けのフルスタック求人検索アプリケーションです。ユーザー登録、アカウント管理、履歴書のアップロード、Google Jobs Information APIを利用した求人検索ができます。管理者向け画面からアップロードされた履歴書を管理できます。",
    role: "単独開発者として、フロントエンド、バックエンド、認証、履歴書アップロード、管理者機能を設計・開発しました。",
    features: [
      "ユーザー登録とログイン",
      "求職者プロフィールの管理",
      "履歴書のアップロード",
      "履歴書を確認する管理者ダッシュボード",
      "Google Jobs Information APIを利用した求人情報",
      "求人の検索と閲覧",
      "MongoDBによるデータ管理",
      "レスポンシブなWebインターフェース"
    ],
    challenges: "ユーザー認証、履歴書のアップロード、管理者機能、外部求人情報を一つのアプリケーションに統合すること。",
    solutions: "Node.jsとExpressでREST APIを構築し、MongoDBでユーザーと応募データを管理しました。安全なファイルアップロードと外部求人情報を連携しました。"
  },
  "Movie Finder App in Japan": {
    title: "日本国内の映画上映情報検索アプリ",
    category: "フルスタック",
    description: "日本各地の映画上映館、都道府県、チケット料金、上映状況を検索できるプラットフォームです。",
    fullDescription: "MERNスタックで構築した映画情報アプリケーションです。作品名で検索し、都道府県、映画館、チケット料金、上映状況などの詳細を確認できます。独自に開発したAPIで上映情報を管理します。",
    role: "単独開発者として、フロントエンド、バックエンド、データベース、独自APIを設計・開発しました。",
    features: [
      "作品名による映画検索",
      "日本各地の上映情報を検索",
      "上映している都道府県を表示",
      "映画館情報を表示",
      "チケット料金を表示",
      "上映状況を表示",
      "アプリケーション用の独自REST API",
      "MongoDBによるデータ管理",
      "レスポンシブなユーザーインターフェース"
    ],
    challenges: "複数の都道府県や映画館の上映情報を整理し、上映中かどうかを分かりやすく伝えること。",
    solutions: "Node.jsとExpressで映画・映画館情報を管理するREST APIを構築し、Reactの画面に上映場所、料金、上映状況を動的に表示しました。"
  },
  "Emergency Rescue System": {
    title: "緊急救助支援システム",
    category: "研究",
    description: "緊急通知と位置情報を活用し、救助活動を支援するリアルタイムのモバイル健康アラートシステムです。",
    fullDescription: "迅速なSOS通知、GPSによるリアルタイム位置共有、連携した救助支援を目的とするモバイル向け緊急健康アラートシステムです。FlutterとFirebaseを連携し、患者、家族、救助担当者、病院、管理者間のリアルタイム通信を実現します。",
    role: "研究者兼単独開発者として取り組みました。",
    features: [
      "ワンタップでのSOS緊急通知",
      "GPSによるリアルタイム位置共有",
      "複数の役割に対応した緊急通知システム",
      "Firebaseによるリアルタイムデータ同期",
      "Firebase Cloud Messagingによるプッシュ通知",
      "インターネット接続が不安定な場合のSMS通知",
      "地図上での緊急位置表示",
      "患者、家族、救助担当者、病院、管理者向けの機能"
    ],
    challenges: "異なるネットワーク環境でも、緊急連絡と位置共有の信頼性を確保すること。",
    solutions: "Firebase、GPS位置追跡、プッシュ通知、SMSによる代替連絡を統合し、Wi-Fiおよび4G環境下でAndroid端末25台を用いて評価しました。"
  }
};

const EXPERIENCE = [
  {
    title: "Full Stack Web Developer",
    company: "Prios Co., Ltd, Tokyo, Japan",
    date: "Present",
    responsibilities: [
      "Currently working as a Full Stack Web Developer",
    ],
    technologies: ["Full-Stack Development", "Web Applications"],
  },
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

const EXPERIENCE_TRANSLATIONS = [
  {
    title: "フルスタックWeb開発者",
    company: "Prios Co., Ltd（日本・東京）",
    date: "現在",
    responsibilities: ["フルスタックWeb開発者として勤務"],
  },
  {
    title: "システムエンジニア",
    company: "Green Tech Dahaka（バングラデシュ）",
    date: "2022年 — 2025年",
    responsibilities: [
      "中小企業向けのフルスタックWebアプリケーションを設計・開発",
      "クライアントと要件や現実的なスケジュールを直接調整",
      "Vercelなどのクラウド環境に本番アプリケーションをデプロイ・保守",
    ],
  },
  {
    title: "リモートITサポートスペシャリスト",
    company: "Merb Resources Ltd（ナイジェリア）",
    date: "2020年 — 2021年",
    responsibilities: [
      "社内チーム向けWordPress/PHPサービスの機能開発に参加",
      "レガシーモジュールのテストを作成し、カバレッジを向上",
      "アジャイルチームのコードレビューとスプリント計画に参加",
    ],
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

const EDUCATION_TRANSLATIONS = [
  {
    degree: "コンピューターサイエンス・工学学士",
    university: "ジャショール科学技術大学（バングラデシュ）",
    date: "2017年 — 2022年",
    field: "ソフトウェア工学、Web技術、データベースを専攻",
  },
  {
    degree: "コンピューターサイエンス・情報技術（大学院）",
    university: "佐賀大学（日本）",
    date: "2025年4月 — 2027年3月",
    field: "科学・工学分野にて、高度なソフトウェア開発と研究に取り組む",
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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.getAttribute("data-i18n-aria-label");
    const translation = getTranslation(key);
    if (typeof translation === "string") {
      element.setAttribute("aria-label", translation);
    }
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = getTranslation("nav.languageSwitch");
    toggle.setAttribute("aria-label", currentLanguage === "ja" ? "英語に切り替える" : "Switch to Japanese");
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
  renderProjectFilters();
  renderProjects();
  renderSkills();
  renderExperience();
  renderEducation();
  initScrollReveal();
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  const categoryTranslations = {
    Frontend: "フロントエンド",
    Backend: "バックエンド",
    Database: "データベース",
    Tools: "ツール",
  };
  grid.innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-card">
      <p class="skill-card-title">${currentLanguage === "ja" ? categoryTranslations[group.category] : group.category}</p>
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
  const labels = {
    All: "すべて",
    "Full Stack": "フルスタック",
    Frontend: "フロントエンド",
    Research: "研究",
  };
  container.innerHTML = categories
    .map((cat) => {
      const label = currentLanguage === "ja" ? labels[cat] : cat;
      const active = projectFilterState.current === cat;
      return `
      <button class="filter-btn${active ? " is-active" : ""}" role="tab"
        aria-selected="${active}" data-filter="${cat}">${label}</button>
    `;
    })
    .join("");
}

function getLocalizedProject(project) {
  if (currentLanguage !== "ja") return project;
  return { ...project, ...PROJECT_TRANSLATIONS[project.title] };
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const filtered =
    projectFilterState.current === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilterState.current);

  grid.innerHTML = filtered
    .map(
      (sourceProject) => {
        const project = getLocalizedProject(sourceProject);
        const projectIndex = PROJECTS.indexOf(sourceProject);
        return `
    <article class="project-card reveal is-visible">
      <div class="project-media" data-project-index="${projectIndex}">
        <img src="${project.image}" alt="${currentLanguage === "ja" ? `${project.title}の画像` : `${project.title} preview`}" loading="lazy" />
      </div>
      <div class="project-body">
        <span class="project-category">${project.category}</span>
        <h3 class="project-title" data-project-index="${projectIndex}">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tag-list">
          ${project.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          ${project.github ? `<a class="btn btn-ghost btn-sm" href="${project.github}" target="_blank" rel="noopener noreferrer">${getTranslation("projects.buttons.github")}</a>` : ""}
          ${project.liveDemo ? `<a class="btn btn-ghost btn-sm" href="${project.liveDemo}" target="_blank" rel="noopener noreferrer">${getTranslation("projects.buttons.liveDemo")}</a>` : ""}
          <button class="btn btn-primary btn-sm" data-project-index="${projectIndex}" data-view-details>${getTranslation("projects.buttons.viewDetails")}</button>
        </div>
      </div>
    </article>
  `;
      }
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
    (sourceJob, index) => {
      const job = currentLanguage === "ja" ? { ...sourceJob, ...EXPERIENCE_TRANSLATIONS[index] } : sourceJob;
      return `
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
  `;
    }
  ).join("");
}

function renderEducation() {
  const el = document.getElementById("educationTimeline");
  if (!el) return;

  el.innerHTML = EDUCATION.map(
    (sourceEducation, index) => {
      const edu = currentLanguage === "ja" ? { ...sourceEducation, ...EDUCATION_TRANSLATIONS[index] } : sourceEducation;
      return `
    <div class="timeline-item reveal">
      <span class="timeline-date">${edu.date}</span>
      <h3 class="timeline-title">${edu.degree}</h3>
      <span class="timeline-org">${edu.university}</span>
      <p class="timeline-desc">${edu.field}</p>
    </div>
  `;
    }
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
  const sourceProject = PROJECTS[index];
  if (!sourceProject) return;
  const project = getLocalizedProject(sourceProject);

  modalBody.innerHTML = `
    <div class="modal-media">
      <img src="${project.image}" alt="${currentLanguage === "ja" ? `${project.title}の画像` : `${project.title} preview`}" loading="lazy" />
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

const sections = ["home", "about", "skills", "experience", "projects", "contact"]
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

  document.getElementById("projectFilters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    projectFilterState.current = btn.dataset.filter;
    document.querySelectorAll("#projectFilters .filter-btn").forEach((filter) => {
      const active = filter === btn;
      filter.classList.toggle("is-active", active);
      filter.setAttribute("aria-selected", String(active));
    });
    renderProjects();
    initScrollReveal();
  });

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
