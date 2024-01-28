import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import { Button, Card } from "react-bootstrap";
import './Pizza.css'

 const Pizza = () => {
  const { pizzas } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();
  function addItem(pizza) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(pizza);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/carrito");

  }

  const SeachPizza = (id) => {
    return pizzas.find((pizza) => pizza.id === id);
  };

  const Pizza_1 = SeachPizza(id);

   const newLocal = "Cart_container";
  return (
    <div>
      <Card className={newLocal}>
        <Card.Img className="CardImg" src={Pizza_1.img} />
        <Card.Body>
          <Card.Title>{Pizza_1.name}</Card.Title>
          <Card.Text>{Pizza_1.desc}</Card.Text>
          {Pizza_1.ingredients.map((ingredient) => (
            <Card.Text key={ingredient}>{ingredient}</Card.Text>
          ))}
          <Card.Text>Precio: ${Pizza_1.price}</Card.Text>
        </Card.Body>
        <div>
          <Button onClick={() => addItem(Pizza_1)}>Añadir</Button>
          <Button onClick={() => navigate("/home")}>Volver</Button>
        </div>
      </Card>
    </div>
  );
};
export default Pizza
