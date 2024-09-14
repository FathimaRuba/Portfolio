import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ruba from '../assets/ruba.jpg'
import js from '../assets/js-essentials.png'
import python from '../assets/python-1.png'
import upcode from '../assets/upcode.png'

function About() {
  return (
    <>
        <div className='container my-5' style={{backgroundColor:'#073642'}}>
            <Row>
                <Col sm={12} md={6} className='p-5'>
                    <img src={ruba} alt="hero-section-image" height={'100vh'} className='rounded'/>
                    <h3 className='fw-bold mt-2'>Fathima Ruba</h3>
                    <h5>MEARN Stack Developer</h5>
                    <h6>Calicut,Kerala</h6>
                    <h4 className='mt-4'>Tools & Technologies</h4>
                    <Row className='mt-3'>
                        <Col>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap-5</li>
                        </ul>
                        </Col>
                        <Col>
                        <ul>
                            <li>Javascript</li>
                            <li>React-Js</li>
                            <li>Git & Github</li>
                        </ul>
                        </Col>
                        <Col>
                        <ul>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C Programming</li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6}>
                <p style={{textAlign:'justify'}} className=' bg-body p-5 rounded my-5'>I'm Fathima Ruba, an evolving MEARN stack developer from Kannur, Kerala. I completed my BCA with distinction in 2024 from Calicut University and am currently sharpening my skills as a MEARN stack intern at Luminar Technolab, Kozhikode. I have a great passion for working in the IT industry and am currently looking for job opportunities.

My job is to build websites that are not only functional and user-friendly but also attractive. I add a personal touch to each project, ensuring that it's eye-catching and easy to use. My aim is to creatively convey your message and identity through a compelling web presence.</p>
                </Col>
            </Row>
        </div>

        <div className='container'>

            
        <div className='container w-100'>
            <h1 className='my-5 text-center'>Experience</h1>
            <Row>
                <Col sm={12} md={12} style={{backgroundColor:'#073642'}} className='mb-5 p-4 rounded'>
                    <h3>MEARN STACK DEVELOPER INTERN</h3>
                    <h4>Luminar Technolab</h4>
                    <h5>Calicut, Kerala</h5>
                    <h6>May2024-Present</h6>
                    <ul>
                        <li>Contributed to developing and maintaining web applications using various tools and technologies (HTML, CSS, Bootstrap, Javascript, ReactJS,).</li>
                        <li>Assisted in implementing responsive designs to enhance user experience across various devices.</li>
                    </ul>
                    <h6>Projects</h6>
                    <ul>
                        <li>Media Player</li>
                        <ul>
                            <li>Developed a media player application with ReactJS that allows users to manage video categories, track watch history, and upload YouTube videos.</li>
                            <li>Enhanced user experience with features for organized content management and dynamic watch history, integrating YouTube video uploads for expanded media options.</li>
                        </ul>

                    <li>BMI Calculator</li>
                        <ul>
                            <li>Built a BMI Calculator using JavaScript to compute BMI from user inputs for height and weight, and display the result with corresponding health status.</li>
                        </ul>
                    </ul>
                </Col>
            </Row>
            </div>
            <h1 className='my-5 text-center'>Education</h1>
            <Row className='d-flex justify-content-around'>
                <Col sm={12} md={5} style={{backgroundColor:'#073642'}} className='mb-5 p-4 rounded'>
                    <h3>BACHELOR OF COMPUTER APPLICATION (BCA)</h3>
                    <h4>University of Calicut</h4>
                    <h5>JDT Islam College of Arts & Science</h5>
                    <h6>First Class With Distinction</h6>
                    <h6>2021-2024</h6>
                </Col>
                <Col sm={12} md={5} style={{backgroundColor:'#073642'}} className='mb-5 p-4 rounded'>
                    <h3>BIOLOGY SCIENCE</h3>
                    <h4>Kerala Syllabus</h4>
                    <h5>MMHSS, Thalassery, Kannur</h5>
                    <h6>9.4 Percentage</h6>
                    <h6>2019-2021</h6>
                </Col>
            </Row>
        </div>

        <h1 className='text-center my-3'>Certifications</h1>

<div className='d-flex justify-content-around my-5'>
      <Row>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top" height={'200px'} src={js}/>
        <Card.Body>
          <Card.Title className='text-center'>Javascript Essentials 1</Card.Title>
          <Card.Text className='text-center'>
          Cisco Network Academy 
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top"  height={'200px'} src={upcode}/>
        <Card.Body>
          <Card.Title className='text-center'>Software Development Bootcamp</Card.Title>
          <Card.Text className='text-center'>
          Upcode Software Labs 
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top"  height={'200px'} src={python}/>
        <Card.Body>
          <Card.Title className='text-center'>Python Essentials 1</Card.Title>
          <Card.Text className='text-center'>
          Cisco Network Academy
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
    </div>
    </>
  )
}

export default About