export const resume = {
  name: "Santhanam K",
  role: "Senior Android Engineer · Kotlin · Jetpack Compose · KMP",
  location: "Chennai, India",
  phone: "+91 94449 92626",
  summary:
    "Senior Android engineer with 7+ years shipping production mobile apps across VPN, mobile security, banking, healthcare, and marketplace domains. Deep expertise in Kotlin, Jetpack Compose, Compose Multiplatform, Kotlin Multiplatform (KMP), MVVM/Clean Architecture, Coroutines, Flow, Hilt, and Retrofit. Proven track record supporting apps with 10M+ downloads, driving crash-free improvements, and reducing release cycles through AI-assisted engineering, modularization, and CI/CD discipline.",

  skills: [
    { label: "Languages", value: "Kotlin 2.2+, Java, JavaScript, SQL, Python" },
    {
      label: "Android",
      value:
        "Android SDK, Jetpack Compose, Navigation 3, Material 3, Material Expressive, ViewModel, DataStore, Room, WorkManager, Paging 3, CameraX",
    },
    {
      label: "Cross-Platform",
      value:
        "Kotlin Multiplatform (KMP), Compose Multiplatform (iOS stable, Desktop, Web Beta), Compose Hot Reload, React Native",
    },
    {
      label: "Architecture",
      value:
        "MVI, MVVM, Clean Architecture, Modularization, Unidirectional Data Flow, Repository Pattern, SOLID, Dependency Injection",
    },
    { label: "Async & Reactive", value: "Kotlin Coroutines, Flow, StateFlow, SharedFlow" },
    {
      label: "Networking & Data",
      value: "Retrofit, OkHttp, Ktor, REST, GraphQL, Kotlinx Serialization, Room, Realm, Firebase",
    },
    { label: "DI & Tooling", value: "Hilt, Dagger 2, Koin, Gradle KTS, Version Catalogs, KSP" },
    {
      label: "Security",
      value:
        "VPN protocols, EncryptedSharedPreferences, Biometric APIs, OAuth2, SSL Pinning, Secure Auth Flows",
    },
    {
      label: "Testing & Quality",
      value:
        "JUnit, MockK, Espresso, Compose UI Tests, CMP UI Testing v2, Turbine, LeakCanary, Detekt, ktlint",
    },
    {
      label: "CI/CD & Release",
      value:
        "GitHub Actions, Jenkins, Bitrise, Azure DevOps, Play Console, Firebase App Distribution, Crashlytics",
    },
    {
      label: "AI-Assisted Dev",
      value:
        "Claude, Cursor, GitHub Copilot, Junie, local LLMs, prompt-driven refactoring, AI code review, test scaffolding",
    },
    {
      label: "Tools",
      value: "Git, GitHub, Bitbucket, Jira, Confluence, Figma, Postman, Android Studio, Charles Proxy",
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      org: "Gen Digital (Norton & Avast) · Chennai, India",
      period: "Jan 2025 - Present",
      bullets: [
        "Ship VPN and security features for Norton VPN, Avast VPN, and Norton 360 Security, serving 50M+ global consumers on Android.",
        "Build reactive UI with Jetpack Compose and Kotlin Coroutines/Flow, aligning to Clean Architecture and modular Gradle setup for faster feature delivery.",
        "Harden auth, kill-switch, and connection flows; reduce VPN handshake failures and improve crash-free sessions through targeted debugging and telemetry.",
        "Drive AI-first workflows using local LLMs and Copilot for code review, refactoring, unit test scaffolding, and documentation, cutting routine engineering time by ~30%.",
        "Partner with QA, product, design, and platform teams to deliver on-time releases through GitHub Actions CI, code reviews, and Play Console rollout monitoring.",
      ],
    },
    {
      title: "Engineer - Mobile Banking",
      org: "Temenos Pvt Ltd · Chennai, India",
      period: "May 2023 - Dec 2024",
      bullets: [
        "Delivered banking features across Android and iOS using Kotlin Multiplatform (KMP) and Compose Multiplatform, sharing 70%+ business logic across platforms.",
        "Implemented secure login, biometric auth, push notifications, and account integration flows for regulated banking clients.",
        "Built UI with Temenos Visualizer and integrated backend services via Quantum Fabric, plus REST APIs, reducing integration turnaround for new client onboarding.",
        "Supported production incidents with root-cause analysis, hotfix delivery, and release documentation for enterprise banking rollouts.",
      ],
    },
    {
      title: "Senior Software Engineer",
      org: "Vitalic Health Pvt Ltd · Chennai, India",
      period: "Nov 2022 - Apr 2023",
      bullets: [
        "Revamped business-critical modules of a prescription and OTC medicine Android app in Kotlin and Java, improving app stability and checkout reliability.",
        "Refactored network layer to Retrofit + Coroutines, reducing API failure rate and improving cold-start performance.",
        "Built reusable UI libraries and led peer code reviews to raise code quality and shorten PR merge time.",
      ],
    },
    {
      title: "Software Engineer",
      org: "GlobalLogic Pvt Ltd · Chennai, India",
      period: "Jun 2022 - Nov 2022",
      bullets: [
        "Contributed to a React Native app and embedded WebView flows for a global digital transformation client.",
        "Debugged native bridge issues and coordinated cross-timezone delivery with distributed engineering teams.",
      ],
    },
    {
      title: "Software Developer - Android",
      org: "Sulekha Pvt Ltd · Chennai, India",
      period: "Jan 2021 - Jun 2022",
      bullets: [
        "Shipped Android features for Sulekha, a local services marketplace with 10M+ downloads and 4.3★ Play Store rating.",
        "Integrated Google Maps SDK and Firebase Cloud Messaging to power location-based discovery and re-engagement notifications.",
        "Built custom views and reusable libraries, including a screen-sharing onboarding flow that reduced customer drop-off during pandemic-era remote signups.",
        "Mentored 3 junior Android developers on Kotlin, MVVM, and Git workflows; owned code reviews and coding standards for the Android squad.",
      ],
    },
    {
      title: "Android Developer",
      org: "VASS Software's & Solutions · Chennai, India",
      period: "Sep 2019 - Dec 2020",
      bullets: [
        "Built the VGM Patient Android app from scratch, covering EHR, ICD-code diagnosis, prescriptions, appointments, and medical history workflows.",
        "Integrated REST APIs and custom Android UI to streamline patient and hospital record management.",
        "Delivered backend APIs in PHP CodeIgniter with MySQL, owning full-stack feature delivery end-to-end.",
      ],
    },
  ],

  projects: [
    {
      name: "Norton VPN & Avast VPN (Gen Digital)",
      detail:
        "Android VPN client work on connection, kill-switch, and auth flows using Kotlin, Compose, and Coroutines.",
    },
    {
      name: "Norton 360 Security",
      detail:
        "Consumer security features across scan, protection, and settings surfaces with modular Gradle architecture.",
    },
    {
      name: "Temenos Mobile Banking",
      detail:
        "KMP + Compose Multiplatform banking flows with biometric auth, push notifications, and Quantum Fabric integrations.",
    },
    {
      name: "Sulekha Marketplace (10M+ downloads)",
      detail: "Maps, FCM, custom views, and screen-share onboarding for local services discovery.",
    },
    {
      name: "VGM Patient (Healthcare)",
      detail:
        "End-to-end Android + PHP/MySQL EHR app with ICD diagnosis, prescriptions, and appointments.",
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      place: "University of Madras · 2019 - 2021",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      place: "Patrician College of Arts & Science · 2016 - 2019",
    },
  ],
};
