import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { CartContext } from "../contexts/Cart";

const MenuBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">KodeineShop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to={"/"}>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={"/products"}>Products</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Kodeine</NavbarText>
          <NavItem>
            <NavLink>
              <CartContext.Consumer>
                {({ cartItems }) => (
                  <Link to={"/products/"}>Cart {cartItems.length}</Link>
                )}
              </CartContext.Consumer>
            </NavLink>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MenuBar;
