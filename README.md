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
