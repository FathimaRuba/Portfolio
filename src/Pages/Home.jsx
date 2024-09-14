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
            <Card.Img variant="top" height='200px' src="https://camo.githubusercontent.com/01c83210f7feb975ea3b9a852808beb6689425add471f76f942c15875626af5d/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3537363966633430316236333162616231616464623261622f313534313538303631313632342d5445363451474b524a4738535741495553374e532f6b6531375a77644742546f6464493870446d34386b506f73776c7a6a53564d4d2d53784f703743563539425a772d7a505067646e346a557756634a45315a7657515578776b6d794578676c4e714770304976544a5a616d574c49327a76595748384b332d735f3479737a63703272795449304871544f6161556f68724938504936465879386339505774426c7141566c555335697a7064634958445a71445976707252715a32395077306f2f636f64696e672d667265616b2e676966" />
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