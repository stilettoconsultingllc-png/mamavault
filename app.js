const dashboardModules = [
  {
    icon: "🧸",
    title: "Child Safety Packet",
    description: "Snapshot packet with allergies, medications, care plan, and pickup instructions.",
    status: "Ready",
    cta: "Open",
  },
  {
    icon: "🩺",
    title: "Doctor’s Hub",
    description: "Mock timeline for visits, immunizations, pediatric contacts, and reminders.",
    status: "Needs update",
    cta: "Review",
  },
  {
    icon: "📚",
    title: "School Hub",
    description: "Track schedules, teacher notes, permission slips, and classroom updates.",
    status: "2 missing",
    cta: "Fix Now",
  },
  {
    icon: "💌",
    title: "MamaVault Email Hub",
    description: "Prototype inbox view for school, clinic, and caregiver message summaries.",
    status: "New message",
    cta: "Open Inbox",
  },
  {
    icon: "🗂️",
    title: "Document Vault",
    description: "Central placeholder for IDs, insurance cards, and emergency forms.",
    status: "Secure",
    cta: "View Files",
  },
  {
    icon: "☎️",
    title: "Emergency Contacts",
    description: "Quick-call list for guardians, family backups, and trusted neighbors.",
    status: "Ready",
    cta: "Call List",
  },
];

const dashboardCards = document.getElementById("dashboardCards");

dashboardModules.forEach((module) => {
  const card = document.createElement("article");
  card.className = "dashboard-card";
  card.innerHTML = `
    <div class="card-accent" aria-hidden="true"></div>
    <div class="card-top">
      <span class="card-icon" aria-hidden="true">${module.icon}</span>
      <span class="card-badge">${module.status}</span>
    </div>
    <h3>${module.title}</h3>
    <p>${module.description}</p>
    <button class="card-action" aria-label="${module.cta} for ${module.title}">${module.cta}</button>
  `;
  dashboardCards.appendChild(card);
});
