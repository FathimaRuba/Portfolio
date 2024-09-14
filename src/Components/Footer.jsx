import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className=' py-2 container-fluid' style={{backgroundColor:'#073642'}}>
        <Row className='p-5'>
        <Col sm={12} md={5}>
          <h3 className='fw-bold'>Fathima Ruba</h3>
          <p style={{textAlign:"justify"}}>A recent BCA graduate with distinction, currently advancing my skills through a MEARN stack internship at Luminar Technolab. With a strong passion for the IT industry, I'm eager to apply my knowledge and creativity in a professional setting. I'm actively seeking job opportunities and am ready to relocate for the right role.</p>
        </Col>
        <Col sm={12} md={2}>
          <h4 className='ms-3'>Links</h4>
          <div className='d-flex flex-column ms-3' style={{textDecoration:'none'}}>
          <Link className='text-secondary' to='/'>Home</Link>
          <Link className='text-secondary' to='/about'>About</Link>
          <Link className='text-secondary' to='/projects'>Projects</Link>
          <Link className='text-secondary' to='/contact'>Contact</Link>
          </div>
        </Col>
        <Col sm={12} md={5}>
          <h3 className='mt-2'>Get In Touch</h3>
          <div className='d-flex flex-column'>
            <p className='m-0'><i className="fa-brands fa-linkedin"/> 
            <Link to='https://www.linkedin.com/in/fathima-ruba1/' className='text-secondary px-3' style={{textDecoration:'none'}}>Fathima Ruba</Link></p>
            
            <p className='m-0'><i className="fa-solid fa-envelope" />
            <Link to='https://mail.google.com/mail/u/0/#inbox?compose=new' className='text-secondary px-3' style={{textDecoration:'none'}}>fathimaruba2@gmail.com</Link></p>
            <p className='m-0'><i className="fa-brands fa-github" />
            <Link to='https://github.com/FathimaRuba' className='text-secondary px-3' style={{textDecoration:'none'}}>FathimaRuba</Link>
            </p>
            <p className='m-0'><i className="fa-brands fa-instagram" />
            <Link to='https://www.instagram.com/_ruba677_/' className='text-secondary px-3' style={{textDecoration:'none'}}>_ruba677_</Link>
            </p>
          </div>
          
        </Col>
      </Row>
      <h6 className='text-center'>Fathima-Ruba &copy; All Rights Reserved.</h6>
    </div>
    </>
  )
}

export default Footer