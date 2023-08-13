import React from "react";
import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useCart } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";

const ProductCard = ({ product }) => {
  let { title, image, hoverImage, category, price } = product;
  const [isHovered, setIsHovered] = React.useState(false);

  const { cart, dispatch } = useCart();

  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // Product is already in cart
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  const isAddedToCart = cart.find((item) => item.id === product.id);

  const cardStyle = {
    overflow: "hidden", // Hide overflow content
    display: "flex",
    flexDirection: "column",
    margin: "10px",
  };

  const imageStyle = {
    height: "250px",
    width: "100%",
    objectFit: "contain", // Maintain aspect ratio and cover the area
  };

  return (
    <>
      <Card
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card.Img
          variant="top"
          src={isHovered ? hoverImage : image}
          style={imageStyle}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Category: {category}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          {isAddedToCart ? (
            <div
              style={{ display: "flex", gap: "15px", justifyContent: "end" }}
            >
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip">Go to cart</Tooltip>}
              >
                <Link to="/cart">
                  <RiShoppingCart2Fill size={23} color="black" />
                </Link>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={
                  <Tooltip id="button-tooltip">
                    {" "}
                    Remove this Product from cart
                  </Tooltip>
                }
              >
                <Button onClick={removeFromCart}>Remove</Button>
              </OverlayTrigger>
            </div>
          ) : (
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="button-tooltip">Add this Product to cart</Tooltip>
              }
            >
              <Button onClick={addToCart}>Add To Cart</Button>
            </OverlayTrigger>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
