import React from 'react'
import { Row,Col } from 'react-bootstrap'

function Contact() {
  return (
    <>
        <Row className='container-fluid  my-5'>
            <Col sm={12} md={3} className='my-5'>
                <h1 className='ms-5'>Get In Touch!</h1>
                <h5 className='ms-5'>Dont like forms? Send me an Email.</h5>
            </Col>
            <Col sm={12} md={9}>
            <div className='container p-4 rounded my-5' style={{backgroundColor:'#073642'}}>
                <Row sm={12}>
                    <Col sm={12} md={6}>
                        <label htmlFor="" className='my-2'>Name</label>
                        <input type="text" className='p-2 form-control rounded-pill'/>
                    </Col>
                    <Col sm={12} md={6}>
                        <label htmlFor="" className='my-2'>Email</label>
                        <input type="email" name="" id=""  className='p-2 form-control rounded-pill'/>
                    </Col>
                </Row>
                <label htmlFor="" className='my-2'>Subject</label>
                <input type="text" name="" id=""  className='p-2 form-control rounded-pill'/>
                <label htmlFor="" className='my-2'> Anything Else ...</label>
                <textarea name="" id="" className='form-control rounded p-5 mb-3'></textarea>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-success rounded-pill w-50 my-3 p-2'>Send Message</button>
                </div>
            </div>
            </Col>
        </Row>
            
    </>
  )
}

export default Contact