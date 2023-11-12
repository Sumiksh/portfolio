import React from 'react';

export default function Education() {
    const education = [
        {
            degree: 'Bachelor of Technology Software Development(Pursuing)',
            school: 'Seneca College',
            location: 'Toronto, ON',
            date: 'January 2023 – Present',
        },
        {
            degree: 'Diploma Computer Programming (Part Time)',
            school: 'Seneca College',
            location: 'Toronto, ON',
            date: 'January 2020 – January 2023',
        },
        {
            degree: 'Diploma Electrical Engineering',
            school: 'Georgian College',
            location: 'Barrie, ON',
            date: 'January 2015 – January 2017',
        },
    ];

    const certification = [
        {
            name: 'Introduction to Python',
            organization: 'DataCamp',
        },
        {
            name: 'Object-Oriented Programming in Python',
            organization: 'DataCamp',
        },
        {
            name: 'AutoCAD',
            organization: 'DataCamp',
        }
    ];

    const tableStyle = {
        backgroundColor: '#f2f2f2',
        borderCollapse: 'collapse',
        width: '100%',
        marginTop: '20px',
        fontSize: '16px',
    };

    const thStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        textAlign: 'left',
        padding: '8px',
    };

    const tdStyle = {
        textAlign: 'left',
        padding: '8px',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    };

    return (
        <>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Degree</th>
                        <th style={thStyle}>School</th>
                        <th style={thStyle}>Location</th>
                        <th style={thStyle}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {education.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle} >{item.degree}</td>
                            <td style={tdStyle}>{item.school}</td>
                            <td style={tdStyle}>{item.location}</td>
                            <td style={tdStyle}>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Organization</th>
                    </tr>
                </thead>
                <tbody>
                    {certification.map((item, newIndex) => (
                        <tr key={newIndex}>
                            <td style={tdStyle}>{item.name}</td>
                            <td style={tdStyle}>{item.organization}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
