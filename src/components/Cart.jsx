import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="relative">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M17 18a2 2 0 11-4 0 2 2 0 014 0zM9 18a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
              {totalQuantity}
            </span>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Shopping Cart</h3>
          <p className="text-sm text-gray-600">
            {totalQuantity === 0 
              ? 'Cart is empty' 
              : `${totalQuantity} item${totalQuantity > 1 ? 's' : ''} in cart`
            }
          </p>
        </div>
      </div>
      
      {cartItems.length > 0 && (
        <div className="mt-4 border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Cart Items:</h4>
          <div className="max-h-40 overflow-y-auto">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center py-1 text-sm">
                <span className="text-gray-600 truncate max-w-32">{item.title}</span>
                <span className="text-blue-600 font-medium">x{item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t">
            <div className="text-sm font-semibold text-gray-800">
              Total: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;






