import { useHistory } from "react-router";
import { Button } from "../Common/Button";
import { Title } from "../Common/Title";
import "./EmptyCart.css";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className="emptyCart">
      <div className="emptyCart-left">
        <Title text="Sepetinizde ürün bulunmamaktadır." cssClass="text-large" />
        <Title
          text="Alışverişe devam etmek için anasayfaya gidebilir ve diğer
              uygun fiyatlı ürünlere göz atabilirsiniz."
          cssClass="text"
        />
      </div>
      <div className="emptyCart-right">
        <h4>Sepetime eklediğim ürünler neden yok?</h4>
        <ul>
          <li>Ürünler tükenmiş olabilir.</li>
          <li>Ürünlerin satışı bitmiş olabilir.</li>
          <li>Ürünün satıcısı satışı sonlandırmış olabilir.</li>
          <li>
            Üye girişinden sonra sepete eklenen ürünler üye çıkışı yaptıktan
            sonra sepette görünmez.
          </li>
        </ul>
        <Button
          handleClick={() => history.push("/")}
          label="Alışverişe Devam Et"
          cssClass="btn btn-primary"
        />
      </div>
    </div>
  );
};

export default EmptyCart;
