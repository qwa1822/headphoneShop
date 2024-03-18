import { useCart } from "../context/CardContext";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;

  const { deleteItem, cardList, total } = useCart();

  console.log(cardList);
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => deleteItem(product)}>Remove</button>
    </div>
  );
};
