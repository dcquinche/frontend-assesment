import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './styles.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="homePage">
      <h2 className="homePage__title">Products</h2>
      <section className="homePage__productsList">
        { products.map((product) => (
          <ProductCard
            image={product.image}
            title={product.title}
            id={product.id}
            key={product.id}
          />
        ))}
      </section>
    </section>
  );
};

export default Home;
