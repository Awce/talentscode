import "../App.css";
import { Layout } from "antd";
import { Carousel } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Contact from "../components/Contact";

const { Footer, Content } = Layout;

const Landing = () => {
  return (
    <Layout>
      <Navbar />
      <Carousel>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://firebasestorage.googleapis.com/v0/b/nothocho-650fb.appspot.com/o/hydrated.jpg?alt=media&token=82c31820-0fbd-40e9-8d8c-bf9c77d868c4"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 style={{ color: "#fff" }}>
              COMIENZA A DISFRUTAR DEL AGUA, DE UNA MANERA MÁS SIMPLE
            </h2>
            <Contact />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Content>
        <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
          Nuestras Tecnologías
        </h1>
        <Products style={{ padding: "10px" }} />
      </Content>
      <br />
      <Footer style={{ backgroundColor: "#f810e3", minHeight: "30vh" }}>
        <h6 style={{ color: "#fff" }}>© 2021. Purificaly SA de CV</h6>
      </Footer>
    </Layout>
  );
};

export default Landing;
