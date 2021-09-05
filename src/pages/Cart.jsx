import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Common/Button";
import Layout from "../components/Layout/Layout";
import { removeProductFromCart } from "../store/Actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartReducer);
  console.log("cart page", state);

  const deleteProduct = (id) => {
      console.log('Delete Product', id);
      dispatch(removeProductFromCart(id))
  }
  return (
    <Layout>
      <div style={{ position: "relative", top: "80px" }}>
        Cart Page
        {state.length ? <table>
            <thead>
                <tr>
                    <th>Ürün Adı</th>
                    <th>Miktarı</th>
                    <th>Fiyatı</th>
                    <th>Sepetten Çıkar</th>
                </tr>
            </thead>
            <tbody>
                {state.map(({product, productCount}) => (
                    <tr key={product.id}>
                        <td>{product.productName}</td>
                        <td>{productCount}</td>
                        <td>{product.unitPrice}</td>
                        <td><Button label="Sil" cssClass="btn btn-danger" handleClick={() => deleteProduct(product.id)}/></td>
                    </tr>
                ))}
            </tbody>
        </table> : "Sepette ürün Yok"}
      </div>
    </Layout>
  );
};

export default Cart;
