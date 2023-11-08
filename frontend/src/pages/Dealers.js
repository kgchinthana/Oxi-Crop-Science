import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
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
import "../styles/dealers.css"
import dealers from '../components/images/dealers.jpg';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Dealers = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <Container>
      <div className='dealers__container '>
        <Grid container spacing={2}>
          {/* Left side with register customer image */}
          <Grid item xs={12} md={12}>
            <div className='dealers__img'>
              <Image src={dealers} fluid alt='login' />
            </div>
            <div className='dealers__details'>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} >
                    {/* Email */}
                    <FormControl sx={{ m: 1, width: 225 }}>
                      <InputLabel id='demo-multiple-name-label'>
                        Name
                      </InputLabel>
                      <Select
                        labelId='demo-multiple-name-label'
                        id='demo-multiple-name'
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label='Name' />}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {/* Password */}
                    <FormControl sx={{ m: 1, width: 225 }}>
                      <InputLabel id='demo-multiple-name-label'>
                        Name
                      </InputLabel>
                      <Select
                        labelId='demo-multiple-name-label'
                        id='demo-multiple-name'
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label='Name' />}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {/* Password */}
                    <FormControl sx={{ m: 1, width: 225 }}>
                      <InputLabel id='demo-multiple-name-label'>
                        Name
                      </InputLabel>
                      <Select
                        labelId='demo-multiple-name-label'
                        id='demo-multiple-name'
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label='Name' />}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ width: '70%', marginTop:"2%" }}>
                    {/* Signup Button */}
                    <div className='dealers__submitbtn'>
                      <Button
                        type='submit'
                        variant='contained'
                        color='success'
                        size='80%'
                      >
                        Rest filters
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Dealers;
