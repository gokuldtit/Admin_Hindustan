import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "../Styles/MyClasses.css";
import { FaBell } from "react-icons/fa6";

const MyClasses = () => {
    const [selectedDate, setSelectedDate] = useState(14);

    const classes = [
        { grade: "Grade 3A", students: 36, room: 204, topics: 54 },
        { grade: "Grade 3B", students: 34, room: 205, topics: 54 },
        { grade: "Grade 3C", students: 32, room: 206, topics: 54 },
    ];

    const schedule = [
        { date: "Nov 14", title: "Class – Grade 3A", topic: "6.1 What Nonsense", period: "2 - Period" },
        { date: "Nov 14", title: "Class – Grade 3B", topic: "6.2 From Story to Play", period: "4 - Period" },
        { date: "Nov 14", title: "Teachers Meeting", topic: "All Teachers Meeting at Conference Room", period: "6 - Period" },
    ];

    const days = [
        [29, 30, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, 1, 2],
    ];

    return (
        <div className="my-classes-container">

            {/* HEADER */}
            <Row className="myclassHeader">
                <Col md={6} className="text-start">
                    <h3 className="fw-bold">My Classes</h3>
                    <p className="text-muted">Manage your classes and student progress</p>
                </Col>

                <Col md={6}>
                    <div className="text-end">
                        <Button className="notification-btn ">
                            <FaBell />
                        </Button>
                    </div>
                </Col>
            </Row>

            

            {/* CLASSES */}
            <h5 className="text-primary text-start">Classes</h5>

            <Row className="">
                {classes.map((cls, index) => (
                    <Col md={4} key={index}>
                        <Card className="class-card">
                            <Card.Body>
                                <Row>

                                    {/* Circle */}
                                    <Col md={5} className="d-flex justify-content-center">
                                        <div className="grade-circle">
                                            <h5 className="text-primary m-0">{cls.grade}</h5>
                                        </div>
                                    </Col>

                                    {/* Right Info */}
                                    <Col md={7}>
                                        <p className="info-line">
                                            Students:
                                            <span className="fw-bold ms-5"> {cls.students}</span>
                                        </p>
                                        <p className="info-line">
                                            Room No:
                                            <span className="fw-bold ms-5"> {cls.room}</span>
                                        </p>
                                        <p className="info-line">
                                            Total Topics:
                                            <span className="fw-bold ms-5"> {cls.topics}</span>
                                        </p>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* SCHEDULES */}
            <div className="mt-2">
                <h5 className="text-primary text-start">Schedules</h5>
                <Row>

                    {/* CALENDAR */}
                    <Col md={8}>
                        <Card className="calendar-card">
                            <Card.Body>

                                <Row>
                                    <Col><h6 className="text-start">Calendar</h6></Col>
                                    <Col className="text-end">
                                    <Button variant="light">
                                        <Button size="sm" variant="light" >{"<"}</Button>
                                        <span className="mx-2 fw-semibold">Nov 2025</span>
                                        <Button size="sm" variant="light">{">"}</Button></Button>
                                    </Col>
                                </Row>

                                <table className="calendar-table">
                                    <thead>
                                        <tr style={{borderBottom: '1px solid #c0bbbb'}}>
                                            <th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th>
                                            <th>Thu</th><th>Fri</th><th>Sat</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {days.map((week, i) => (
                                            <tr key={i}>
                                                {week.map((day, j) => (
                                                    <td
                                                        key={j}
                                                        className={day === selectedDate ? "active-day" : ""}
                                                        onClick={() => setSelectedDate(day)}
                                                    >
                                                        {day}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </Card.Body>
                        </Card>
                    </Col>

                    {/* SCHEDULES LIST */}
                    <Col md={4}>
                        {schedule.map((item, idx) => (
                            <Card className="schedule-card mb-1" key={idx}>
                                <Card.Body>

                                    <Row>
                                        {/* LEFT DATE BOX */}
                                        <Col md={2}>
                                            <div className="date-box ">
                                                <h6 className="m-0 text-primary">{item.date.split(" ")[1]}</h6>
                                                <small className="text-muted text-primary">{item.date.split(" ")[0]}</small>
                                            </div>
                                        </Col>

                                        {/* RIGHT SIDE */}
                                        <Col md={10}>
                                            <Row>
                                                <Col>
                                                    <h6 className="m-0">{item.title}</h6>
                                                </Col>

                                                <Col className="text-end">
                                                    <span className="period-badge text-primary">
                                                        {item.period}
                                                    </span>
                                                </Col>
                                            </Row>

                                            <Row className="m-0">
                                                <Col className=" text-start">
                                                    <small className="text-muted">{item.topic}</small>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>
                        ))}
                    </Col>

                </Row>
            </div>

            {/* NOTE */}
            <Card className="mt-4 p-3">
                <h6>Note</h6>
            </Card>

        </div>
    );
};

export default MyClasses;
