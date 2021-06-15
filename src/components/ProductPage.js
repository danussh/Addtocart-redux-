import React from "react";
import { Navbar, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { decrement, increment } from "../reducers/addtocartSlice";

import "./HomePage.css";
const ProductPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { addedProduct,total,quantity } = useSelector((state) => state.addtocart);
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        className="d-flex justify-content-between"
      >
        
        <Navbar.Brand
          onClick={() => {
            history.push("/");
          }}
        >
          <img
            alt=""
            src="https://i.pinimg.com/originals/c1/92/9d/c1929d3492c2f64ab65b43808c072043.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      
      </Navbar>
      <div className="container">
      <table className="table">
  <thead>
    <tr>
      <th scope="col" style={{width:"10px"}}>#</th>
      <th scope="col" style={{width:"200px"}}>Product Name</th>
      <th scope="col" style={{width:"350px"}}>Image</th>
      <th scope="col" >Description</th>
      <th scope="col" >Price</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    {
      addedProduct.map((val,index)=>{
        return<tr>
        <th scope="row">{index+1}</th>
        <td>{val.title}</td>
        <td><img src={val.img} style={{ height: "10rem" }}/></td>
        <td>{val.description}</td>
        <td>{val.price}</td>
        <td><button className="btn btn-info mr-2" onClick={()=>dispatch(increment(val))}>+</button>{val.quantity}<button  className="btn btn-info ml-2"onClick={()=>dispatch(decrement(val))}>-</button></td>
      </tr>
      })
    }
      <th scope="col" style={{width:"10px"}}></th>
      <th scope="col" style={{width:"200px"}}></th>
      <th scope="col" style={{width:"350px"}}></th>
      <th scope="col" ></th>
      <th scope="col" ></th>
      <th scope="col">Total:{total}<br></br><button className="btn btn-primary"> Checkout</button></th>
  </tbody>
</table>
      </div>
    </>
  );
};

export default ProductPage;
