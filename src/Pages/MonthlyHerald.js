import React, { useState } from "react";
import { Row, Col, Button, Form, Pagination } from "react-bootstrap";
import "../Styles/MonthlyHerald.css";
import { FaPencilAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaBell } from "react-icons/fa6";


const MonthlyHerald = () => {
  const [search, setSearch] = useState("");

  const cards = [
    {
      date: "Nov 12, 2025",
      time: "9:00 AM",
      period: "1 - Period",
      chapter: "U6: Let's Perform",
      topic: "6.1 What Nonsense",
      status: "Upcoming",
    },
    {
      date: "Nov 11, 2025",
      time: "03:00 PM",
      period: "3 - Period",
      chapter: "U6: Let's Perform",
      topic: "6.2 From Story to Play",
      status: "Upcoming",
    },
    {
      date: "Nov 10, 2025",
      time: "9:00 AM",
      period: "1 - Period",
      chapter: "U6: Let's Perform",
      topic: "6.3 More Powerful Language",
      status: "Pending",
    },
    {
      date: "Nov 10, 2025",
      time: "9:00 AM",
      period: "1 - Period",
      chapter: "U6: Let's Perform",
      topic: "6.3 More Powerful Language",
      status: "Completed",
    },
    {
      date: "Oct 15, 2025",
      time: "12:00 PM",
      period: "4 - Period",
      chapter: "U3: My World",
      topic: "Describing surroundings",
      status: "Complete",
    },
    {
      date: "Oct 28, 2025",
      time: "2:00 PM",
      period: "3 - Period",
      chapter: "U5: Story Time",
      topic: "Where the story takes place",
      status: "Complete",
    },
    {
      date: "Oct 20, 2025",
      time: "1:00 PM",
      period: "2 - Period",
      chapter: "U4: Numbers Around",
      topic: "Understanding place value",
      status: "Pending",
    },
    {
      date: "Nov 04, 2025",
      time: "2:00 PM",
      period: "5 - Period",
      chapter: "U5: Story Time",
      topic: "Where the story takes place",
      status: "Complete",
    },
    {
      date: "Oct 29, 2025",
      time: "2:00 PM",
      period: "3 - Period",
      chapter: "U5: Story Time",
      topic: "The central struggle",
      status: "Complete",
    },
    {
  date: "Nov 09, 2025",
  time: "11:00 AM",
  period: "2 - Period",
  chapter: "U6: Let's Perform",
  topic: "6.4 Create Characters",
  status: "Upcoming",
},
{
  date: "Nov 08, 2025",
  time: "02:00 PM",
  period: "4 - Period",
  chapter: "U6: Let's Perform",
  topic: "6.5 Practice Dialogue Reading",
  status: "Pending",
},
{
  date: "Nov 07, 2025",
  time: "9:00 AM",
  period: "1 - Period",
  chapter: "U6: Let's Perform",
  topic: "6.6 Group Performance Prep",
  status: "Completed",
},
{
  date: "Nov 06, 2025",
  time: "3:00 PM",
  period: "5 - Period",
  chapter: "U5: Story Time",
  topic: "5.4 Story Summary Writing",
  status: "Complete",
},
{
  date: "Nov 05, 2025",
  time: "2:00 PM",
  period: "4 - Period",
  chapter: "U5: Story Time",
  topic: "5.5 Character Analysis",
  status: "Upcoming",
},
{
  date: "Nov 03, 2025",
  time: "12:00 PM",
  period: "3 - Period",
  chapter: "U5: Story Time",
  topic: "5.6 Theme Exploration",
  status: "Pending",
},
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredCards = cards.filter((card) =>
  card.topic.toLowerCase().includes(search.toLowerCase())
);

  const currentCards = filteredCards.slice(startIndex, endIndex);


  return (
    <div className="monthlyherald_main_content">
       <Row className="">
                <Col md={6}>
                  <div className="text-start">
                    <h3 className=" bold">Monthly Herald</h3>
                    <p className="text-muted" style={{ marginTop: "-4px" }}>
                      Plan and Organize Your Curriculum
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <Row className="justify-content-end">
                    <Col md={3}>
                      <Form.Select>
                        <option className="bold">Oct 2025</option>
                        <option className="bold">Sep 2025</option>
                        <option className="bold">Aug 2025</option>
                      </Form.Select>
                    </Col>
      
                    <Col md={3}>
                      <Form.Select>
                        <option>GRADE - 3A</option>
                        <option>GRADE - 3B</option>
                        <option>GRADE - 4A</option>
                      </Form.Select>
                    </Col>
      
                    <Col md={2} className="text-end">
                      <Button className="radiantBlue">
                        <FaBell />
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
      <hr />

      <Row className="mt-3 align-items-center">
        <Col md={3} className="text-start ps-2 text-primary">
          <h5>Lesson Plans</h5>
        </Col>

        <Col md={9}>
          <Row className="justify-content-end g-2">
            <Col md={2}>
              <Form.Select>
                <option>November, 2025 <SlCalender /></option>
              </Form.Select>
            </Col>

            <Col md={1}>
              <Form.Select>
                <option>All</option>
              </Form.Select>
            </Col>

            <Col md={2}>
              <Form.Control
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>

            <Col md={2} className="text-end">
              <Button className=" w-100 radiantBlue">+ Upload</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-4">
        {currentCards
          
          .map((card, index) => (
            <Col md={4} className="mb-4" key={index}>
              <div
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: 10,
                  padding: 20,
                  background: "#fff",
                }}
              >
                <Row>
                  <Col className="text-start">
                    <h6 style={{ fontWeight: "bold", color: "#1179f0ff" }}>
                      {card.date}
                    </h6>
                    <p className="text-muted" style={{ marginBottom: 5 }}>
                      {card.time}
                    </p>
                  </Col>
                  <Col className="text-end">
                    <span
                      style={{
                        padding: "3px 8px",
                        background: "#fff",
                        border: "1px solid #e0e0e0",
                        borderRadius: 5,
                        fontSize: 12,
                        color: "#1179f0ff",
                      }}
                    >
                      {card.period}
                    </span>
                  </Col>
                </Row>
                <hr />

                <div className="text-start">
                  <p style={{ fontSize: 14, marginTop: 10 }}>
                    Lesson / Chapter
                    <br />
                    <div
                      className="text-primary"
                      style={{ fontWeight: "bold" }}
                    >
                      {card.chapter}
                    </div>
                  </p>

                  <p style={{ fontSize: 14 }}>
                    Topics to Cover:
                    <br />
                    <strong>{card.topic}</strong>
                  </p>
                </div>

                <Row className="mt-3">
                  <Col className="text-start">
                    <span
                      style={{
                        padding: "5px 10px",

                        background:
                          card.status === "Upcoming"
                            ? "#fca14bff"
                            : card.status === "Pending"
                            ? "#c50707ff"
                            : "#449258ff",
                        borderRadius: 20,
                        fontSize: 12,
                        color: "white",
                      }}
                    >
                      {card.status}
                    </span>
                  </Col>
                  <Col className="text-end">
                    <Button
                      size="sm"
                      style={{
                        backgroundColor: "#d9e6f8ff",
                        color: "#1b76f5ff",
                        border: "none",
                      }}
                    >
                      <FaPencilAlt className="me-2" />
                      Edit
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
      </Row>
      <div className="mt-auto">
        <div className="d-flex justify-content-between mt-3">
          <span className="text-muted">
  Page {currentPage} of {Math.ceil(filteredCards.length / itemsPerPage)} • 
  Showing {filteredCards.length === 0 ? 0 : startIndex + 1} -
  {Math.min(endIndex, filteredCards.length)} of {filteredCards.length} items
</span>



          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            />

            {[...Array(Math.ceil(filteredCards.length / itemsPerPage))]
.map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </Pagination.Item>
            ))}

            <Pagination.Next
              disabled={currentPage === Math.ceil(filteredCards.length / itemsPerPage)}
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
};
export default MonthlyHerald;
