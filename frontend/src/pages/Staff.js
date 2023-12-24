import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from 'react-bootstrap';

const Staff = () => {
  // Get the current URL using the useLocation hook to hide modal in customer dashboard
  const location = useLocation();
  //form validation
  const [validated, setValidated] = useState(false);

  const [fullName, setFullName] = useState('');
  const [idNo, setIdNo] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [salary, setSalary] = useState('');

  const resetForm = () => {
    // Reset the form fields
    setFullName('');
    setIdNo('');
    setAddress('');
    setContact('');
    setSalary('');
  };

  //triggers when submit button clicked
  const handleSubmit = (e) => {};


  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; // Months are 0-indexed, so add 1
    let day = today.getDate();

    // Ensure that month and day have leading zeros for proper formatting
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  return (
    <section>
      <Container className='shadow p-3 mb-5 bg-body rounded'>
        <h2>Staff Management</h2>
        <div className=' pl-4 pr-4 pt-2 pb-2'>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className='text-left'
          >
            <Row className=' pb-2'>
              <Form.Group as={Col} controlId='text'>
                <Form.Label className='d-flex justify-content-start'>
                  Full Name
                </Form.Label>

                <Form.Control
                  type='text'
                  maxLength={25}
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter full name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label className='d-flex justify-content-start'>
                  NIC Number
                </Form.Label>
                <Form.Control
                  type='text'
                  maxLength={25}
                  required
                  value={idNo}
                  onChange={(e) => setIdNo(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter valid NIC number
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className=' pb-2'>
              <Form.Group as={Col} controlId='formGridMake'>
                <Form.Label className='d-flex justify-content-start'>
                  Address
                </Form.Label>

                <Form.Control
                  type='text'
                  maxLength={20}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter valid address
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className=' pb-2'>
              <Form.Group as={Col} controlId='formGridMake'>
                <Form.Label
                  htmlFor='inlineFormInputGroup'
                  visuallyHidden
                  className='d-flex justify-content-start'
                >
                  Mobile Number
                </Form.Label>
                <InputGroup className='mb-2'>
                  <InputGroup.Text type='number'>+94</InputGroup.Text>
                  <Form.Control
                    type='tel'
                    pattern='[0-9]{9}'
                    minLength={9}
                    maxLength={9}
                    id='inlineFormInputGroup'
                    placeholder=''
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <Form.Control.Feedback type='invalid'>
                    *Please enter a valid mobile number
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridRegNum'>
                <Form.Label
                  htmlFor='inlineFormInputGroup'
                  visuallyHidden
                  className='d-flex justify-content-start'
                >
                  Salary
                </Form.Label>
                <InputGroup className='mb-2'>
                  <InputGroup.Text type='number'>LKR</InputGroup.Text>
                  <Form.Control
                    type='Number'
                    id='inlineFormInputGroup'
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                  <Form.Control.Feedback type='invalid'>
                    *Please enter per month salary
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <div class='container d-flex justify-content-center'>
              <Button
                variant='success'
                type='submit'
                className=' mt-2 justify-content-center'
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default Staff;
