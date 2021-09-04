import {useEffect} from 'react';

import Layout from '../components/Layout/Layout'
import ProductGroup from '../components/ProductGroup/ProductGroup';
import Slider from '../components/Slider/Slider';
import styles from './Home.module.css';
const Home = () => {

    // {isLoading ? "LOADINGGGG" : products.map(i => <p>{i.productName}</p>)}
    return (
        <Layout>
            <main className={styles.main}>
                <Slider />
                <ProductGroup/>
            </main>
        </Layout>
    )
}

export default Home
