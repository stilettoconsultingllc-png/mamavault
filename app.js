const dashboardModules = [
  {
    title: "Child Safety Packet",
    description: "Snapshot packet with allergies, medications, care plan, and pickup instructions.",
  },
  {
    title: "Doctor’s Hub",
    description: "Mock timeline for visits, immunizations, pediatric contacts, and reminders.",
  },
  {
    title: "School Hub",
    description: "Track schedules, teacher notes, permission slips, and classroom updates.",
  },
  {
    title: "MamaVault Email Hub",
    description: "Prototype inbox view for school, clinic, and caregiver message summaries.",
  },
  {
    title: "Document Vault",
    description: "Central placeholder for IDs, insurance cards, and emergency forms.",
  },
  {
    title: "Emergency Contacts",
    description: "Quick-call list for guardians, family backups, and trusted neighbors.",
  },
];

const dashboardCards = document.getElementById("dashboardCards");

dashboardModules.forEach((module) => {
  const card = document.createElement("article");
  card.className = "dashboard-card";
  card.innerHTML = `
    <h3>${module.title}</h3>
    <p>${module.description}</p>
  `;
  dashboardCards.appendChild(card);
});
