import React from 'react';
import Landscape1 from '../Landscape1/Landscape1';
import Landscape2 from '../Landscape2/Landscape2';
import Landscape3 from '../Landscape3/Landscape3';

function LandscapeRender({ animal }) {

    switch (animal) {
       case '1':
           return <Landscape1 />;
           break;
       case '10':
           return <Landscape2 />;
           break;
       case '12':
            return <Landscape3 />
            break;
       default:
           return null;
   }
}

export default LandscapeRender