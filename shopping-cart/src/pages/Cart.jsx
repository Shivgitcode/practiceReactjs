import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => {
            return (
              <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
            );
          })}
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items:{cart.length}</span>
              </p>
            </div>
            <div>
              <p>Total Amount:{totalAmount}</p>
              <button>Checkout now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>cart Empty</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
