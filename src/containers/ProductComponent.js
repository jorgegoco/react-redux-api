import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {
      id, title, image, price, category,
    } = product;
    return (
      <div key={id}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>
          <div>{title}</div>
          <div>{price}</div>
          <div>{category}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      {renderList}
    </>
  );
};

export default ProductComponent;
