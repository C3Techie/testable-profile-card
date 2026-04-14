# Testable Profile Card (HNG Internship Stage 1B)

A professionally designed, accessible, and responsive profile card built with semantic HTML5, modern CSS, and vanilla JavaScript.

**Live Demo**: [https://c3techie.github.io/testable-profile-card/](https://c3techie.github.io/testable-profile-card/)

## 🚀 Features
- **Semantic HTML**: Uses `<article>`, `<figure>`, `<nav>`, `<section>`, and `<header>` for optimal accessibility and SEO.
- **Accessibility (a11y)**:
  - WCAG AA compliant color contrast.
  - Meaningful alternative text for the avatar.
  - Keyboard-focusable interactive elements.
  - `aria-live` regions for dynamic time updates.
- **Responsive Design**: Mobile-first approach that stacks components on small screens and expands to a side-by-side layout on larger devices.
- **Real-time Clock**: Displays the current epoch time in milliseconds using `Date.now()`, updating every 100ms.
- **Test-Ready**: All required elements are tagged with `data-testid` for automated grading stability.

## 🛠️ Tech Stack
- HTML5
- CSS3 (Vanilla)
- JavaScript (ES6+)

## 📂 Project Structure
```
testable-profile-card/
├── index.html   # Main structure & content
├── style.css    # Modern styling and layout
├── script.js    # Time logic & behavior
└── README.md    # Documentation
```

## 🏃 Local Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd testable-profile-card
   ```
3. Open `index.html` in any modern web browser.

## 🧪 Testing
The following `data-testid` attributes are implemented for automated testing:
- `test-profile-card`: Root element
- `test-user-name`: Name element
- `test-user-bio`: Biography paragraph
- `test-user-time`: Millisecond epoch time element
- `test-user-avatar`: Profile image
- `test-user-social-links`: Social links container
- `test-user-social-github`: GitHub link
- `test-user-social-linkedin`: LinkedIn link
- `test-user-social-twitter`: Twitter link
- `test-user-hobbies`: Hobbies list
- `test-user-dislikes`: Dislikes list

## 👤 Author
**Christian Chibuike**  
- [GitHub](https://github.com/C3Techie)
- [LinkedIn](https://www.linkedin.com/in/christian-chibuike/)
- [Twitter](https://x.com/C3Techie)
