import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

function CollapsibleExample() {
  const { cart } = useCart();
  return (
    <Navbar className="bg-info" fixed="top">
      <Container>
        <Link to="/" className="d-flex navbar-brand">
          <img
            alt=""
            src="/llplogo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <div className="d-none d-sm-block mx-2">
            E-commerce Product Catalog
          </div>
        </Link>
        <div style={{ position: "relative" }}>
          <Link to="/cart">
            <RiShoppingCart2Fill size={23} color="black" />
            {cart.length > 0 && (
              <Badge
                pill
                bg="warning"
                style={{ position: "absolute", top: -5, left: 15 }}
              >
                {cart.length}
              </Badge>
            )}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
