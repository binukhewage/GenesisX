import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import './Download.css';

const Download = () => {
    const [reportdata, setReportData] = useState([]);

    const handlegetReportdata = async () => {
        const response = await axios.get("http://localhost:4006/user/api/getReport").catch((error) => error);
        if (response.status === 200) {
            setReportData(response.data);
        }
    };

    useEffect(() => {
        handlegetReportdata();
    }, []);

    const downloadImages = async (images, username) => {
        const zip = new JSZip();
        const fetchPromises = images.map(async (img, idx) => {
            const imageUrl = `http://localhost:4006/downloads/${img}`;
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            zip.file(`${username}_image_${idx + 1}.${img.split('.').pop()}`, blob);
        });
        await Promise.all(fetchPromises);
        zip.generateAsync({ type: 'blob' }).then((content) => {
            saveAs(content, `${username}_images.zip`);
        });
    };

    return (
        <div className="download-page">
            <section className="download-section">
                <div className="container">
                    <h2 className="section-title">
                        Download <span className="text-gradient">Patient Reports</span>
                    </h2>

                    {reportdata.length > 0 ? (
                        <div className="reports-grid">
                            {reportdata.map((reports) => (
                                <div key={reports._id} className="report-card">
                                    <h3>{reports.username}</h3>
                                    
                                    <div className="report-images">
                                        {reports.userprofile.map((img, idx) => (
                                            <img
                                                key={idx}
                                                src={`http://localhost:4006/downloads/${img}`}
                                                alt={`Medical scan ${idx + 1}`}
                                                className="report-thumbnail"
                                            />
                                        ))}
                                    </div>

                                    <button
                                        className="download-button"
                                        onClick={() => downloadImages(reports.userprofile, reports.username)}
                                    >
                                        Download Results
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 10L12 15M12 15L7 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-data-message">No patient reports available</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Download;