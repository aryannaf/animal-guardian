import React from 'react';
import './Landscape21.scss';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three';


function Landscape21() {

  const gltf = useLoader(GLTFLoader, '/models/bluefin-tuna.glb');

  return (
    <div className="landscape">
      <Canvas className="landscape__canvas">
        <Suspense fallback={null}>

          <PerspectiveCamera makeDefault position={[0, 1, 5]} />
          <OrbitControls />

          <mesh>
            <primitive object={gltf.scene} scale={0.8}/>
          </mesh>

          <ambientLight args={["#ffffff", 1]} />
          <directionalLight args={["#ffffff", 1]} position={[-4, 1, 0]}/>

          <Environment background>
            <mesh>
              <sphereGeometry args={[50, 100, 100]}/>
              <meshBasicMaterial color="#607d8b" side={THREE.BackSide}/>
            </mesh>
          </Environment>

        </Suspense>
      </Canvas>
    </div>
  )
}

export default Landscape21