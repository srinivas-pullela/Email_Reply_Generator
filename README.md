# ☕ Smart Email Assistant (AI Email Reply Generator)

<p align="center">

![Java](https://img.shields.io/badge/Java-21-orange?style=for-the-badge\&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Framework-brightgreen?style=for-the-badge\&logo=springboot)
![React](https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge\&logo=react)
![Google Gemini](https://img.shields.io/badge/Google-Gemini%20API-4285F4?style=for-the-badge\&logo=google)
![REST API](https://img.shields.io/badge/REST-API-success?style=for-the-badge)
![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-yellow?style=for-the-badge\&logo=googlechrome)
![Material UI](https://img.shields.io/badge/Material-UI-007FFF?style=for-the-badge\&logo=mui)
![HTML5](https://img.shields.io/badge/HTML5-Markup-E34F26?style=for-the-badge\&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge\&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge\&logo=javascript)
![Maven](https://img.shields.io/badge/Maven-Build-red?style=for-the-badge\&logo=apachemaven)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge\&logo=git)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge\&logo=github)

</p>

---

# 📖 Introduction

**Smart Email Assistant (AI Email Reply Generator)** is a full-stack AI-powered application that automatically generates **context-aware, professional email replies** using **Google Gemini API**.

The project combines a **Spring Boot backend**, a **React.js frontend**, and a **Chrome Extension** that integrates directly with Gmail, enabling users to generate intelligent email responses without leaving their inbox.

By analyzing the email content and the selected communication tone, the application produces personalized replies in seconds, helping users save time, improve productivity, and maintain professional communication.

This project is ideal for:

* 🤖 AI Application Development
* ☕ Java Full Stack Learning
* 💼 Resume & Portfolio Projects
* 🚀 Placement Preparation
* 📚 Spring Boot & React Practice
* 🌐 API Integration Learning

---

# ✨ Features

## 🤖 AI Features

| Feature                           | Status |
| --------------------------------- | ------ |
| AI-Powered Email Reply Generation | ✅      |
| Google Gemini API Integration     | ✅      |
| Context-Aware Responses           | ✅      |
| Professional Tone                 | ✅      |
| Friendly Tone                     | ✅      |
| Casual Tone                       | ✅      |
| Fast Response Generation          | ✅      |

---

## 🎨 Frontend Features

* ✅ Responsive React.js UI
* ✅ Material UI Components
* ✅ Copy-to-Clipboard
* ✅ Loading Animations
* ✅ Error Handling
* ✅ Responsive Design

---

## ⚙️ Backend Features

* ✅ Spring Boot REST APIs
* ✅ JSON Request & Response Handling
* ✅ REST Architecture
* ✅ Environment Variable Configuration
* ✅ CORS Configuration
* ✅ Global Exception Handling

---

## 🌐 Chrome Extension

* ✅ Gmail Integration
* ✅ Inject AI Reply Button
* ✅ Generate Replies Inside Gmail
* ✅ Seamless User Experience
* ✅ One-Click AI Reply Generation

---

# 🛠️ Tech Stack

| Category              | Technologies                                          |
| --------------------- | ----------------------------------------------------- |
| **Backend**           | Java, Spring Boot, Spring MVC, REST APIs              |
| **Frontend**          | React.js, HTML5, CSS3, JavaScript, Material UI, Axios |
| **AI**                | Google Gemini API                                     |
| **Browser Extension** | Chrome Extension API (Manifest V3)                    |
| **Tools**             | Maven, Git, GitHub, Postman, VS Code, IntelliJ IDEA   |

---

# 📂 Project Structure

```text
Smart-Email-Assistant/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── config/
│   ├── dto/
│   ├── exception/
│   ├── resources/
│   └── application.properties
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── assets/
│   └── App.jsx
│
├── chrome-extension/
│   ├── manifest.json
│   ├── content.js
│   ├── popup.html
│   ├── popup.js
│   ├── styles.css
│   └── icons/
│
└── README.md
```

---

# ⚙️ System Architecture

```text
👤 User
     │
     ▼
⚛️ React Frontend
     │
     ▼
☕ Spring Boot REST API
     │
     ▼
🤖 Google Gemini API
     │
     ▼
✉️ AI Generated Email Reply
     │
     ▼
🖥 Displayed in React UI / Gmail Chrome Extension
```

---

# 🔄 Application Workflow

```text
📧 User Opens Gmail
        │
        ▼
🧩 Chrome Extension Injects AI Reply Button
        │
        ▼
👆 User Clicks AI Reply
        │
        ▼
📄 Email Content Captured
        │
        ▼
📨 Request Sent to Spring Boot API
        │
        ▼
🤖 Spring Boot Calls Google Gemini API
        │
        ▼
✨ Gemini Generates Intelligent Reply
        │
        ▼
📦 JSON Response Returned
        │
        ▼
📬 Reply Displayed in Gmail
        │
        ▼
📋 User Copies or Inserts Reply
```

---

# 🏗️ Architecture

```text
⚛️ React.js Frontend
        │
        ▼
🌐 REST APIs
        │
        ▼
☕ Spring Boot
        │
        ▼
🤖 Google Gemini API
        │
        ▼
✉️ AI Generated Reply
```

# ⚙️ Installation

## ☕ Backend

### 1. Clone Repository

```bash
git clone https://github.com/your-username/Smart-Email-Assistant.git
```

### 2. Open Spring Boot Project

Import the backend project into IntelliJ IDEA, Eclipse, or VS Code.

### 3. Configure API Key

Create a `.env` file or configure environment variables.

### 4. Install Dependencies

```bash
mvn clean install
```

### 5. Start Backend

```bash
mvn spring-boot:run
```

---

## ⚛️ Frontend

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

---

## 🌐 Chrome Extension

1. Open Chrome.
2. Navigate to **chrome://extensions**.
3. Enable **Developer Mode**.
4. Click **Load unpacked**.
5. Select the `chrome-extension` folder.
6. Open Gmail and start using the AI Reply feature.

---

# ▶️ Run Commands

## Backend

```bash
mvn clean install

mvn spring-boot:run
```

## Frontend

```bash
npm install

npm run dev
```

---

# 🔑 Environment Variables

```env
GEMINI_API_KEY=your_api_key

SERVER_PORT=8080
```

---

# 📦 Dependencies

## Backend

* Spring Boot Starter Web
* Spring Boot Starter Validation
* Lombok
* Maven

### Frontend

* React
* Material UI
* Axios

### Chrome Extension

* Chrome Extension Manifest V3

---

# 🔐 Security Features

* 🔒 API Key Stored Using Environment Variables
* 🌐 CORS Configuration
* ✅ Input Validation
* ⚠️ Global Exception Handling
* 🔐 Secure REST API Design

---

# 📚 Concepts Used

* Java
* Spring Boot
* Spring MVC
* REST API Development
* React.js
* Component-Based Architecture
* Material UI
* Axios
* JavaScript (ES6+)
* HTML5
* CSS3
* Google Gemini API
* Prompt Engineering
* JSON
* Chrome Extension Development
* API Integration

---

# 🎯 Learning Outcomes

By completing this project, developers will gain practical experience in:

* ☕ Full-Stack Java Development
* 🤖 AI API Integration
* 🌐 REST API Development
* ⚛️ React.js Development
* 🧩 Chrome Extension Development
* 🌱 Spring Boot Best Practices
* 🔐 Environment Variable Management
* 📦 JSON Request & Response Handling
* 🎨 Responsive UI Design
* 🚀 Modern Web Application Development

---

# 💼 Interview Topics Covered

| Topic                        |
| ---------------------------- |
| Spring Boot                  |
| REST APIs                    |
| Dependency Injection         |
| MVC Architecture             |
| React.js                     |
| Axios                        |
| Google Gemini API            |
| Prompt Engineering           |
| JSON Processing              |
| Chrome Extension Development |
| CORS                         |
| Exception Handling           |

---

# 🚀 Future Enhancements

* 👤 User Authentication
* 📜 Reply History
* 📄 Email Templates
* 🌍 Multi-language Support
* 🎤 Voice Commands
* 📧 Outlook Integration
* 📨 Gmail Add-on
* 🔐 Spring Security
* 🔑 JWT Authentication
* 🐳 Docker Deployment
* ☸️ Kubernetes
* ☁️ AWS Deployment
* 🔄 CI/CD Pipeline
* 📊 Email Analytics
* 🧠 Custom AI Prompts

---

# 🤝 Contribution

Contributions are welcome!

1. 🍴 Fork the repository.
2. 📥 Clone your fork.
3. 🌿 Create a new feature branch.
4. 💻 Make your changes.
5. ✅ Commit your changes.
6. 🚀 Push to your branch.
7. 🔁 Open a Pull Request.

Please follow clean coding practices, write meaningful commit messages, and ensure your changes are tested before submitting.

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute this project in accordance with the license terms.

---

# 👨‍💻 Author

| Information   | Details                                                         |
| ------------- | --------------------------------------------------------------- |
| **Name**      | Srinivas                                                        |
| **Email**     | [srinupullela2004@gmail.com](mailto:srinupullela2004@gmail.com) |
| **LinkedIn**  | https://www.linkedin.com/in/srinivas--p/                        |
| **GitHub**    | https://github.com/srinivas-pullela                             |
| **Portfolio** | https://github.com/srinivas-pullela/Portfolio                   |

---

# ⭐ Support

If you found this project useful:

* ⭐ Star this repository
* 🍴 Fork this repository
* 🐞 Report Issues
* 💡 Suggest New Features
* 📢 Share it with the developer community

Thank you for visiting this project. Happy Coding! ☕🚀
