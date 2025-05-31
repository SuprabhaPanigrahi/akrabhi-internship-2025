import React from 'react';
import { useCart } from '@/components1/CartContext';
import { Button } from '@/components/ui/button';
import {
  CartContainer,
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemTitle,
  CartItemPrice,
  QuantityControl,
  CartSummary,
  EmptyCartMessage
} from '@/styles/cartStyle';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBuyNow = (productId: number) => {
    removeFromCart(productId);
  };

  if (cartItems.length === 0) {
    return (
      <EmptyCartMessage>
        <h2>Your cart is empty</h2>
        <p>Start shopping to add items to your cart</p>
      </EmptyCartMessage>
    );
  }

  return (
    <CartContainer>
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      <div className="grid gap-8">
        {cartItems.map((item) => (
          <CartItemContainer key={item.id}>
            <CartItemImage src={item.image} alt={item.title} />

            <CartItemDetails>
              <CartItemTitle>{item.title}</CartItemTitle>
              <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>

              <QuantityControl>
                <Button onClick={() => updateQuantity(item.id, item.quantity - 1)} size="sm">-</Button>
                <span>{item.quantity}</span>
                <Button onClick={() => updateQuantity(item.id, item.quantity + 1)} size="sm">+</Button>
              </QuantityControl>

              <div className="flex gap-2 mt-4">
                <Button onClick={() => handleBuyNow(item.id)} variant="outline">Buy Now</Button>
                <Button onClick={() => removeFromCart(item.id)} variant="destructive">Remove</Button>
              </div>
            </CartItemDetails>
          </CartItemContainer>
        ))}
      </div>

      <CartSummary>
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="flex justify-between mt-4">
          <span>Total ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Button className="w-full mt-6" size="lg">Proceed to Checkout</Button>
        <Button onClick={clearCart} variant="outline" className="w-full mt-2">Clear Cart</Button>
      </CartSummary>
    </CartContainer>
  );
};

export default Cart;
