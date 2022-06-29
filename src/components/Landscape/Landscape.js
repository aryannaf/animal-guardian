import React from 'react';
import './Landscape.scss';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

function Landscape() {
  return (
    <div>
      <Canvas className="landscape">
        <Suspense fallback={null}>

        </Suspense>
      </Canvas>
    </div>
  )
}

export default Landscape