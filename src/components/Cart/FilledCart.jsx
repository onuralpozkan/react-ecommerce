import { currencySymbol } from "../../utils/currencySymbol";
import { Button } from "../Common/Button";
import "./FilledCart.css";
const FilledCart = ({ products, deleteProduct }) => {
  const totalAmount = products.reduce(
    (prev, next) => prev + parseInt(next.productCount),
    0
  );
  const totalPrice = products.reduce(
    (prev, next) =>
      prev + parseFloat(next.product.unitPrice * next.productCount),
    0
  );
  return (
    <table className="productTable">
      <thead>
        <tr>
          <th>Ürün Adı</th>
          <th>Miktarı</th>
          <th>Birim Fiyatı</th>
          <th>Sepetten Çıkar</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ product, productCount }) => (
          <tr key={product.id}>
            <td>{product.productName}</td>
            <td>{productCount}</td>
            <td>{currencySymbol(product.unitPrice)}</td>
            <td>
              <Button
                label="Sil"
                cssClass="btn btn-block btn-danger"
                handleClick={() => deleteProduct(product.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan="4" style={{ textAlign: "right" }}>
            Sipariş Özeti
          </th>
        </tr>
        <tr>
          <td colSpan="2">Total Ürün:</td>
          <td colSpan="2">{totalAmount}</td>
        </tr>
        <tr>
          <td colSpan="2">Total Tutar:</td>
          <td colSpan="2">{currencySymbol(totalPrice)}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default FilledCart;
