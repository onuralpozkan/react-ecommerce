import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Layout from '../components/Layout/Layout'
import { fetchProducts } from '../store/Actions/productActions';
const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.productReducer);
    useEffect(() => {
      dispatch(fetchProducts())
    }, [dispatch])
    console.log("HomePage State");
    console.log(state);
    const {products, isLoading} = state
    return (
        <Layout>
            <div>
                Home Page
                {isLoading ? "LOADINGGGG" : products.map(i => <p>{i.productName}</p>)}
            </div>
        </Layout>
    )
}

export default Home
