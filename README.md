# Event RSVP & Check-in Platform

A **full-stack web application** to manage event registrations and attendance for college events.

---

## 💡 **Concept**

- Participants register online for college events and receive a unique QR code pass.
- At the event gate, organizers scan the QR code to verify and mark attendance.

---

##  **Core Features**

### 👤 For Users (Participants)
- **Register for an event:** Fill name, email, ID, etc.
- **Receive confirmation mail:** Get a unique QR code.
- **View event details:** Access event information on the portal.

### 🧑‍💼 For Organizers (Admins)
- **Login panel:** Manage events securely.
- **Dashboard:**
  - Total registrations
  - Number of check-ins
  - List of attendees
- **QR Code scanning:** Page to scan QR codes and mark attendance in DB.
- **Export attendance list:** Download data as CSV/Excel.

---

## 🛠 **Tech Stack**

| Layer          | Technology                                      |
|----------------|-------------------------------------------------|
| **Frontend**   | React.js, HTML, CSS, JS, Bootstrap/Tailwind     |
| **Backend**    | Node.js, Express.js                             |
| **Database**   | MongoDB                                         |
| **QR Code**    | [qrcode](https://www.npmjs.com/package/qrcode)  |
| **QR Scanner** | react-qr-reader / html5-qrcode                  |
| **Auth**       | JWT (admin login)                               |
| **Deployment** | Frontend: Vercel/Netlify<br>Backend: Render/Railway |
| **Optional**   | Nodemailer (send QR codes via email)            |

---

## 🔄 **System Flow**

1. **User Registration:** Participant fills form, data saved in DB.
2. **QR Code Generation:** Backend generates unique QR code, stores it, emails/displays to user.
3. **Organizer Dashboard:** QR scanner opens, scans code, verifies from DB, marks `checkedIn: true`.
4. **Real-Time Updates:** Dashboard displays up-to-date stats.

---

## 📊 **Dashboard Example**

- **Total Registrations:** 120
- **Checked-in:** 85
- **Pending:** 35
- **Export:** [Download CSV/Excel]

---

## 📫 **Contact & Contributions**

This project was developed with great collaboration and teamwork as part of our Full Stack Web Development Mini Project.
It represents our combined effort in frontend, backend, and database integration to build a complete event management solution.

## 🤝 **Team Collaboration**

This project is a result of continuous brainstorming, coding, and coordination among our team members — reflecting our shared learning and passion for technology.
We worked together to design, develop, and deploy the Event RSVP & Check-in Platform, ensuring every component was built collaboratively.


---

# SETUP

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
