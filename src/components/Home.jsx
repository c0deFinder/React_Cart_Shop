import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import { Card, Button } from 'react-bootstrap';

const Home = () => {
    const { pizzas, addItem } = useContext(MyContext);
    const navigate = useNavigate();
    const [pizzasData, setPizzasData] = useState([]);
  
    useEffect(() => {
      setPizzasData(pizzas);
    }, [ pizzas ]);
  
    return (
      <div className="home">
        {pizzasData.map((pizzasData) => (
          <div key={pizzasData.id}>
        <Card className="containerPizza">
          <Card.Img className="CardImg" variant="top" src={pizzasData.img} />
          <Card.Body className="bodyPizza">
            <Card.Title className="titlePizza">{pizzasData.name}</Card.Title>
           {pizzasData.ingredients.map((ingredient) => (
             <Card.Text className="textPizza" key={ingredient}>{ingredient}</Card.Text>
           ))}
           <Card.Text className="textPizza">Precio: ${pizzasData.price}</Card.Text>
            <Button className="Button" onClick={() => addItem(pizzasData)}>Añadir</Button>
            <Button className="ButtonBack" onClick={() => navigate(`/pizza/${pizzasData.id}`)}>Ver Más</Button>
          </Card.Body>
        </Card>
        </div>
        ))}
      </div>
    );
  };
  
  export default Home;