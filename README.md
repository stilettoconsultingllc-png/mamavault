# MamaVault Prototype

MamaVault is a beginner-friendly prototype web app for organizing family records in one dashboard.

> ⚠️ This project is a layout and workflow prototype only.
> Do **not** enter real sensitive child information.

## Features in this prototype

- Welcome/landing page with login-style entry button
- Dashboard layout with warm, trustworthy color palette
- Sidebar navigation pages:
  - Dashboard
  - Children
  - Medical Records
  - School Records
  - Emergency Contacts
  - Documents
  - Settings
- Prototype forms for each section
- Local mock data shown in dashboard cards and child selectors

## Tech stack

- HTML
- CSS
- Vanilla JavaScript

No backend and no real database are connected yet.

## Run locally

1. Clone this repo.
2. Open the project folder.
3. Start a local static web server.

### Option A (Python 3)

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option B (VS Code Live Server)

1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **Open with Live Server**.

## File overview

- `index.html` — app structure, pages, navigation, and forms
- `styles.css` — warm dashboard styling and responsive layout
- `app.js` — mock data and simple page switching logic
