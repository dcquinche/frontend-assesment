import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <section className="productDetail">
      <h2>Product {id}</h2>
      <section className="productDetail__card">
        <img className="productDetail__figure" alt="product" src={product.image} />
        <section className="productDetail__text">
          <p className="productDetail__title">{product.title}</p>
          <p className="productDetail__description">{product.description}</p>
          <p className="productDetail__category"><span className="productDetail__category--bold">Category: </span>{product.category}</p>
          <p className="productDetail__price"><span className="productDetail__price--bold">Price: </span>${product.price}</p>
        </section>
      </section>
    </section>
  );
};

export default ProductDetail;
