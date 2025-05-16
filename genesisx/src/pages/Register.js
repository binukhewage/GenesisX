import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState("");
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => setUserName(event.target.value);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        const formData = new FormData();
        formData.append("username", username);
        files.forEach(file => formData.append("userimg", file));

        try {
            const response = await axios.post("http://localhost:4006/user/api/register", formData, config);
            if (response.status === 200) {
                setUserName("");
                setFiles([]);
                toast.success("Images successfully uploaded");
                navigate('/success'); // Redirect to success page
            }
        } catch (error) {
            toast.error(error.response?.data?.error || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-page">
            <Container className="register-container">
                <Card className="register-card">
                    <div className="register-header">
                        <h2 className="register-title">
                            Medical Image <span className="text-gradient">Registration</span>
                        </h2>
                        <p className="register-subtitle">
                            Upload patient medical images for AI processing and synthetic generation
                        </p>
                    </div>

                    <Form onSubmit={handleSubmit} className="register-form">
                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Patient Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter patient name"
                                value={username}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="form-label">Medical Images</Form.Label>
                            <div className="file-upload-wrapper">
                                <Form.Control
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    accept=".png, .jpg, .jpeg, .dicom"
                                    required
                                    className="file-input"
                                />
                                <div className="upload-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Browse files</span>
                                </div>
                            </div>
                            <Form.Text className="text-muted">
                                Supported formats: PNG, JPG, JPEG, DICOM
                            </Form.Text>
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit" 
                            className="submit-button"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Uploading...' : 'Upload & Process'}
                            {!isLoading && (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ms-2">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </Button>
                    </Form>

                    {files.length > 0 && (
                        <div className="preview-section">
                            <h5 className="preview-title">Selected Images ({files.length})</h5>
                            <Row className="g-3">
                                {files.map((file, index) => (
                                    <Col key={index} xs={6} sm={4} md={3} lg={2}>
                                        <Card className="preview-card">
                                            <Card.Img 
                                                variant="top" 
                                                src={URL.createObjectURL(file)} 
                                                className="preview-image"
                                            />
                                            <div className="preview-overlay">
                                                <span>{file.name}</span>
                                            </div>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default Register;