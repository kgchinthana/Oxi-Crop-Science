import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import register from '../components/images/register.jpg';
import swal from 'sweetalert';
import { GoogleLogin } from 'react-google-login';
import {
  TextField,
  Grid,
  Container,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  InputAdornment,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import { Image } from 'react-bootstrap';
const clientId ='790433585929-p9slfbpl44uau7urp5tu91b5h5trl21j.apps.googleusercontent.com';

const Signup = () => {

  /* This must be change*/
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordComfirm] = useState('');
  const [open, setOpen] = React.useState(false);
  const [textInputErrorMessageTelephone, setTextInputErrorMessageTelephone] =useState(null);
  const [textInputErrorMessageEmail, setTextInputErrorMessageEmail] = useState(null);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/authentication/register', {
        name,  
        address,
        contact,
        email,
        password,
        passwordConfirm,
      })
      .then(() => {
        swal('Registered!','', 'success'); // Show success message
        setName('');
        setAddress('');
        setContact('');
        setEmail('');
        setPassword('');
        setPasswordComfirm('');
        setOpen(true);
        navigate('/login');
      })
      .catch((error) => {
        swal('Email  is already exist!','', "error"); // Show success message
        setName('');
        setAddress('');
        setContact('');
        setEmail('');
        setPassword(''); 
        setPasswordComfirm('');     });
    };

  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS! Current user: ', res.profileobj);
  };

  const onFailure = (res) => {
    console.log('LOGIN FAILED! res: ', res);
  };

  const handleTelephoneChange = (e) => {
    const inputValue = e.target.value;
    // Regular expression to allow integers
    const teleRegex =
      /^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$/;

    if (teleRegex.test(inputValue) || inputValue !== ' ') {
      setContact(inputValue);
    }
    else{
      setTextInputErrorMessageTelephone('*Please enter a valid telephone number');
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };


  const handleEmailChange = (e) => {
    const inputValue = e.target.value;

    // Regular expression to allow integers, alphabets and special characters
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    // Check if the input matches the pattern or is empty
    if (emailRegex.test(inputValue) || inputValue !== ' ') {
      setEmail(inputValue);
    }
    else{
      setTextInputErrorMessageEmail('*Please enter a valid email address');
      
    }

  };
 

  return (
    <Container>
      <div className='register__customer__container '>
        <Grid container spacing={2}>
          {/* Left side with register customer image */}
          <Grid item xs={12} md={6}>
            <div className='register__customer__img'>
              <Image src={register} fluid accessKey='Signup image'></Image>
            </div>
          </Grid>

          {/* Right side with form components */}
          <Grid item xs={12} md={6}>
            {/* Form */}
            <div className='register__customer__form'>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    {/* Heading */}
                    <div className='register__customer__heading'>
                      <h2>Sign up</h2>
                    </div>
                  </Grid>
                  {/*  Name */}
                  <Grid item xs={12}>
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='Name'
                      variant='outlined'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      size='small'
                      style={{ width: '80%' }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Address */}
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='Address'
                      variant='outlined'
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      size='small'
                      style={{ width: '80%' }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Telephone Number */}
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='Telephone Number'
                      variant='outlined'
                      value={contact}
                      helperText={textInputErrorMessageTelephone}
                      onChange={handleTelephoneChange}
                      size='small'
                      style={{ width: '80%' }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Email */}
                    <TextField
                      className='input-text'
                      id='outlined-basic'
                      label='Email'
                      variant='outlined'
                      value={email}
                      helperText={textInputErrorMessageEmail}
                      onChange={handleEmailChange}
                      size='small'
                      style={{ width: '80%', height: '5%' }}
                      required
                    />

                  </Grid>
                  <Grid item xs={12}>
                    {/* Password */}
                    <TextField
                      className='input-text'
                      id='outlined-password-input'
                      label='Password'
                      variant='outlined'
                      type='password'
                      value={password}
                      autoComplete='current-password'
                      size='small'
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: '80%',
                        height: '5%',
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {/* Password */}
                    <TextField
                      className='input-text'
                      id='outlined-password-input'
                      label='Confirm Password'
                      variant='outlined'
                      type='password'
                      value={passwordConfirm}
                      autoComplete='current-password'
                      size='small'
                      onChange={(e) => setPasswordComfirm(e.target.value)}
                      style={{
                        width: '80%',
                        marginBottom: '5%',
                        height: '5%',
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} style={{ width: '80%' }}>
                    {/* Signup Button */}
                    <div className='register__vehicle__submitbtn'>
                      <Button type='submit' variant='contained' color="success">
                        Sign up
                      </Button>
                    </div>
                  </Grid>
                  <Grid item xs={12} style={{ width: '80%' }}>
                    {/* Google Signup Button */}
                    <div className='social__icons' id='signInDutton'>
                      <p> or Sign Up Using</p>

                      <GoogleLogin
                        className='google__login'
                        clientId={clientId}
                        buttonText='Sign in with Google'
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} style={{ width: '100%' }}>
                    {/* move to login */}
                    <div className='already__have__an__account'>
                      <p>
                        Already Have an Account <Link to='/login'>Login</Link>
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Snackbar component */}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Vehicle Registered Successfully
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Signup;
