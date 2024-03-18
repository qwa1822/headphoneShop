import { useEffect, useState } from "react";
import { useCart } from "../context/CardContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { name, price, image, id } = product;

  const { addToCart, cardList, total, deleteItem } = useCart();

  const [isInCart, setIsInCart] = useState(false);
  function handleAdd() {
    addToCart(product);
    console.log(cardList);
  }

  useEffect(() => {
    const productIsInCart = cardList.find(item => item.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cardList, id]);

  console.log(cardList);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button onClick={() => deleteItem(product)}>Remove Cart</button>
        ) : (
          <button onClick={() => addToCart(product)}>ADD Item</button>
        )}
      </div>
    </div>
  );
};
