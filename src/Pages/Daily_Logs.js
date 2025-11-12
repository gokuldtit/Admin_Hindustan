import React, { useState } from "react";
import "../Styles/Dailylogs.css";
import bell from "../assets/HIS/icons/Vector-4.png";
import star from "../assets/HIS/icons/star.png";
import PEN from "../assets/HIS/icons/pen.png";
import upload from "../assets/HIS/icons/upload.png";
import { MdOutlineUpload } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import {
  Row,
  Col,
  Form,
  Button,
  Table,
  Pagination,
  InputGroup,
} from "react-bootstrap";

const DailyLog = () => {
  const [search, setSearch] = useState("");

  const logs = [
    {
      date: "Oct 31, 2025",
      lesson: "U6 Let's Perform",
      topic: "6.1 What Nonsense",
      activity: "Write your own nonsense poem",
      duration: "45 min",
      attendance: "28/30",
      file: "pdf",
    },
    {
      date: "Oct 30, 2025",
      lesson: "U6 Let's Perform",
      topic: "6.2 From Story to Play",
      activity: "Role play sparrows",
      duration: "45 min",
      attendance: "30/30",
      file: "pdf",
    },
    {
      date: "Oct 29, 2025",
      lesson: "U5 Exploring Nature",
      topic: "5.3 The Busy Honeybee",
      activity: "Draw and label parts of a beehive",
      duration: "40 min",
      attendance: "29/30",
      file: "pdf",
    },
    {
      date: "Oct 28, 2025",
      lesson: "U5 Exploring Nature",
      topic: "5.2 Seasons Around Us",
      activity: "Create a seasons chart",
      duration: "45 min",
      attendance: "27/30",
      file: "pdf",
    },
    {
      date: "Oct 27, 2025",
      lesson: "U5 Exploring Nature",
      topic: "5.1 Nature Walk",
      activity: "Collect leaves and classify",
      duration: "50 min",
      attendance: "30/30",
      file: "pdf",
    },
    {
      date: "Oct 26, 2025",
      lesson: "U4 My Feelings",
      topic: "4.3 Understanding Emotions",
      activity: "Emotion wheel drawing",
      duration: "35 min",
      attendance: "28/30",
      file: "pdf",
    },
    {
      date: "Oct 25, 2025",
      lesson: "U4 My Feelings",
      topic: "4.2 Talking About Feelings",
      activity: "Share and discuss a happy moment",
      duration: "45 min",
      attendance: "29/30",
      file: "pdf",
    },
    {
      date: "Oct 24, 2025",
      lesson: "U4 My Feelings",
      topic: "4.1 Identifying Emotions",
      activity: "Match faces with emotions",
      duration: "40 min",
      attendance: "30/30",
      file: "pdf",
    },
    {
      date: "Oct 23, 2025",
      lesson: "U3 Stories We Love",
      topic: "3.3 The Clever Fox",
      activity: "Retell the story in pairs",
      duration: "45 min",
      attendance: "26/30",
      file: "pdf",
    },
    {
      date: "Oct 22, 2025",
      lesson: "U3 Stories We Love",
      topic: "3.2 The Thirsty Crow",
      activity: "Draw the story sequence",
      duration: "40 min",
      attendance: "27/30",
      file: "pdf",
    },
    {
      date: "Oct 21, 2025",
      lesson: "U3 Stories We Love",
      topic: "3.1 Story Reading",
      activity: "Picture comprehension",
      duration: "45 min",
      attendance: "28/30",
      file: "pdf",
    },
    {
      date: "Oct 19, 2025",
      lesson: "U2 Our World",
      topic: "2.2 Places Around Us",
      activity: "Map drawing of local area",
      duration: "45 min",
      attendance: "29/30",
      file: "pdf",
    },
    {
      date: "Oct 18, 2025",
      lesson: "U2 Our World",
      topic: "2.1 My Neighborhood",
      activity: "Neighborhood observation walk",
      duration: "50 min",
      attendance: "28/30",
      file: "pdf",
    },
    {
      date: "Oct 17, 2025",
      lesson: "U1 Myself",
      topic: "1.3 My Routines",
      activity: "Write daily routine schedule",
      duration: "40 min",
      attendance: "25/30",
      file: "pdf",
    },
    {
      date: "Oct 16, 2025",
      lesson: "U1 Myself",
      topic: "1.2 My Family",
      activity: "Create family tree drawing",
      duration: "45 min",
      attendance: "27/30",
      file: "pdf",
    },
    {
      date: "Oct 15, 2025",
      lesson: "U1 Myself",
      topic: "1.1 Who Am I?",
      activity: "Self-introduction circle time",
      duration: "35 min",
      attendance: "30/30",
      file: "pdf",
    },
    {
      date: "Oct 14, 2025",
      lesson: "EVS",
      topic: "Plants Around Us",
      activity: "Seed planting experiment",
      duration: "55 min",
      attendance: "29/30",
      file: "pdf",
    },
    {
      date: "Oct 13, 2025",
      lesson: "Math",
      topic: "Addition with Carry",
      activity: "Worksheet practice",
      duration: "45 min",
      attendance: "30/30",
      file: "pdf",
    },
    {
      date: "Oct 12, 2025",
      lesson: "Math",
      topic: "Subtraction with Borrowing",
      activity: "Hands-on abacus practice",
      duration: "50 min",
      attendance: "28/30",
      file: "pdf",
    },
    {
      date: "Oct 11, 2025",
      lesson: "English",
      topic: "Reading Comprehension",
      activity: "Paragraph reading and Q&A",
      duration: "40 min",
      attendance: "29/30",
      file: "pdf",
    },
    {
      date: "Oct 10, 2025",
      lesson: "English",
      topic: "Nouns",
      activity: "Noun hunt in classroom",
      duration: "45 min",
      attendance: "27/30",
      file: "pdf",
    },
    {
      date: "Oct 09, 2025",
      lesson: "English",
      topic: "Grammar Basics",
      activity: "Identify verbs and adjectives",
      duration: "40 min",
      attendance: "30/30",
      file: "pdf",
    },
    {
      date: "Oct 08, 2025",
      lesson: "Science",
      topic: "Living vs Non-Living",
      activity: "Classification chart activity",
      duration: "45 min",
      attendance: "28/30",
      file: "pdf",
    },
    {
      date: "Oct 07, 2025",
      lesson: "Science",
      topic: "Parts of a Plant",
      activity: "Label parts of a plant diagram",
      duration: "50 min",
      attendance: "29/30",
      file: "pdf",
    },
    {
      date: "Oct 06, 2025",
      lesson: "Science",
      topic: "Water Sources",
      activity: "Poster making: Save Water",
      duration: "45 min",
      attendance: "30/30",
      file: "pdf",
    },
    {
      date: "Oct 05, 2025",
      lesson: "EVS",
      topic: "Cleanliness",
      activity: "Classroom cleaning activity",
      duration: "35 min",
      attendance: "26/30",
      file: "pdf",
    },
    {
      date: "Oct 20, 2025",
      lesson: "U2 Our World",
      topic: "2.3 Communities",
      activity: "Group role play on helpers",
      duration: "50 min",
      attendance: "30/30",
      file: "pdf",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredLogs = logs.filter((log) =>
    log.topic.toLowerCase().includes(search.toLowerCase())
  );

  const currentLogs = filteredLogs.slice(startIndex, endIndex);

  return (
    <div className="Dailylogs_main_content bg-ternary">
      <div className="p-4 d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Row className="">
          <Col md={6}>
            <div className="text-start">
              <h3 className=" bold">Daily Logs</h3>
              <p className="text-muted" style={{ marginTop: "-4px" }}>
                Record and track your daily lessons
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

        <Row className="mb-3 d-flex justify-content-end">
          <Col>
            {" "}
            <h4 className="text-start bold text-primary ">
              Daily Teaching Logs
            </h4>
          </Col>

          <Col md={2}>
            <InputGroup
              style={{ border: "1px solid #ccc", borderRadius: "5px" }}
            >
              <InputGroup.Text style={{ border: "none", background: "white" }}>
                <FaSearch />
              </InputGroup.Text>

              <Form.Control
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  border: "none",
                  background: "white",
                  boxShadow: "none",
                }}
              />
            </InputGroup>
          </Col>
          <Col className="text-end" md={2}>
            <Button className="radiantBlue">
              <MdOutlineUpload />
              Update Log
            </Button>
          </Col>
        </Row>

        <div className="flex-grow-1">
          <Table hover responsive bordered className="align-middle">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Lesson/chapter</th>
                <th>Topic</th>
                <th>Activity</th>
                <th>Duration</th>

                <th>File</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentLogs
                .filter((log) =>
                  log.topic.toLowerCase().includes(search.toLowerCase())
                )
                .map((log, index) => (
                  <tr key={index}>
                    <td>{log.date}</td>
                    <td>{log.lesson}</td>
                    <td>{log.topic}</td>
                    <td>{log.activity || "-"}</td>
                    <td>{log.duration}</td>

                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="py-0 px-2 outline"
                      >
                        <AiOutlineFilePdf className="me-1" />
                        pdf
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="bg-white me-1 outline"
                        style={{ borderRadius: "50%" }}
                      >
                        <img
                          className=" bg-white me-2 "
                          src={star}
                          style={{
                            width: "20PX",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        />
                      </Button>
                      <Button
                        className="bg-white outline"
                        style={{ borderRadius: "50%" }}
                      >
                        <img
                          className=" bg-white "
                          src={PEN}
                          style={{ width: "20PX", height: "30px" }}
                        />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>

        <div className="mt-auto">
          <div className="d-flex justify-content-end bg-light">
            <span className="text-muted me-3">
              Page {currentPage} of{" "}
              {Math.ceil(filteredLogs.length / itemsPerPage)} • Showing{" "}
              {filteredLogs.length === 0 ? 0 : startIndex + 1} -
              {Math.min(endIndex, filteredLogs.length)} of {filteredLogs.length}{" "}
              items
            </span>

            <Pagination>
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              />

              {[...Array(Math.ceil(logs.length / itemsPerPage))].map((_, i) => (
                <Pagination.Item
                  key={i + 1}
                  active={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}

              <Pagination.Next
                disabled={currentPage === Math.ceil(logs.length / itemsPerPage)}
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyLog;
