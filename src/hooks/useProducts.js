import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Actions/productActions";

const useProducts = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.productReducer);
    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
    const { products, isLoading } = state;
  
    return { products, isLoading }
}

export default useProducts