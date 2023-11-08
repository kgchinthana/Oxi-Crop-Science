import React from 'react';
import CarouselSlider from '../components/Home/CaroselSlider';
import OurServices from '../components/Home/OurServices';
import NavbarHome from './commons/NavbarHome';

const Home = () => {
  return (
    <div>
      {/* <NavbarHome /> */}
      <CarouselSlider />
      <OurServices />
    </div>
  );
};

export default Home;
