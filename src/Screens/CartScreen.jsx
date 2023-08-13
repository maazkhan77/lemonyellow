import React, { useState } from "react";
import { useCart } from "../Contexts/CartContext";
import CartItem from "../Components/CartItem";
import { Button, Card, Container } from "react-bootstrap";
import CustomToast from "../Components/Toast";

const CartScreen = () => {
  const { cart, dispatch } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [variant, setVariant] = useState("");

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    setShowToast(true);
    setToastMessage({ title: "Removed", body: "Product Removed From Cart" });
    setVariant("danger");
  };

  const getTotalItems = () => {
    // Calculate the total number of items in the cart
    return cart.length;
  };

  const getTotalPrice = () => {
    // Calculate the total price of all items in the cart
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    dispatch({ type: "CLEAR_CART" });
    setShowToast(true);
    setToastMessage({ title: "Checkout", body: "Thanks for purchasing" });
    setVariant("success");
  };

  return (
    <Container>
      <CustomToast
        show={showToast}
        message={toastMessage}
        variant={variant}
        onClose={() => setShowToast(false)}
      />
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>
      {cart.length > 0 ? (
        <div className="row">
          <div className="col-md-8">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                title={item.title}
                image={item.image}
                category={item.category}
                price={item.price}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
          <div className="col-md-4">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Summary</Card.Title>
                <Card.Text>Total Items: {getTotalItems()}</Card.Text>
                <Card.Text>
                  Total Price: ${getTotalPrice().toFixed(2)}
                </Card.Text>
                <Button variant="success" onClick={handleCheckout}>
                  Checkout
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <img src="/empty-cart-yellow.png" alt="empty cart" width={"50%"} />
        </div>
      )}
    </Container>
  );
};

export default CartScreen;
