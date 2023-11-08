import React, { useRef } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Modal,
} from 'react-bootstrap';

const Inventory = () => {
    // Get the current URL using the useLocation hook to hide modal in customer dashboard
    const location = useLocation();
    const isModalVisible = !location.pathname.startsWith('/CustomerDashboard/');
  //form validation
  const [validated, setValidated] = useState(false);
  // For reCAPTCHA
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  //input data
  
  const [productID,setProductID] = useState('');
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [supplierID, setSupplierID] = useState('');
 

  const resetForm = () => {
    // Reset the form fields
    setProductID('');
    setProductName('');
    setDescription('');
    setQuantity('');
    setPrice('');
    setSupplierID('');

  };

  //triggers when submit button clicked
  const handleSubmit = (e) => {
    
    }

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <h2>Inventory Management</h2>
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
                  Product ID
                </Form.Label>

                <Form.Control
                  type='text'
                  maxLength={25}
                  required
                  value={productID}
                  onChange={(e) => setProductID(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter product ID
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label className='d-flex justify-content-start'>
                  Product Name
                </Form.Label>
                <Form.Control
                  type='text'
                  maxLength={25}
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter product name
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
           

            <Row className=' pb-2'>
              <Form.Group as={Col} controlId='formGridMake'>
                <Form.Label className='d-flex justify-content-start'>
                  Description
                </Form.Label>

                <Form.Control
                  type='text'
                  maxLength={20}
                  as="textarea" 
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter product description
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridModel'>
                <Form.Label className='d-flex justify-content-start'>
                  Quantity
                </Form.Label>
                <Form.Control
                  type='Number'
                  required
                  maxLength={25}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter product quantity
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className=' pb-2'>
              <Form.Group as={Col} controlId='formGridRegNum'>
              <Form.Label
                  htmlFor='inlineFormInputGroup'
                  visuallyHidden
                  className='d-flex justify-content-start'
                >
                  Price
                </Form.Label>
                <InputGroup className='mb-2'>
                  <InputGroup.Text type='number'>LKR</InputGroup.Text>
                  <Form.Control
                    type='Number'
                    id='inlineFormInputGroup'
                    placeholder=''
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <Form.Control.Feedback type='invalid'>
                    *Please enter product price
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId='formGridPassword'>
                <Form.Label className='d-flex justify-content-start'>
                  Supplier ID
                </Form.Label>
                <Form.Control
                  type='text'
                  maxLength={25}
                  required
                  value={supplierID}
                  onChange={(e) => setSupplierID(e.target.value)}
                />
                <Form.Control.Feedback type='invalid'>
                  *Please enter supplier ID
                </Form.Control.Feedback>
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

export default Inventory;
