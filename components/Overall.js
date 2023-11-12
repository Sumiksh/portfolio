import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router'


export default function Overall() {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push('/education');
    }

    const experiencepage = (e) => {
        e.preventDefault();
        router.push('/experience');
    }

    const aboutmepage = (e) => {
        e.preventDefault();
        router.push('/aboutme');
    }

    return (
        <>
            <Row>
            <Col  xs={12} sm={12} md={12} lg={4} xl={4}  xxl={4}>
                <Card style={{ width: '100%', padding: '10px', border: 'none', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Card.Img variant="top" src="programming.jpg" style={{ height: '15rem', objectFit: 'cover' }} />
                    <Card.Body style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Title style={{ color: '#212529', fontSize: '1.5rem', fontWeight: 'bold' }}>About Me</Card.Title>
                        <Card.Text style={{ color: '#6c757d', fontSize: '1rem' }}>
                        Highly Motivated, result-driven and career-minded Programmer Analyst/ IT Specialist seeks
                        new position in dynamic, growth-oriented company focused on cultivating exceptional client
                        experience and a positive work environment.  
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }} onClick={aboutmepage}>More Information</Button>
                    </Card.Body>
                </Card>
            </Col>
            
            <Col  xs={12} sm={12} md={12} lg={4} xl={4}  xxl={4}>
                <Card style={{ width: '100%', padding: '10px', border: 'none', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Card.Img variant="top" src="experience.jpg" style={{ height: '15rem', objectFit: 'cover' }} />
                    <Card.Body style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Title style={{ color: '#212529', fontSize: '1.5rem', fontWeight: 'bold' }}>Experience</Card.Title>
                        <Card.Text style={{ color: '#6c757d', fontSize: '1rem' }}>
                            Experienced IT Programmer Specialist with a strong background in software development, database management, and IT solutions, 
                            specializing in Java, Python, and SQL. 
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}  onClick={experiencepage}>In-detail</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col  xs={12} sm={12} md={12} lg={4} xl={4}  xxl={4}>
                <Card style={{ width: '100%', padding: '10px', border: 'none', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <Card.Img variant="top" src="studyseneca.png" style={{ height: '15rem', objectFit: 'cover' }} />
                    <Card.Body style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Title style={{ color: '#212529', fontSize: '1.5rem', fontWeight: 'bold' }}>Education</Card.Title>
                        <Card.Text style={{ color: '#6c757d', fontSize: '1rem' }}>
                            Pursued study computer programming from last couple years. Certifications for various languages and technologies.
                        </Card.Text>
                        <Button variant="primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}   onClick={handleClick}>Details</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        </>
    );
}
