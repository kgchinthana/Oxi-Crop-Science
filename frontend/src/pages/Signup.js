import React, {  useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import register from '../components/images/register.jpg';
import swal from 'sweetalert';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';

const Signup = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);

      e.preventDefault();

      axios
        .post('http://localhost:4000/api/authentication/register', {
          email,
          password,
        })
        .then(() => {
          swal('Registered!', '', 'success'); // Show success message
          setEmail('');
          setPassword('');
          navigate('/login');
        })
        .catch((error) => {
          swal('Email  is already exist!', '', 'error'); // Show success message
          setEmail('');
          setPassword('');
        });
    }
  };

  return (
    <Container>
      <div className='register__customer__container '>
        <Row container spacing={2}>
          {/* Left side with register customer image */}
          <Col item xs={12} md={6}>
            <div className='register__customer__topic'>
              <div className='register__customer__img'>
                <img src={register}></img>
              </div>
            </div>
          </Col>

          {/* Right side with form components */}
          <Col item xs={12} md={6}>
            {/* Form */}
            <div className='register__customer__form'>
              <h2
                data-testid='cypress-title'
                className='register__customer__heading'
              >
                Sign Up
              </h2>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className='text-left'
              >
                <Row className=' pb-2'>
                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label className='d-flex justify-content-start'>
                      Email
                    </Form.Label>
                    <Form.Control
                      type='email'
                      pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                      placeholder='Enter Email'
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />{' '}
                    <Form.Control.Feedback type='invalid'>
                      *Please enter a valid E-mail
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className=' pb-2'>
                  <Form.Group as={Col} controlId='formGridpassword'>
                    <Form.Label className='d-flex justify-content-start'>
                      Password
                    </Form.Label>
                    <Form.Control
                      type='password'
                      required
                      minLength={6}
                      maxLength={20}
                      value={password}
                      placeholder='Enter Password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter valid password above 6 characters
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <div class='container d-flex justify-content-center'>
                  <Button
                    variant='success'
                    type='submit'
                    className=' mt-2 justify-content-center'
                  >
                    SIGN UP
                  </Button>
                </div>
                <div className='social__icons__register' id='signInDutton'>
                  <p> or Sign Up Using</p>

                  <GoogleLogin
                    className='google__login'
                    buttonText='Sign in with Google'
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                  />
                </div>
                {/* move to login */}
                <div className='already__have__an__account'>
                  <p>
                    Already Have an Account <Link to='/login'>Login</Link>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Signup;
