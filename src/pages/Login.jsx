import "./Login.css";
import Layout from "../components/Layout/Layout";
import { CustomText } from "../components/Common/CustomText";
import { Button } from "../components/Common/Button";

const Login = () => {
  return (
    <Layout>
      <div className="login-page top-fix">
        <form>
          <div className="form-title">
            <CustomText cssClass="text-large" text="Kullanıcı Girişi" />
          </div>
          <div className="input-field">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-Posta adresinizi giriniz..."
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Şifrenizi giriniz..."
            />
          </div>
          <div className="form-actions">
            <Button cssClass="btn btn-primary" label="Onayla" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
