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
    const Cart_Shop = JSON.parse(localStorage.getItem("Cart_Shop")) || [];
    Cart_Shop.push(pizza);
    localStorage.setItem("Cart_Shop", JSON.stringify(Cart_Shop));
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
    <div className="Card_Box-2">
      <Card className="Cart_container-pizza">
      <div className="Card_Box-3">
        <Card.Img className="CardImg_1" src={pizzaItem ? pizzaItem.img : ''} />
        <Card.Body className="Card_Body-pizza">
          <Card.Title className="Card_Tittle-pizza">{pizzaItem ? pizzaItem.name : 'Pizza Not Found'}</Card.Title>
          <Card.Text className="Card_Text-pizza">{pizzaItem ? pizzaItem.desc : 'Description Not Available'}</Card.Text>
          {pizzaItem && pizzaItem.ingredients.map((ingredient) => (
            <Card.Text className="Card_p_pizza" key={ingredient}>{ingredient}</Card.Text>
          ))}
          <Card.Text className="Card_p_pizza">{pizzaItem ? `Precio: $${pizzaItem.price}` : 'Price Not Available'}</Card.Text>
          <div className="buttons_cointainer-pizza">
          <Button onClick={() => addItem(pizzaItem)}>Añadir</Button>
          <Button className="Button_Cart" onClick={() => navigate("/home")}>Volver</Button>
        </div>
        </Card.Body>
        </div>
       
      </Card>
    </div>
  );
};

export default Pizza;
