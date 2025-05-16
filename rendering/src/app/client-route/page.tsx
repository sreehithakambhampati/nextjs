"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { useTheme } from '@/components/ThemeProvider';
import { useContext } from 'react';
import {ThemeContext} from '@/components/ThemeProvider';


export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };
  const theme = useContext(ThemeContext)
  
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
      <div style={{ color: theme.colors.primary }}>
      <h1>Client route page</h1>
    </div>
    </div>
  );
}
