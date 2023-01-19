import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {
      id, title, image, price, category,
    } = product;
    return (
      <div className="product" key={id}>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
          <div className="product-image">
            <img src={image} alt={title} />
          </div>
          <div className="product-data">
            <h4>{title}</h4>
            <h3 className="product-data-price">{`$ ${price}`}</h3>
            <p className="product-data-category">{category}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="product-list">
      {renderList}
    </div>
  );
};

export default ProductComponent;
