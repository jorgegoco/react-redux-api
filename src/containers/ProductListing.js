import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProducts(res.data));
  };
  useEffect(() => { fetchProducts(); }, []);

  return (
    <>
      <ProductComponent />
    </>
  );
};

export default ProductListing;
