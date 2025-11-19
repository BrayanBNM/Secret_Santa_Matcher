# 🎅 Secret Santa Matcher

A festive web app to organize your Secret Santa gift exchange!  
Upload a participant list, generate random matches, and send personalized email notifications using [EmailJS](https://www.emailjs.com/).  
Recipients are hidden by default in the dashboard, with a reveal/hide toggle for privacy.

---

## ✨ Features
- 📂 Upload participants via **Excel (.xlsx/.xls) or CSV** file  
- 🔀 Randomly generate Secret Santa pairs (circular shuffle logic)  
- 📧 Send personalized emails to each participant using **EmailJS**  
- 👁️ Toggle recipient visibility in the dashboard (hidden by default)  
- 🎄 Simple, festive UI built with **React + TailwindCSS**

---

## 🛠️ Tech Stack
- **React (via Babel standalone)**  
- **TailwindCSS** for styling  
- **SheetJS (xlsx)** for parsing Excel/CSV files  
- **EmailJS** for sending emails  

---

## 📋 File Format Requirement
Your participant file must include:
- Column A → **Name**  
- Column B → **Email**  
- A header row at the top  

Example:

| Name       | Email              |
|------------|--------------------|
| Alice      | alice@email.com    |
| Bob        | bob@email.com      |
| Charlie    | charlie@email.com  |

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
    git clone https://github.com/your-username/secret-santa-matcher.git
    cd secret-santa-matcher

## 🔐 Local configuration (EmailJS credentials)

This app sends emails using EmailJS and requires your EmailJS credentials. For security you should keep these credentials local and NOT commit them to the repository.

1. Copy the example file to a local config file (on Windows you can copy using File Explorer or PowerShell):

```powershell
copy .\\secret-config.example.js .\\secret-config.js
```

2. Edit `secret-config.js` and fill in your values for `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`.

The example file sets `window.SECRET_CONFIG.EMAILJS` and is automatically loaded by the page (the HTML includes `./secret-config.js` if present). The project contains a `.gitignore` entry that ignores `secret-config.js` so your secrets stay local.

If you prefer you can also directly edit the defaults in `SecretSanta.html`, but the recommended, safer approach is to use `secret-config.js`.

## ⏱️ Timer delay between emails

- The app sends emails sequentially and waits a configurable delay between each send to avoid rate limits.
- By default the delay is 1000 ms (1 second). You can change it at runtime in the UI (in the "Send Emails" panel). The input expects seconds (e.g. enter `1` for 1 second, `2.5` for 2.5 seconds).
- Optionally you can set a default delay (milliseconds) in your local `secret-config.js` by adding `DEFAULT_SEND_DELAY_MS: 2000` to `window.SECRET_CONFIG`.

Example snippet (inside `secret-config.js`):

```js
window.SECRET_CONFIG = {
   EMAILJS: {
      SERVICE_ID: 'your_service_id_here',
      TEMPLATE_ID: 'your_template_id_here',
      PUBLIC_KEY: 'your_public_key_here',
   },
   DEFAULT_SEND_DELAY_MS: 1000, // optional
}
```

When you run the page locally, the UI will pick up `secret-config.js` if it's present and use those credentials and default delay.
