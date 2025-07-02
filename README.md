# 💼 Shopping Point

A simple React 19 e-commerce project with product listing, cart management using `useReducer`, toast notifications, and cookie-based persistence.

---

## 🔧 Tech Stack

* **React** 19 (with experimental features like `use`)
* **Vite** for fast development build
* **TypeScript**
* **React Router v6** for routing
* **Tailwind CSS** for styling
* **useReducer** for global cart state
* **react-toastify** for toast messages
* **js-cookie** for cart data persistence
* **lucide-react** for icons

---

## 🧹 Features

* Product listing with quantity selection
* Cart page with increment, decrement, and remove functionality
* Responsive design
* Cart count in navigation bar
* Persistent cart using cookies
* Toast message on "Add to Cart"

---

## 📁 Project Structure

```
src/
├── components/
│   └── bannerSlider.tsx
│   └── container.tsx
│   └── topNavigationBar.tsx
├── context/
│   └── cartContext.tsx (optional, if used)
├── pages/
│   ├── products/
│   │   └── index.tsx
│   └── cart/
│       └── index.tsx
├── shared/
│   ├── productCard.tsx
│   └── cartItem.tsx
├── utils/
│   ├── interface.ts
│   └── productData.json
└── App.tsx
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/shopping-point.git
cd shopping-point
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

---

## 🍪 Cookie Persistence

The cart is saved using `js-cookie`. When you refresh the page or reopen the browser, cart data is retained.

---

## ✅ Available Scripts

* `npm run dev` – Start development server
* `npm run build` – Build for production
* `npm run preview` – Preview production build

---

## 📦 Dependencies

* `react@19`
* `react-dom`
* `react-router-dom`
* `react-toastify`
* `js-cookie`
* `lucide-react`
* `tailwindcss`

---

## 🧪 Node & React Versions

* **Node.js**: `v22.17.0`
* **React**: `19.0.0`

---

## 📃 License

This project is open-source and available under the [MIT License](https://github.com/usmananwar2020).

---

### 🧠 Author

Created by **Muhammad Usman** – [https://github.com/usmananwar2020](https://github.com/usmananwar2020)
