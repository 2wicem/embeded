/**
 * Portfolio content for Michael Mungai Njoroge.
 * Dopekit is the featured, public project.
 */

export const site = {
  name: "Michael Mungai Njoroge",
  role: "Full-stack web developer",
  oneLiner:
    "I build products people can actually book, pay, and run a business on — React in the browser, Django and PostgreSQL behind it.",
  summary:
    "Freelance full-stack developer. I ship the whole path: interface, API, database, and admin. Dopekit is the clearest proof — a beauty-services booking product for Kenya, now public on GitHub.",
  location: "Kenya",
  workMode: "Remote, hybrid, or on-site in Kenya",
  availability: "Actively interviewing",
  startDate: "Can start immediately",
  workAuth: "Kenyan citizen · open to remote worldwide",
  email: "",
  phone: "",
  website: "https://github.com/2wicem",
  resumeHref: "/resume",
  languages: ["English"],
  socials: {
    linkedin: "",
    github: "https://github.com/2wicem",
  },
  seeking: [
    "Full-stack web",
    "React",
    "Django / Python",
  ],
  now: "Looking for a full-stack role where I own a product, not a ticket queue. Open to referrals.",
} as const;

export const featuredProject = {
  name: "Dopekit",
  tag: "Featured project",
  blurb: "Booking product for indoor and outdoor beauty services in Kenya.",
  repo: "https://github.com/2wicem/Dopekit",
  live: "https://www.dopekit.com",
};

export const facts = [
  { label: "Based in", value: site.location },
  { label: "Work mode", value: site.workMode },
  { label: "Availability", value: site.availability },
  { label: "Authorization", value: site.workAuth },
] as const;

export const highlights = [
  {
    stat: "01",
    label: "Featured work",
    text: "Dopekit — React + Django booking for beauty services in Kenya. Repo is public.",
  },
  {
    stat: "02",
    label: "What I want",
    text: site.seeking.join(" · "),
  },
  {
    stat: "03",
    label: "How to reach me",
    text: "GitHub is fastest until email is on this page. Send the role, stack, and location in the first message.",
  },
];

export type Project = {
  title: string;
  timeframe: string;
  stack: string[];
  problem: string;
  work: string;
  outcome: string;
  href?: string;
  repo?: string;
  live?: string;
  featured?: boolean;
  sample?: boolean;
};

export const projects: Project[] = [
  {
    featured: true,
    title: "Dopekit",
    timeframe: "2024 — Present",
    stack: ["React", "Vite", "Bootstrap 5", "Django 5", "PostgreSQL"],
    problem:
      "Indoor and outdoor beauty services in Kenya still live on phone calls and walk-ins. Clients needed to see prices in KSH and book without chasing someone on WhatsApp.",
    work: "I built the full stack. React + Vite frontend with service listing and a booking modal (name, phone, location, service). Django 5 API and admin on PostgreSQL so bookings land in a dashboard staff can use. Deploy config for Railway and Render is in the repo.",
    outcome:
      "A real product, not a tutorial clone: clients can book, staff can manage requests in Django admin, and the source is public for a recruiter to open.",
    repo: featuredProject.repo,
    live: featuredProject.live,
    href: featuredProject.repo,
  },
];

export type Job = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  sample?: boolean;
};

export const experience: Job[] = [
  {
    company: "Freelance",
    title: "Full-stack web developer",
    period: "2022 — Present",
    location: "Kenya · Remote",
    bullets: [
      "Designed and shipped Dopekit, a React + Django booking product for beauty services in Kenya.",
      "Own UI, API, PostgreSQL, admin, and deploy — not only the front of the page.",
      "Stack I use in production: HTML, CSS, JavaScript, React, Python, Django, Bootstrap, Tailwind, Git, Linux.",
    ],
  },
];

export const education: {
  school: string;
  credential: string;
  period: string;
  note?: string;
}[] = [];

export const skillGroups = [
  {
    area: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Vite", "Bootstrap", "Tailwind"],
  },
  {
    area: "Backend",
    items: ["Python", "Django", "PostgreSQL", "REST APIs"],
  },
  {
    area: "Product",
    items: ["Booking flows", "Admin dashboards", "Service catalogs"],
  },
  {
    area: "Workflow",
    items: ["Git", "Linux", "Railway / Render"],
  },
];

export const about = {
  paragraphs: [
    "I'm Michael, a freelance full-stack developer in Kenya. I care about software a small business can run tomorrow — a list of services, a form that books, a database that does not lose the request.",
    "Dopekit is the project I want you to open first. It is React on the client, Django and PostgreSQL on the server, and it is public so you do not have to take my word for it.",
    "If you are hiring for full-stack web — especially React plus Python/Django — that is the role I want. I am open to referrals.",
  ],
  values: [
    { title: "Ship the path", text: "UI, API, database, admin. A pretty page with nowhere to save a booking is unfinished." },
    { title: "Local, then global", text: "Dopekit prices in KSH and takes Kenyan phone numbers because that is the market." },
    { title: "Public proof", text: "If I can open the repo, I will. Recruiters should not have to guess." },
  ],
};

export const recruiter = {
  evaluateIn20: [
    "Open Dopekit on GitHub. Read the README, then skim Frontend/ and Backend/.",
    "Open the resume page on this site. Same facts, tighter.",
    "If the role is full-stack (React, Django, or similar), message me on GitHub with stack, location, and range.",
  ],
  goodFit: [
    "Full-stack web on a real product",
    "React frontend with a Python/Django or similar API",
    "A team that lets one person own a feature from UI to database",
  ],
  badFit: [
    "Unpaid trials or 'exposure'",
    "Roles that are 90% people-management with no technical work",
    "Anything you cannot describe in one sentence",
  ],
  referralBlurb: `I'm referring Michael Mungai Njoroge for full-stack web roles (React, Django, PostgreSQL). His featured project is Dopekit, a booking product for beauty services in Kenya: ${featuredProject.repo} — GitHub: ${site.socials.github}`,
};

export const initials = site.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0] ?? "")
  .join("")
  .slice(0, 2)
  .toUpperCase();

export function mailtoHire() {
  if (!site.email) return site.socials.github;
  const subject = `Role for ${site.name} — from your portfolio`;
  const body = `Hi ${site.name.split(" ")[0]},\n\nI'm reaching out about a ${site.role} role.\n\nTeam / company:\nLocation / work mode:\nStack:\nRange (if you can share):\n\n`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function mailtoReferral() {
  const subject = `Referral: ${site.name} — ${site.role}`;
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(recruiter.referralBlurb)}`;
}
