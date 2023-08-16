import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
function Login() {
    const [email, setEmail]= useState("")
    const [password, setPassword]=useState("")
    const [bool, setBool]= useState(false)
    console.log(email, password, bool)
    const test = ()=>{
        email.includes("@")? setBool (true) : setBool (false)
    }

  return (
    <div>
        { bool? <Alert key="success" variant="success">
    This is a success alert
  </Alert> : <Alert key="danger" variant="danger">
    This is not an email
  </Alert>}
        <Card style={{ width: '25rem',backgroundColor:'red' }}>
        <Card.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="*******" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
        <Button variant="primary" onClick={test}>Submit</Button>
        <Button variant="danger">Remove</Button>
      </Card.Body>
    </Card>
    <div style={{backgroundColor:'black'}}>hello</div>
    </div>
  );
}

export default Login
