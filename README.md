# Nanny-Services

🧸 Nanny Service — Babysitter Finder App
📖 About the Project

Nanny Service is a web application designed to help parents find trusted babysitters (nannies) in their area.
The platform allows users to:

Browse a list of available nannies with detailed profiles.

Read reviews and ratings from other parents.

Add nannies to their Favorites list (for logged-in users).

Schedule personal appointments with a chosen nanny through a contact form.

The project was built as part of a front-end React assignment focusing on component architecture, state management, and integration with Firebase.

⚙️ Main Features

🔍 Browse Nannies — View cards with information such as experience, education, price, and reviews.

❤️ Favorites System — Logged-in users can add/remove nannies from favorites (stored via localStorage or Firestore).

🔒 Authentication — Firebase authentication (login & registration via email and password).

💬 Appointment Form — Modal form for sending a meeting request to a nanny (validated with react-hook-form + yup).

🪶 Responsive UI — Fully adaptive layout built with CSS modules.

🔔 Toasts & Notifications — User-friendly feedback using react-hot-toast.

💾 Persistent Data — Favorites and user sessions remain after page reload.

🧩 Technologies Used
Category Technologies
Core React, React Router DOM
State & Forms React Hook Form, Yup
UI CSS Modules, Shadcn/UI (optional), React Icons
Auth & Data Firebase Authentication, Firestore Database
Notifications React Hot Toast
Tools Vite / CRA, ESLint, Prettier
🎨 Design & Layout

The design is based on a clean and friendly babysitting service layout.
You can find the UI prototype here:
👉 Figma Mockup (insert your link here)

📋 Technical Specification (Requirements)
Functional Requirements

Display a list of babysitters from Firestore (or a local JSON file).

Each nanny card contains:

Photo, name, age, experience, education, price per hour, rating, location.

“Read more” button expands the card to show reviews.

“Make an appointment” button opens a modal with a validated form.

Authentication system:

Registration and Login using Firebase Auth.

After login, display the user’s name and logout button.

Favorites system:

Only available for logged-in users.

Shows a toast if a guest tries to add to favorites.

Nanny cards stay “favorited” even after reload.

Clicking again removes from favorites.

Favorites Page — Displays only selected nannies.

Modal behavior:

Opens centered on screen.

Closes on “X”, click on backdrop, or Esc key.

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/IhorYarema/Nanny-Services.git
cd Nanny-Services

2️⃣ Install dependencies
npm install

3️⃣ Set up Firebase

Create a new Firebase project and add your credentials inside firebase.js:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_BUCKET",
messagingSenderId: "YOUR_SENDER_ID",
appId: "YOUR_APP_ID"
};

4️⃣ Run the app
npm run dev

Then open http://localhost:5173
(or your port).

👩‍💻 Author

Ihor Yarema
📧 u96ok69@gmail.com

💼 GitHub: https://github.com/IhorYarema
| LinkedIn: https://www.linkedin.com/in/yaremaihor/
