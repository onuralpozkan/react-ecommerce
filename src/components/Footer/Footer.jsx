import { Icon } from "../Common/Icon";
import { CustomText } from "../Common/CustomText";
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
    <CustomText text="Brand" cssClass="text-largest" />
    <CustomText text={footDescription} cssClass="text" />
    <div className="followUs">
      <CustomText text="Bizi Takip Edin" cssClass="text-large" />
      <div className="socialMedia">{socialMediaIcons}</div>
    </div>
  </footer>
);
const footDescription =
  "Türkiye'nin en büyük online alışveriş sitesi Brand, 2001 yılından bu yana hizmet veriyor. Brand Holding bünyesinde faaliyet gösteren Brand, yenilikleri ile Türkiye'nin dijital alışveriş sektörüne yön veriyor. Online alışveriş deneyimini her geçen gün daha kolay hale getiren, dijitalleşen dünyanın gereklerine uygun geliştirmelerle sunduğu hizmetleri daha da avantajlı kılan Brand, ziyaretçilerine bol çeşit, uygun fiyat, hızlı teslimat ve sürpriz indirimler sunuyor. Bugün 35'ten fazla kategori içinde 20 milyondan fazla ürün çeşidi bulunduran site, 16 milyondan fazla üye ile Türkiye'de e-ticaretin lideri olmanın gururunu yaşıyor.";
export default Footer;
