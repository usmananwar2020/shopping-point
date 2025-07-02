import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

const TopNavBar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalQty = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className="w-full h-16 bg-blue-950 text-white flex items-center justify-between px-6 shadow-md">
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        SHOPING POINT
      </div>

      <button className="relative cursor-pointer" onClick={() => navigate("/cart")}>
        <ShoppingCart className="w-6 h-6" />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalQty}
          </span>
        )}
      </button>
    </nav>
  );
};

export default TopNavBar;
