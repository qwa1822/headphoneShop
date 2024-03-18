import { createContext, useContext, useReducer } from "react";
import { reducers } from "../reducer/CartReducer";

const initialProduct = {
  total: 0,
  cardList: [],
};

export const CartContext = createContext(initialProduct);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialProduct);

  const addToCart = product => {
    const updateItem = state.cardList.concat(product);

    updateTotal(updateItem);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        card: updateItem,
      },
    });
  };

  const deleteItem = product => {
    const filtering = state.cardList.filter(item => item.id !== product.id);
    updateTotal(filtering);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        remove: filtering,
      },
    });
  };

  const updateTotal = product => {
    let total = 0;
    product.forEach(item => (total += item.price));

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };
  const item = {
    total: state.total,
    cardList: state.cardList,
    addToCart,
    deleteItem,
    updateTotal,
  };

  return <CartContext.Provider value={item}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
