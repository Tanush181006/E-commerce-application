import React from "react";

const Cart = ({ cart, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart }) => {
      console.log(cart);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        🛒 Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            className="bg-white text-black p-4 rounded-lg mb-4"
          >
            <h2 className="text-2xl font-bold">
              {product.name}
            </h2>

            <p>₹{product.price}</p>
            <div className="flex items-center gap-4 mt-4">

  <button
    className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-lg text-xl font-bold"
    onClick={() => onDecreaseQuantity(product.id)}
  >
    -
  </button>

  <span className="text-xl font-bold">
    {product.quantity}
  </span>

  <button
    className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-lg text-xl font-bold"
    onClick={() => onIncreaseQuantity(product.id)}
  >
    +
  </button>

  <button
    className="bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-lg text-xl font-bold"
    onClick={() => onRemoveFromCart(product.id)}
  >
    🗑️
  </button>
</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;