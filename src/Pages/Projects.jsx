import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cusine from '../assets/cuisine.png'
import netflix from '../assets/netflix.png'
import counter from'../assets/counter.png'
import coffee from'../assets/coffee.png'
import contact from'../assets/contacts.png'
import calculator from'../assets/calculator.png'

function Projects() {
  return (
    <>
    <h1 className='text-center my-5'>WORKS</h1>
    <div className='d-flex justify-content-around my-5'>
      <Row>
     
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top"  height={'200px'} src={calculator} />
        <Card.Body>
          <Card.Title className='text-center'>Expression-Calculator</Card.Title>
          <Card.Text className='text-center'>
          HTML , CSS , JS , REACTJS , REACT-REDUX
          </Card.Text>
            <Link className='btn btn-success me-2' to='https://github.com/FathimaRuba/Calculator'>Github</Link>
            <Link className='btn btn-secondary' to = 'https://calculator-reactjs-xi.vercel.app/' >Live Link</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top"  height={'200px'} src={counter}/>
        <Card.Body>
          <Card.Title className='text-center'>Counter</Card.Title>
          <Card.Text className='text-center'>
          HTML , CSS , JS , REACTJS , REACT-REDUX
          </Card.Text>
            <Link className='btn btn-success me-2' to = 'https://github.com/FathimaRuba/Counter' >Github</Link>
            <Link className='btn btn-secondary' to = 'https://counter-two-beige.vercel.app/' >Live Link</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top"  height={'200px'} src={contact}/>
        <Card.Body>
          <Card.Title className='text-center'>Contact-Management</Card.Title>
          <Card.Text className='text-center'>
          HTML , CSS , JS , REACTJS
          </Card.Text>
            <Link className='btn btn-success me-2' to='https://github.com/FathimaRuba/contact_management'>Github</Link>
            <Link className='btn btn-secondary' to = 'https://contact-management-one.vercel.app/' >Live Link</Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
    </div>
    <div className='d-flex justify-content-around my-5'>
      <Row>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top" height={'200px'} src={cusine}/>
        <Card.Body>
          <Card.Title className='text-center'>Cuisine - Recipe App</Card.Title>
          <Card.Text className='text-center'>
          HTML , CSS , JS 
          </Card.Text>
            <Link className='btn btn-success me-2' to='https://github.com/FathimaRuba/Cuisine'>Github</Link>
            <Link className='btn btn-secondary' to = 'https://fathimaruba.github.io/Cuisine/' >Live Link</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top" height={'200px'} src={coffee}/>
        <Card.Body>
          <Card.Title className='text-center'>Coffee</Card.Title>
          <Card.Text className='text-center'>
          HTML , CSS , BOOTSTRAP 
          </Card.Text>
            <Link className='btn btn-success me-2' to='https://github.com/FathimaRuba/coffeeshop'>Github</Link>
            <Link className='btn btn-secondary' to = 'https://fathimaruba.github.io/coffeeshop/' >Live Link</Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className='my-3'>
        <Card style={{ width: '20rem' ,textAlign:'center'}} >
        <Card.Img variant="top"  height={'200px'} src={netflix}/>
        <Card.Body>
          <Card.Title className='text-center'>Netflix-Clone</Card.Title>
          <Card.Text className='text-center'>
          HTML , CSS , BOOTSTRAP 
          </Card.Text>
            <Link className='btn btn-success me-2' to='https://github.com/FathimaRuba/Netflix-Clone'>Github</Link>
            <Link className='btn btn-secondary' to = 'https://fathimaruba.github.io/Netflix-Clone/' >Live Link</Link>
          </Card.Body>
        </Card>
      </Col>
      
    </Row>
    
    </div>


    </>
  )
}

export default Projects