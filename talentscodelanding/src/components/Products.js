import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Image, List } from "antd";
import Contact from "./Contact";
import products from "../assets/products";

const Products = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={products}
            renderItem={(item) => (
              <List.Item>
                <Card style={{ width: "18rem" }} key={item.id}>
                  <Image src={item.imagen} />
                  <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>{item.marca}</Card.Text>
                    <Card.Text>{item.modelo}</Card.Text>
                    <Contact />
                  </Card.Body>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
