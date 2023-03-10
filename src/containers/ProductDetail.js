import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId);
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="detail">
          <img src={image} alt={price} />
          <div className="detail-data">
            <h1>{title}</h1>
            <h2>{`$ ${price}`}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <h2>Add to Cart</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
