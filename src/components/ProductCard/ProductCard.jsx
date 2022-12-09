import './styles.css';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, id }) => {
  const [minutes, setMinutes] = useState(Math.floor(Math.random() * 5));
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 59));

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);

      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }

      if (seconds === 0 && minutes === 0) {
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const min = `0${minutes}`;
  let sec = seconds;
  if (seconds < 10) {
    sec = `0${seconds}`;
  }

  return (
    <div className="card">
      <section className="card__product">
        <img className="card__figure" alt="product" src={image} />
        <p>{title}</p>
      </section>
      <section className="card__auction">
        <p>{min}:{sec}</p>
        <Link to={`/product-detail/${id}`}>
          { seconds === 0 && minutes === 0 ? <button className="card__button--disabled" type="submit" disabled>Time has Expired</button> : <button className="card__button" type="submit">Go to Detail</button>}
        </Link>
      </section>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
