import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/MyContext";
import { Card, Button } from 'react-bootstrap';
import './Home.css'


const Home = () => {
    const { pizzas, addItem } = useContext(MyContext);
    const navigate = useNavigate();
    const [pizzasData, setPizzasData] = useState([]);
  
    useEffect(() => {
      setPizzasData(pizzas);
    }, [ pizzas ]);
  
    return (
      <div className="Home_cart">
        {pizzasData.map((pizzasData) => (
          <div className="col_container" key={pizzasData.id}>
        <Card className="Cart_container">
          <Card.Img className="CardImg" variant="top" src={pizzasData.img} />
          <Card.Body className="body_Cart">
            <Card.Title className="title_Cart">{pizzasData.name}</Card.Title>
           {pizzasData.ingredients.map((ingredient) => (
             <Card.Text className="text_Cart" key={ingredient}>{ingredient}</Card.Text>
           ))}
           <Card.Text className="text_Cart">Precio: ${pizzasData.price}</Card.Text>
          </Card.Body>
          <div className="button_container">
               <Button className="Button_Cart" onClick={() => addItem(pizzasData)}>Añadir</Button>
               <Button className="Button_Cart" onClick={() => navigate(`/pizza/${pizzasData.id}`)}>Ver Más</Button>
            </div>
        </Card>
        </div>
        ))}
      </div>
    );
  };
  
  export default Home;