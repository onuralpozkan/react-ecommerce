import { Switch, Route } from 'react-router-dom'
import Cart from '../../pages/Cart'
import Home from '../../pages/Home'
import ProductDetail from '../../pages/ProductDetail'
import Header from '../Header/Header'

const Layout = () => {
    return (
        <div>
            <Header />
         <Switch>
             <Route path="/"><Home /></Route>
             <Route path="/product-detail"><ProductDetail /></Route>
             <Route path="/cart"><Cart/></Route>
         </Switch>
        </div>
    )
}

export default Layout
