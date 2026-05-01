const dashboardModules = [
  {
    icon: "🧸",
    title: "Child Safety Packet",
    description: "Snapshot packet with allergies, medications, care plan, and pickup instructions.",
    status: "Ready to share",
    cta: "Open Packet",
  },
  {
    icon: "🩺",
    title: "Doctor’s Hub",
    description: "Mock timeline for visits, immunizations, pediatric contacts, and reminders.",
    status: "2 upcoming reminders",
    cta: "View Timeline",
  },
  {
    icon: "📚",
    title: "School Hub",
    description: "Track schedules, teacher notes, permission slips, and classroom updates.",
    status: "3 new notes",
    cta: "See School Updates",
  },
  {
    icon: "💌",
    title: "MamaVault Email Hub",
    description: "Prototype inbox view for school, clinic, and caregiver message summaries.",
    status: "Daily digest on",
    cta: "Read Digest",
  },
  {
    icon: "🗂️",
    title: "Document Vault",
    description: "Central placeholder for IDs, insurance cards, and emergency forms.",
    status: "Last synced today",
    cta: "Browse Vault",
  },
  {
    icon: "☎️",
    title: "Emergency Contacts",
    description: "Quick-call list for guardians, family backups, and trusted neighbors.",
    status: "All numbers verified",
    cta: "Open Contacts",
  },
];

const dashboardCards = document.getElementById("dashboardCards");

dashboardModules.forEach((module) => {
  const card = document.createElement("article");
  card.className = "dashboard-card";
  card.innerHTML = `
    <div class="card-top">
      <span class="card-icon" aria-hidden="true">${module.icon}</span>
      <span class="card-badge">${module.status}</span>
    </div>
    <h3>${module.title}</h3>
    <p>${module.description}</p>
    <a href="#" class="card-link" aria-label="${module.cta} for ${module.title}">
      ${module.cta}
      <span aria-hidden="true">→</span>
    </a>
  `;
  dashboardCards.appendChild(card);
});
