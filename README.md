# Calculator App

A modern and responsive calculator application built with **HTML**, **CSS**, and **Vanilla JavaScript**, featuring keyboard support, dark mode, input validation, and a user-friendly interface.

## ✨ Features

### 🧮 Core Operations
- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`×`)
- Division (`÷`)
- Percentage calculations (`%`)

### ⌨️ Keyboard Support
- Supports full keyboard input.
- `Enter` to calculate results.
- `Backspace` to delete the last character.
- `C` to clear the display.

### 🌙 Dark Mode
- Toggle between light and dark themes.
- Dynamic theme icon switching (`🌙` / `☀️`).

### 🛡️ Input Validation
- Prevents entering multiple operators in sequence.
  - `5+-` → `5-`
  - `10×÷` → `10÷`
- Prevents multiple decimal points within the same number.
  - `12.3.4` ❌
  - `12.34` ✅
- Prevents invalid expressions from being evaluated.
  - `25+` → `Error`
  - `7×` → `Error`
- Automatically starts a new calculation when typing a number after a result is displayed.

### 🎨 User Experience
- Responsive layout for different screen sizes.
- Smooth button interactions.
- Calculator-style operator symbols (`×` and `÷`) while maintaining keyboard compatibility (`*` and `/`).

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (ES6)

## 📂 Project Structure

```text
calculator-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🔮 Future Improvements

- Calculation history
- Persist dark mode using Local Storage
- Scientific functions
- Parentheses support
- Theme customization
- Calculation memory (M+, M-, MR, MC)

## 👨‍💻 Author

Developed by **FARAZ RAHIMI**

---

If you found this project useful, consider giving it a ⭐ on GitHub.
