import React from 'react';
import home from '../videos/home.mp4';
import '../../styles/carouselslider.css';
import search from '../images/search.png';
import { useState } from 'react';

export default function CarouselSlider() {
  return (
    <div className='video-background-holder'>
      <div className='video-background-overlay'></div>
      <video playsInline autoPlay muted loop>
        <source src={home} type='video/mp4' />
      </video>
      <div className='video-background-content container h-100'>
        <div className='d-flex h-100 text-center align-items-center'>
          <div className='w-100 text-white'>
            <h1 className='heroTitle'>
              Pioneering the agricultural sector in Sri Lanka
            </h1>
            <div className='heroTxt'>
              Oxi Crop Science is spearheading innovation and growth
            </div>
            <div className='container'>
              <form className='d-flex'>
                <input
                  className='form-control me-2 transparent-input'
                  type='search'
                  placeholder='Enter your search and press enter'
                  aria-label='Search'
                />
                <button className='btn btn-outline-info' type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
