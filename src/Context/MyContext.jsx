import { useState, useEffect, createContext } from "react";
import Data from "../Data/Data.json";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [Cart_Shop, setCart] = useState([]);

  useEffect(() => {
    setPizzas(Data);
  }, []);

  const addItem = (pizza) => {
    setCart((currentCart) => [...currentCart, pizza]);
  };

  const removeItem = (pizzaId) => {
    setCart((currentCart) =>
      currentCart.filter((pizza) => pizza.id !== pizzaId)[0]
    );
  };
 

  return (
    <MyContext.Provider
      value={{ pizzas, Cart_Shop, addItem, removeItem }}
    >
      {children}
    </MyContext.Provider>
  );
};