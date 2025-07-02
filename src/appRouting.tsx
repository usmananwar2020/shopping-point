// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Container from "./components/container";
import { CartProvider } from "./context/cartContext";

function AppRouting() {
  return (
    <CartProvider>
        <Router>
        <Routes>
            <Route
            path="/"
            element={
                <Container>
                <Products />
                </Container>
            }
            />
            <Route
            path="/cart"
            element={
                <Container>
                <Cart />
                </Container>
            }
            />
        </Routes>
        </Router>
    </CartProvider>
  );
}

export default AppRouting;
