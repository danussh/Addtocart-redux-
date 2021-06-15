import React from "react";
import { Navbar, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MDBIcon } from "mdbreact";
import { Link,useHistory } from "react-router-dom";
import "./HomePage.css"
import { addToCart } from "../reducers/addtocartSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { products,count } = useSelector((state) => state.addtocart);
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand>
          <img
            alt=""
            src="https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <h3>Add To Cart</h3>
        <div className="wrapper" onClick={
          ()=>{
            history.push("product-checkout")
          }
        }> 
          <MDBIcon className="fa" style={{ color: "White" }} icon="shopping-cart" />
          <span  style={{ color: "" }}> {(count===0)?"":count} </span>
        </div>
      </Navbar>
      <div className=" row-12 d-flex flex-wrap mt-2 mb-5">
        {products.map((val, index) => {
          return (
            <Card
              className="mt-2 ml-5 mr-2"
              key={index}
              style={{ width: "22rem" }}
            >
              <Card.Img
                variant="top"
                src={val.img}
                style={{ height: "15rem" }}
              />
              <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.description}</Card.Text>
                <h6 className=" d-flex justify-content-between">
                  {val.price} Rs{" "}
                  <span>
                    <Button className="mt-0 pt-0" variant="primary" onClick={()=>dispatch(addToCart(val))}>
                      Add To Cart
                    </Button>
                  </span>
                </h6>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
