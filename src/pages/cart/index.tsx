import { useCart } from "../../context/cartContext";
import CartItem from "../../shared/cartItem";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.quantity * parseFloat(item.price);
  }, 0);
  return (
    <div>
      <h1 className="text-left font-bold mb-6">View Cart</h1>
      <div className="rounded-2xl px-4 border-gray-300 border-2">
        {cart.length ? cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => dispatch({ type: 'INC', payload: { id: item.id } })}
            onDecrease={() => dispatch({ type: 'DEC', payload: { id: item.id } })}
            onRemove={() => dispatch({ type: 'REMOVE', payload: { id: item.id } })}
          />
        )) : 
        <p className="py-20 text-2xl text-gray-400 font-bold">No Item In Cart</p>
        }
      {cart.length ?<div className="text-right my-3 text-lg font-semibold">
        Total: ${totalPrice.toFixed(2)}
      </div> : null}
      </div>
    </div>
  );
};

export default CartPage;
