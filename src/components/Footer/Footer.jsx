import { Icon } from "../Common/Icon";
import { Title } from "../Common/Title";
import "./Footer.css";
// Lineawsome Classes For Social Media Icons
const lineAwesomeClasses = [
  {className:"lab la-facebook-f",url:"http://www.facebook.com"},
  {className:"lab la-twitter",url:"http://www.twitter.com"},
  {className:"lab la-youtube",url:"http://www.youtube.com"},
  {className:"lab la-google",url:"http://www.google.com"},
  {className:"lab la-instagram",url:"http://www.instagram.com"}
];
const socialMediaIcons = lineAwesomeClasses.map((item, index) => (
  <Icon lineAwesomeClass={item.className} key={index} url={item.url} />
));
const Footer = () => (
  <footer>
    <Title text="Brand" cssClass="text-largest" />
    <Title text={footDescription} cssClass="text" />
    <div className="followUs">
      <Title text="Bizi Takip Edin" cssClass="text-large" />
      <div className="socialMedia">{socialMediaIcons}</div>
    </div>
  </footer>
);
const footDescription =
  "Türkiye'nin en büyük online alışveriş sitesi Hepsiburada, 2001 yılından bu yana hizmet veriyor. Doğan Holding bünyesinde faaliyet gösteren Hepsiburada, yenilikleri ile Türkiye'nin dijital alışveriş sektörüne yön veriyor. Online alışveriş deneyimini her geçen gün daha kolay hale getiren, dijitalleşen dünyanın gereklerine uygun geliştirmelerle sunduğu hizmetleri daha da avantajlı kılan Hepsiburada, ziyaretçilerine bol çeşit, uygun fiyat, hızlı teslimat ve sürpriz indirimler sunuyor. Bugün 35'ten fazla kategori içinde 20 milyondan fazla ürün çeşidi bulunduran site, 16 milyondan fazla üye ile Türkiye'de e-ticaretin lideri olmanın gururunu yaşıyor.";
export default Footer;
