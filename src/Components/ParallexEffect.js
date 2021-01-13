import React from 'react';
import kiya from '../Images/kiya_banner.png';
import Plx from 'react-plx';




const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 2,
          property: 'scale',
        },
      ],
    },
  ];
  
  class ParallexEffect extends React.Component {
    render() {
      return (
        <Plx
          className='MyAwesomeParallax'
          parallaxData={ parallaxData }
        >
       <img src={kiya} alt="picture of woman with braids" width="100%" />
        </Plx>
      );
    }
  }

  export default ParallexEffect;