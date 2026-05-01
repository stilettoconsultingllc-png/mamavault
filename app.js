// Local mock data for prototype display only.
const mockData = {
  children: [
    { id: 1, name: "Avery Johnson" },
    { id: 2, name: "Mia Johnson" }
  ],
  medicalRecords: [
    { id: 1, childId: 1, type: "Vaccination" },
    { id: 2, childId: 2, type: "Checkup" }
  ],
  schoolRecords: [{ id: 1, childId: 1, school: "Sunrise Elementary" }],
  emergencyContacts: [
    { id: 1, name: "Jordan Smith", relation: "Aunt" },
    { id: 2, name: "Noah Lee", relation: "Neighbor" }
  ]
};

const landing = document.getElementById("landing");
const app = document.getElementById("app");
const enterAppButton = document.getElementById("enterAppButton");
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const pageTitle = document.getElementById("pageTitle");

// Enter the dashboard from the landing page.
enterAppButton.addEventListener("click", () => {
  landing.classList.add("hidden");
  app.classList.remove("hidden");
});

// Basic client-side page switcher for this prototype.
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const pageId = link.dataset.page;

    navLinks.forEach((button) => button.classList.remove("active"));
    link.classList.add("active");

    pages.forEach((page) => {
      page.classList.remove("visible");
      page.style.display = "none";
    });

    const currentPage = document.getElementById(pageId);
    currentPage.classList.add("visible");
    currentPage.style.display = "block";
    pageTitle.textContent = link.textContent;
  });
});

// Fill dashboard cards with mock totals.
document.getElementById("childrenCount").textContent =
  `${mockData.children.length} children in mock data.`;
document.getElementById("medicalCount").textContent =
  `${mockData.medicalRecords.length} records in mock data.`;
document.getElementById("schoolCount").textContent =
  `${mockData.schoolRecords.length} records in mock data.`;
document.getElementById("contactCount").textContent =
  `${mockData.emergencyContacts.length} contacts in mock data.`;

// Helper to fill child selector dropdowns using the same mock list.
function populateChildSelect(selectId) {
  const select = document.getElementById(selectId);

  mockData.children.forEach((child) => {
    const option = document.createElement("option");
    option.value = child.id;
    option.textContent = child.name;
    select.append(option);
  });
}

populateChildSelect("medicalChildSelect");
populateChildSelect("schoolChildSelect");
populateChildSelect("documentsChildSelect");

// Show dashboard content by default when app opens.
document.getElementById("dashboard").style.display = "block";
