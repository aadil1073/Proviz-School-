import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

function AdminPanel() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/applications');
                const data = await response.json();
                setApplications(data);
            } catch (error) {
                console.log("Error fetching applications:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-container">
            <h2>Admin Panel - View Applications</h2>
            <table className="applications-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Statement</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <tr key={app._id}>
                            <td>{app.name}</td>
                            <td>{app.phoneNumber}</td>
                            <td>{app.email}</td>
                            <td>{app.statement}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;
