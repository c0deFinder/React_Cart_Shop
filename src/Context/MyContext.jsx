import React, { useState, useEffect, createContext } from "react";
import Data from "../Data/Data.json";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPizzas(Data);
  }, []);

  const addItem = (pizza) => {
    setCart((currentCart) => [...currentCart, pizza]);
  };

  const removeItem = (pizzaId) => {
    setCart((currentCart) =>
      currentCart.filter((pizza) => pizza.id !== pizzaId)
    );
  };
 

  return (
    <MyContext.Provider
      value={{ pizzas, cart, addItem, removeItem }}
    >
      {children}
    </MyContext.Provider>
  );
};