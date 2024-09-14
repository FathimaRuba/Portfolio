import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import resume from '../assets/resume.pdf'
import ruba from '../assets/ruba.jpg'

function Home() {
  return (
    <>
        <div className='container-fluid'>
        <Row style={{height:'90vh'}} className='d-flex align-items-center justify-content-center'>
            <Col className='py-3' sm={12} md={6}>
                <div className='p-4 d-flex align-items-center justify-content-center flex-column my-5' style={{height:'75vh',backgroundColor:'#073642'}}>
                    <img src={ruba} alt="hero-section-image" height={'100vh'} className='rounded-pill'/>
                    <h3 className='fw-bold mt-2'>Fathima Ruba</h3>
                    <h5>MEARN Stack Developer</h5>
                    <p style={{textAlign:'justify'}}>A recent BCA graduate with distinction, currently advancing my skills through a MEARN stack internship at Luminar Technolab. With a strong passion for the IT industry, I'm eager to apply my knowledge and creativity in a professional setting. I'm actively seeking job opportunities and am ready to relocate for the right role.</p>
                    <Link to='/about' className='btn btn-info'>Explore More</Link>
                    {/* <Link to={resume} className='btn btn-outline-info mb-5 mt-2' download='resume'>Resume</Link> */}
                    <a href={resume} download='resume' className='btn btn-outline-info mb-5 mt-2 '>Resume</a>
                </div>
            </Col>
        </Row>
        <h1 className='text-center my-3'>Services</h1>
        <div className='d-flex flex-row justify-content-around my-5'>
            <Row>
                <Col sm={12} md={4} className='my-3'>
                <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height='200px' src="https://cdn-icons-gif.flaticon.com/9066/9066292.gif" />
            <Card.Body>
              <Card.Title>Fullstack Development</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>
              Providing full stack development services, from frontend to backend, ensuring seamless integration.
              </Card.Text>
            </Card.Body>
          </Card>
                </Col>
          <Col sm={12} md={4} className='my-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height='200px' src="https://arshwebtech.com/images/works/resiponsive-2.gif" />
            <Card.Body>
              <Card.Title>Responsive Design</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>
              Offering responsive design services to ensure seamless experiences across all devices.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} className='my-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height='200px' src="https://miro.medium.com/v2/resize:fit:1000/0*jxUH3Cwd-jlCnf3d" />
            <Card.Body>
              <Card.Title>Frontend Development</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>
              Offering tailored frontend services, delivering user-friendly interfaces that enhance user experience.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Home