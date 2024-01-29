import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import { Button, Card } from "react-bootstrap";
import './Pizza.css';

const Pizza = () => {
  const { pizzas } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const addItem = (pizza) => {
    const cartShop = JSON.parse(localStorage.getItem("Cart_Shop")) || [];
    cartShop.push(pizza);
    localStorage.setItem("Cart_Shop", JSON.stringify(cartShop));
    navigate("/carrito");
  };

  const searchPizza = (id) => {
    const pizza = pizzas.find((p) => p.id === id);
    if (!pizza) {
      console.error(`Pizza with id ${id} not found.`);
    }
    return pizza;
  };

  const pizzaItem = searchPizza(id);

  return (
    <div>
      <Card className="Cart_container">
        <Card.Img className="CardImg_1" src={pizzaItem ? pizzaItem.img : ''} />
        <Card.Body>
          <Card.Title>{pizzaItem ? pizzaItem.name : 'Pizza Not Found'}</Card.Title>
          <Card.Text>{pizzaItem ? pizzaItem.desc : 'Description Not Available'}</Card.Text>
          {pizzaItem && pizzaItem.ingredients.map((ingredient) => (
            <Card.Text key={ingredient}>{ingredient}</Card.Text>
          ))}
          <Card.Text>{pizzaItem ? `Precio: $${pizzaItem.price}` : 'Price Not Available'}</Card.Text>
        </Card.Body>
        <div>
          <Button onClick={() => addItem(pizzaItem)}>Añadir</Button>
          <Button className="Button_Cart" onClick={() => navigate("/home")}>Volver</Button>
        </div>
      </Card>
    </div>
  );
};

export default Pizza;
