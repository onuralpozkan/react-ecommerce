import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../components/Layout/Layout'
import ProductGroup from '../components/ProductGroup/ProductGroup';
import Slider from '../components/Slider/Slider';
import { fetchProducts } from '../store/Actions/productActions';
import styles from './Home.module.css';
const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.productReducer);
    useEffect(() => {
      dispatch(fetchProducts())
    }, [dispatch])
    const {products, isLoading} = state
    // {isLoading ? "LOADINGGGG" : products.map(i => <p>{i.productName}</p>)}
    return (
        <Layout>
            <main className={styles.main}>
                <Slider />
                <ProductGroup />
            </main>
        </Layout>
    )
}

export default Home
