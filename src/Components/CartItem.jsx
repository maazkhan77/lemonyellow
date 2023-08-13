import React from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const CartItem = ({ title, image, category, price, onRemove }) => {
  return (
    <Container>
      <div className="d-flex align-items-center mb-3">
        <img
          src={image}
          alt={title}
          className="mr-2"
          style={{ width: "80px", height: "70px" }}
        />
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mx-2 mr-3">
              <h6 className="mb-0">{title}</h6>
              <small className="text-muted">{category}</small>
            </div>
            <span>${price}</span>
          </div>
        </div>
        <Button variant="danger" className=" mx-5" onClick={onRemove}>
          Remove
        </Button>
      </div>
    </Container>
  );
};

export default CartItem;
