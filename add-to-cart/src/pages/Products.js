import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

import { CartContext } from "../contexts/Cart";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8080/products").then((res) => {
      this.setState({
        products: res.data
      });
    });
  }
  componentDidUpdate() {
    const cartItems = this.context;
    localStorage.setItem("key", JSON.stringify(cartItems));
  }
  render() {
    const { products } = this.state;
    return (
      <div className="Products">
        <Container>
          <h2>Products page</h2>
          <Row>
            {products.map((product) => (
              <Col sm="4" key={product.id}>
                <Card>
                  <CardImg top width="100%" src={product.imgUrl} />
                  <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button onClick={() => addToCart(product)}>
                          Add to cart
                        </Button>
                      )}
                    </CartContext.Consumer>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
Products.contextType = CartContext;
