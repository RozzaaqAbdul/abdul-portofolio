export const hero = {
  greeting: "Hi, I'm Abdul Rozzaaq",
  name: "Abdul Rozzaaq",
  role: "QA Automation Engineer",
  roleAlt: "SDET",
  bio: "Specialist in building web automation frameworks and orchestrating reliable testing ecosystems. Experienced in designing CI/CD pipelines and managing containerized infrastructure to ensure software quality from development to deployment.",
  location: "Indonesia",
  email: "hello@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
};

export const experience = [
  {
    role: "QA Automation Engineer / SDET",
    company: "Infomedia Nusantara",
    period: "2025 — Present",
    points: [
      "Designed a Page Object Model-based Playwright framework in TypeScript, cutting regression execution from 3 days manual to under 4 hours automated.",
      "Mapped hundreds of test cases structurally in Kiwi TCMS, raising requirement coverage on the Studio Form module to 90%+.",
      "Integrated suites into GitLab CI/CD, catching blockers pre-merge and reducing post-release defects by ~40%.",
    ],
  },
  {
    role: "Software Quality Assurance Engineer",
    company: "Mitramas Infosys Global",
    period: "2024 — 2025",
    points: [
      "Drafted and executed comprehensive test plans for web and mobile releases, covering functional, regression, and smoke cycles.",
      "Deployed an internal QA dashboard on Google Kubernetes Engine via Docker images and a Jenkins pipeline, removing manual status reporting.",
      "Collaborated with developers on triage and root-cause analysis, shortening average bug turnaround time.",
    ],
  },
];

export const skillCategories = {
  "Test Automation": [
    "Playwright (Page Object Model frameworks)",
    "TypeScript & Python test suites",
    "Web + Android (Kotlin, Jetpack Compose) testing",
    "Jest + Supertest framework",
  ],
  "Test Management": [
    "Kiwi TCMS — structural test case mapping",
    "TestRail — plans, runs & traceability",
    "Requirement coverage reporting",
  ],
  "CI/CD & DevOps": [
    "Jenkins & GitLab CI/CD pipelines",
    "Docker containerized test environments",
    "Google Kubernetes Engine (GKE) deployments",
  ],
  "AI & Tooling": [
    "AI-assisted testing (OpenCode, Antigravity, and Orca)",
    "Android Studio & ADB tooling",
    "Bash scripting for pipeline automation",
  ],
};

export interface Project {
  title: string;
  image: string;
  link: string;
  preview: string;
  status: string;
  description: string;
  impact: string;
}

export const projects: Project[] = [
  {
    title: "Web Recruitment Automation",
    image:
      "https://placehold.co/600x400/1a1a1a/a476ff?text=Recruitment+Automation",
    link: "https://github.com",
    preview: "https://example.com",
    status: "Deployed",
    description:
      "Page Object Model automation architecture for the Studio Form recruitment module, built on Playwright + TypeScript.",
    impact: "Regression time cut from 3 days to < 4 hours; 300+ test cases mapped in Kiwi TCMS.",
  },
  {
    title: "Omnix Tenancy QA",
    image: "https://placehold.co/600x400/1a1a1a/a476ff?text=Omnix+Tenancy+QA",
    link: "https://github.com",
    preview: "https://example.com",
    status: "Deployed",
    description:
      "Comprehensive test plans and test case mapping for the Document Template module across multi-tenant flows.",
    impact: "Requirement coverage raised to 90%+ with full traceability in Kiwi TCMS.",
  },
  {
    title: "QA Dashboard on GKE",
    image: "https://placehold.co/600x400/1a1a1a/a476ff?text=QA+Dashboard+GKE",
    link: "https://github.com",
    preview: "https://example.com",
    status: "Deployed",
    description:
      "Kubernetes manifests, Docker configuration, and shell scripts orchestrated through a Jenkins pipeline.",
    impact: "Eliminated manual status reporting; live QA metrics for the whole team.",
  },
];

export const logoWallTechs = [
  "playwright",
  "typeScript",
  "jest",
  "supertest",
  "python",
  "golang",
  "jenkins",
  "gitlab",
  "docker",
  "kubernetes",
  "android",
  "reactNative",
  "bash",
  "git",
];

export const contact = {
  blurb:
    "Need someone to level up your test automation or CI/CD pipeline? Feel free to reach out.",
  location: "Indonesia",
};
