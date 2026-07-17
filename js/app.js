/**
 * Portfolio App — Dynamic content loader
 * Update content by editing JSON files in /data/
 */

const DATA_BASE = './data/';

const ICONS = {
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
  layout: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  plug: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
};

let projectsData = [];
let currentFilter = 'all';

async function loadJSON(file) {
  const response = await fetch(`${DATA_BASE}${file}`);
  if (!response.ok) throw new Error(`Failed to load ${file}`);
  return response.json();
}

async function init() {
  try {
    const [profile, skills, experience, projects, education, aiProductivity] = await Promise.all([
      loadJSON('profile.json'),
      loadJSON('skills.json'),
      loadJSON('experience.json'),
      loadJSON('projects.json'),
      loadJSON('education.json'),
      loadJSON('ai-productivity.json')
    ]);

    projectsData = projects.items;
    renderProfile(profile);
    renderNav(profile.nav);
    renderHeroSkills(skills.heroSkills);
    renderSkills(skills);
    renderExperience(experience);
    renderProjects(projectsData);
    renderEducation(education);
    renderAI(aiProductivity);
    setupInteractions();
    setupScrollReveal();
    updateMetaTags(profile);
  } catch (error) {
    console.error('Failed to load portfolio data:', error);
    document.body.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;font-family:system-ui;background:#0a0f1a;color:#f1f5f9;">
        <div>
          <h1 style="margin-bottom:12px;">Unable to load portfolio</h1>
          <p style="color:#94a3b8;margin-bottom:20px;">Run a local server from the portfolio folder:</p>
          <code style="background:#111827;padding:12px 20px;border-radius:8px;display:inline-block;">npx serve .</code>
        </div>
      </div>`;
  }
}

function renderProfile(profile) {
  document.title = `${profile.name} | ${profile.title}`;
  document.getElementById('heroName').textContent = profile.name;
  document.getElementById('heroTitle').textContent = profile.title;
  document.getElementById('heroTagline').textContent = profile.tagline;
  document.getElementById('heroPhoto').src = profile.photo;
  document.getElementById('heroPhoto').alt = profile.name;
  document.getElementById('aboutSummary').textContent = profile.summary;
  document.getElementById('footerYear').textContent = new Date().getFullYear();
  document.getElementById('footerName').textContent = profile.name;

  document.getElementById('heroStats').innerHTML = profile.stats
    .map(s => `<div class="stat"><div class="stat__value">${s.value}</div><div class="stat__label">${s.label}</div></div>`)
    .join('');

  document.getElementById('aboutMeta').innerHTML = `
    <div class="meta-item">${ICONS.location}<span>${profile.location}</span></div>
    <div class="meta-item">${ICONS.globe}<span>${profile.languages.join(', ')}</span></div>
  `;

  document.getElementById('contactLinks').innerHTML = `
    <a href="mailto:${profile.email}" class="contact-link">${ICONS.mail}<span>${profile.email}</span></a>
    <a href="tel:${profile.phone.replace(/\s/g, '')}" class="contact-link">${ICONS.phone}<span>${profile.phone}</span></a>
    <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">${ICONS.linkedin}<span>LinkedIn Profile</span></a>
    <div class="meta-item">${ICONS.location}<span>${profile.location}</span></div>
  `;
}

function renderNav(navItems) {
  document.getElementById('navLinks').innerHTML = navItems
    .map(item => `<li><a href="#${item.id}">${item.label}</a></li>`)
    .join('');
}

const HERO_SKILL_POSITIONS = 8;

function renderHeroSkills(heroSkills) {
  const container = document.getElementById('heroFloatingSkills');
  if (!container || !heroSkills?.length) return;

  container.innerHTML = heroSkills
    .map((skill, index) => {
      const position = (index % HERO_SKILL_POSITIONS) + 1;
      const delay = (index % HERO_SKILL_POSITIONS) * 0.75;
      return `
        <div class="hero__floating-card hero__floating-card--${position}" style="animation-delay: ${delay}s">
          <span class="mono">${skill}</span>
        </div>
      `;
    })
    .join('');
}

function renderSkills(skills) {
  document.getElementById('skillsGrid').innerHTML = skills.categories
    .map(cat => `
      <article class="skill-card reveal">
        <div class="skill-card__header">
          <div class="skill-card__icon">${ICONS[cat.icon] || ICONS.server}</div>
          <h3 class="skill-card__title">${cat.name}</h3>
        </div>
        <div class="skill-tags">
          ${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </article>
    `).join('');
}

function renderExperience(experience) {
  document.getElementById('experienceTimeline').innerHTML = experience.items
    .map(item => `
      <article class="timeline-item reveal">
        <div class="timeline-item__header">
          <h3 class="timeline-item__role">${item.role}</h3>
          <span class="timeline-item__company">${item.company}</span>
          <span class="timeline-item__period">${item.period}</span>
        </div>
        <ul class="timeline-item__highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="timeline-item__tech">
          ${item.techStack.map(t => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </article>
    `).join('');
}

function renderProjects(projects) {
  const filtered = currentFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects;

  document.getElementById('projectsGrid').innerHTML = filtered
    .map(project => `
      <article class="project-card ${project.featured ? 'featured' : ''} reveal" data-id="${project.id}">
        <div class="project-card__tags">
          ${project.featured ? '<span class="project-tag project-tag--featured">Featured</span>' : ''}
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__subtitle">${project.subtitle}</p>
        <div class="project-card__meta">
          <span>${project.company}</span>
          <span>•</span>
          <span>${project.period}</span>
        </div>
        <p class="project-card__desc">${project.description}</p>
        <div class="project-card__skills">
          ${project.skills.slice(0, 5).map(s => `<span class="skill-tag">${s}</span>`).join('')}
          ${project.skills.length > 5 ? `<span class="skill-tag">+${project.skills.length - 5}</span>` : ''}
        </div>
        <div class="project-card__footer">
          View details ${ICONS.arrow}
        </div>
      </article>
    `).join('');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.id));
  });
}

function renderEducation(education) {
  document.getElementById('educationGrid').innerHTML = `
    <div class="education-list reveal">
      <h3>Education</h3>
      ${education.items.map(item => `
        <div class="edu-item">
          <div class="edu-item__degree">${item.degree}</div>
          <div class="edu-item__institution">${item.institution}</div>
          <div class="edu-item__period">${item.period}${item.location ? ` · ${item.location}` : ''}</div>
        </div>
      `).join('')}
    </div>
    <div class="cert-list reveal">
      <h3>Certifications & Training</h3>
      ${education.certifications.map(cert => `
        <div class="cert-item">
          ${ICONS.award}
          <span>${cert.name}${cert.issuer ? ` — ${cert.issuer}` : ''}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderAI(ai) {
  document.getElementById('aiSection').innerHTML = `
    <h3 class="about__ai-title">${ICONS.sparkles} ${ai.title}</h3>
    ${ai.items.map(item => `
      <div class="ai-item">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    `).join('')}
  `;
}

function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  document.getElementById('modalBody').innerHTML = `
    <div class="project-card__tags" style="margin-bottom:16px;">
      ${project.featured ? '<span class="project-tag project-tag--featured">Featured</span>' : ''}
      ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
    </div>
    <h2 class="modal__title">${project.title}</h2>
    <p class="modal__subtitle">${project.subtitle}</p>
    <div class="modal__meta">
      <span><strong>Role:</strong> ${project.role}</span>
      <span><strong>Company:</strong> ${project.company}</span>
      <span><strong>Client:</strong> ${project.client}</span>
      <span><strong>Period:</strong> ${project.period}</span>
    </div>
    <p class="modal__desc">${project.description}</p>
    <h4 class="modal__section-title">Key Contributions</h4>
    <ul class="modal__list">
      ${project.contributions.map(c => `<li>${c}</li>`).join('')}
    </ul>
    <h4 class="modal__section-title">Technologies</h4>
    <div class="modal__skills">
      ${project.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
    </div>
  `;

  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}

function setupInteractions() {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
  });

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalBackdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects(projectsData);
      setupScrollReveal();
    });
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  reveals.forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
}

function updateMetaTags(profile) {
  document.querySelector('meta[name="description"]').content =
    `${profile.name} — ${profile.title}. ${profile.tagline}`;
}

init();
