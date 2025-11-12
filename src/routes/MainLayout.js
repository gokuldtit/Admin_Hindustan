import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "../Pages/SideBar";
import { FaBars } from "react-icons/fa";
import "../Styles/layout.css";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container fluid className="p-0 layout-container">
      <Row className="g-0 flex-nowrap">
        <Col
          xs={isOpen ? 8 : 0}
          md={isOpen ? 2 : 0}
          className={`sidebar-col ${isOpen ? "open" : "closed"}`}
        >
          <SideBar />
        </Col>

        <Col xs={12} md={isOpen ? 10 : 12} className="main-content-col">
          <div className="main-header position-relative">
            <Button
              variant="light"
              className="toggle-btn d-lg-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars />
            </Button>
          </div>

          <div className="main-content-wrapper">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
