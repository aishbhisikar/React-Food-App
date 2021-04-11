import React from 'react'
import {Form,Button} from 'react-bootstrap'

function ContactForm() {
    return (
      <div className="formBox">
        <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Control placeholder="Your Name" style={{borderRadius:'10px'}} />
                </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" style={{borderRadius:'10px'}} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3}
                placeholder="Enter your Message here...." style={{borderRadius:'10px'}} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
        </Form>
      </div>
    )
}

export default ContactForm
