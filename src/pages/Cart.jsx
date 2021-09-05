import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import EmptyCart from "../components/Cart/EmptyCart";
import FilledCart from "../components/Cart/FilledCart";
import { removeProductFromCart } from "../store/Actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartReducer);
  const deleteProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <Layout>
      <div style={{ position: "relative", top: "80px" }}>
        {state.length ? (
          <FilledCart products={state} deleteProduct={deleteProduct} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </Layout>
  );
};

export default Cart;
