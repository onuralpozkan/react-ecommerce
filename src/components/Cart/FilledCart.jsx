import { Button } from "../Common/Button";
import "./FilledCart.css";
const FilledCart = ({ products, deleteProduct }) => {
  return (
    <table className="productTable">
      <thead>
        <tr>
          <th>Ürün Adı</th>
          <th>Miktarı</th>
          <th>Fiyatı</th>
          <th>Sepetten Çıkar</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ product, productCount }) => (
          <tr key={product.id}>
            <td>{product.productName}</td>
            <td>{productCount}</td>
            <td>{product.unitPrice}</td>
            <td>
              <Button
                label="Sil"
                cssClass="btn btn-danger btn-block"
                handleClick={() => deleteProduct(product.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FilledCart;
