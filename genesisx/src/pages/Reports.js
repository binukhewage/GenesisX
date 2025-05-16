import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './Reports.css'; // Optional external styling

const Reports = () => {
    const [reportdata, setReportData] = useState([]);

    const handleGetReportdata = async () => {
        try {
            const response = await axios.get("http://localhost:4006/user/api/getReport");
            if (response.status === 200) {
                setReportData(response.data);
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    useEffect(() => {
        handleGetReportdata();
    }, []);

    return (
        <>
            <div className="genesisx-wrapper" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
                {/* Logo */}
                <Container className="reports-container">
                    <div className="logo-text mb-4">
                        <div className="logo-icon">🧬</div>
                        <h1><span className="logo-blue">Genesis</span><span className="logo-red">X</span></h1>
                    </div>

                    <h2 className="text-center mb-4">Patient Reports</h2>
                    {/* Display Uploaded Patient Details */}
                    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                        {reportdata.length > 0 ? (
                            reportdata.map((reports, index) => (
                                <Col key={index}>
                                    <Card className="report-card shadow-sm">
                                        <Card.Body>
                                            <Card.Title className="text-center fw-bold">{reports.username}</Card.Title>
                                        </Card.Body>
                                        <div className="d-flex justify-content-center flex-wrap gap-2 p-3">
                                            {reports.userprofile.map((img, i) => (
                                                <Card.Img
                                                    key={i}
                                                    className="rounded-img"
                                                    src={`http://localhost:4006/downloads/${img}`}
                                                    alt={`report-${i}`}
                                                />
                                            ))}
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p className="text-center text-muted">No reports found.</p>
                        )}
                    </Row>
                </Container>
            </div>
            {/* Footer */}
            <div className="page-wrapper">
                <footer className="footer">
                    <span>GenesisX © All rights reserved</span>
                    <span>📧 genesisx@gmail.com</span>
                    <span>📞 077-0986543</span>
                </footer>
            </div>
        </>
    );
};

export default Reports;
