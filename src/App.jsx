import React from 'react';

// This file contains all mock data for the first prototype.
const quickActions = [
  'Add Child',
  'Add Medical Record',
  'Add School Record',
  'Add Emergency Contact',
  'Upload Document',
  'Create Safety Packet',
];

const children = [
  {
    name: 'Amelia Rose Carter',
    dob: '2017-08-12',
    allergies: 'Peanuts, Penicillin',
    conditions: 'Mild asthma',
    medications: 'Albuterol inhaler (as needed)',
    doctor: 'Dr. Lila Thompson',
    school: 'Oak Meadow Elementary',
    notes: 'Prefers morning appointments.',
    height: "4'2\"",
    weight: '54 lbs',
    eyeColor: 'Brown',
    hairColor: 'Dark Brown',
    marks: 'Small birthmark on left shoulder',
  },
  {
    name: 'Noah James Carter',
    dob: '2020-03-05',
    allergies: 'No known allergies',
    conditions: 'None reported',
    medications: 'Daily multivitamin',
    doctor: 'Dr. Elena Ruiz',
    school: 'Little Sprouts Preschool',
    notes: 'Comfort item: blue blanket.',
    height: "3'4\"",
    weight: '37 lbs',
    eyeColor: 'Hazel',
    hairColor: 'Light Brown',
    marks: 'Tiny scar on right knee',
  },
];

const emergencyContacts = [
  { name: 'Jordan Carter', relationship: 'Parent', phone: '(555) 201-9901', email: 'jordan@example.com', pickup: 'Yes', notes: 'Primary emergency contact.' },
  { name: 'Maya Carter', relationship: 'Parent', phone: '(555) 201-9902', email: 'maya@example.com', pickup: 'Yes', notes: 'Secondary emergency contact.' },
  { name: 'Aunt Priya Singh', relationship: 'Aunt', phone: '(555) 313-4008', email: 'priya@example.com', pickup: 'Yes', notes: 'Can pick up after school.' },
  { name: 'Tom Carter', relationship: 'Grandparent', phone: '(555) 244-1188', email: 'tom@example.com', pickup: 'No', notes: 'Emergency calls only.' },
];

const inbox = [
  { sender: 'Dr. Thompson Office', child: 'Amelia', category: 'Doctor', date: 'Apr 28, 2026', preview: 'Reminder: annual wellness check due next week.' },
  { sender: 'Ms. Kline', child: 'Amelia', category: 'Teacher', date: 'Apr 27, 2026', preview: 'Field trip permission slip attached for Friday.' },
  { sender: 'Little Sprouts Preschool', child: 'Noah', category: 'School', date: 'Apr 26, 2026', preview: 'Monthly progress summary and activity calendar.' },
  { sender: 'SmileBright Pediatric Dental', child: 'Noah', category: 'Dentist', date: 'Apr 24, 2026', preview: '6-month cleaning appointment confirmation.' },
];

const documents = [
  { title: 'Amelia Birth Certificate', category: 'Birth certificate', child: 'Amelia', dateAdded: 'Apr 18, 2026', status: 'Complete' },
  { title: 'Noah Insurance Card - Front/Back', category: 'Insurance cards', child: 'Noah', dateAdded: 'Apr 16, 2026', status: 'Complete' },
  { title: 'Amelia Shot Record 2026', category: 'Shot records', child: 'Amelia', dateAdded: 'Apr 10, 2026', status: 'Needs review' },
  { title: 'Summer Camp Medical Form', category: 'Camp forms', child: 'Noah', dateAdded: 'Apr 30, 2026', status: 'Missing signature' },
  { title: 'Custody Order Summary', category: 'Legal/custody paperwork', child: 'Family', dateAdded: 'Apr 12, 2026', status: 'Complete' },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section-card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <h1>MamaVault</h1>
        <p>Warm, secure family records dashboard prototype (mock data only)</p>
      </header>

      <nav className="nav-grid">
        {['Family Dashboard', 'Child Profiles', 'Child Safety Packet', "Doctor's Hub", 'School Hub', 'MamaVault Email Hub', 'Document Vault', 'Emergency Contacts'].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{item}</a>
        ))}
      </nav>

      <main className="content-grid">
        <Section id="family-dashboard" title="1) Family Dashboard">
          <p className="welcome">Welcome back, Carter Family. Your family safety records are organized and ready.</p>
          <div className="metrics">
            <article><h3>Total Children</h3><p>2</p></article>
            <article><h3>Upcoming Appointments</h3><p>3</p></article>
            <article><h3>Missing Documents</h3><p>2</p></article>
            <article><h3>Recent Activity</h3><p>7 updates this week</p></article>
            <article><h3>Emergency-Ready Status</h3><p className="badge">83% Ready</p></article>
          </div>
          <div className="actions">{quickActions.map((a) => <button key={a}>{a}</button>)}</div>
        </Section>

        <Section id="child-profiles" title="2) Child Profiles">
          <div className="cards-grid">{children.map((child) => (
            <article key={child.name} className="detail-card"><div className="photo-placeholder">Photo</div><h3>{child.name}</h3><p><strong>Date of Birth:</strong> {child.dob}</p><p><strong>Allergies:</strong> {child.allergies}</p><p><strong>Medical Conditions:</strong> {child.conditions}</p><p><strong>Medications:</strong> {child.medications}</p><p><strong>Doctor:</strong> {child.doctor}</p><p><strong>School:</strong> {child.school}</p><p><strong>Notes:</strong> {child.notes}</p></article>
          ))}</div>
        </Section>

        <Section id="child-safety-packet" title="3) Child Safety Packet">
          <div className="cards-grid">{children.map((child) => (
            <article key={`${child.name}-packet`} className="detail-card"><div className="photo-placeholder">Child Photo</div><h3>{child.name}</h3><p><strong>DOB:</strong> {child.dob}</p><p><strong>Height:</strong> {child.height}</p><p><strong>Weight:</strong> {child.weight}</p><p><strong>Eye Color:</strong> {child.eyeColor}</p><p><strong>Hair Color:</strong> {child.hairColor}</p><p><strong>Identifying Marks:</strong> {child.marks}</p><p><strong>Fingerprint Upload:</strong> Placeholder</p><p><strong>Emergency Contacts:</strong> Jordan Carter, Maya Carter</p><p><strong>Allergies:</strong> {child.allergies}</p><p><strong>Medical Conditions:</strong> {child.conditions}</p><p><strong>Medications:</strong> {child.medications}</p><p><strong>Custody Notes:</strong> Placeholder for legal guidance and exchange notes.</p><div className="button-row"><button>View Emergency Packet</button><button>Download Safety Packet</button></div></article>
          ))}</div>
        </Section>

        <Section id="doctor-s-hub" title="4) Doctor's Hub">
          <ul className="list-block">
            <li><strong>Pediatrician:</strong> Dr. Lila Thompson</li>
            <li><strong>Dentist:</strong> SmileBright Pediatric Dental</li>
            <li><strong>Specialists:</strong> Pediatric Pulmonology Associates</li>
            <li><strong>Shot records:</strong> Stored placeholders for each child.</li>
            <li><strong>Medications:</strong> Albuterol inhaler, multivitamin</li>
            <li><strong>Allergies:</strong> Peanuts, Penicillin</li>
            <li><strong>Medical history:</strong> Basic mock timeline cards to be added next.</li>
            <li><strong>Insurance info:</strong> Placeholder (do not store real policy data in prototype).</li>
            <li><strong>Doctor visit notes:</strong> Last visit notes with summary placeholders.</li>
            <li><strong>Upcoming appointments:</strong> May 4 (Amelia), May 8 (Noah), May 13 (Dental)</li>
            <li><strong>Upload medical record:</strong> Placeholder uploader card.</li>
          </ul>
        </Section>

        <Section id="school-hub" title="5) School Hub">
          <ul className="list-block">
            <li><strong>School name:</strong> Oak Meadow Elementary, Little Sprouts Preschool</li>
            <li><strong>Teacher name:</strong> Ms. Kline, Mr. Alvarez</li>
            <li><strong>Grade:</strong> 3rd Grade, Pre-K</li>
            <li><strong>School phone/email:</strong> (555) 777-1212 / office@oakmeadow.edu</li>
            <li><strong>Report cards:</strong> Placeholder cards</li>
            <li><strong>IEP/504 documents:</strong> Placeholder secure document slots</li>
            <li><strong>Permission slips:</strong> Spring field trip pending signature</li>
            <li><strong>School notes:</strong> Weekly updates section</li>
            <li><strong>Meeting notes:</strong> Parent-teacher meeting summary placeholder</li>
            <li><strong>Upload school document:</strong> Placeholder uploader card</li>
          </ul>
        </Section>

        <Section id="mamavault-email-hub" title="6) MamaVault Email Hub">
          <div className="cards-grid">{inbox.map((message, index) => (
            <article className="detail-card" key={index}><h3>{message.sender}</h3><p><strong>Child:</strong> {message.child}</p><p><strong>Category:</strong> {message.category}</p><p><strong>Date:</strong> {message.date}</p><p>{message.preview}</p><button>Save to Child Vault</button></article>
          ))}</div>
        </Section>

        <Section id="document-vault" title="7) Document Vault">
          <div className="cards-grid">{documents.map((doc) => <article className="detail-card" key={doc.title}><h3>{doc.title}</h3><p><strong>Category:</strong> {doc.category}</p><p><strong>Child:</strong> {doc.child}</p><p><strong>Date Added:</strong> {doc.dateAdded}</p><p><strong>Status:</strong> <span className="badge">{doc.status}</span></p></article>)}</div>
          <p className="placeholder-row">Additional placeholders: medical records, school forms, emergency documents.</p>
        </Section>

        <Section id="emergency-contacts" title="8) Emergency Contacts">
          <div className="cards-grid">{emergencyContacts.map((c) => <article className="detail-card" key={c.name}><h3>{c.name}</h3><p><strong>Relationship:</strong> {c.relationship}</p><p><strong>Phone:</strong> {c.phone}</p><p><strong>Email:</strong> {c.email}</p><p><strong>Authorized Pickup:</strong> {c.pickup}</p><p><strong>Notes:</strong> {c.notes}</p></article>)}</div>
        </Section>
      </main>
    </div>
  );
}
