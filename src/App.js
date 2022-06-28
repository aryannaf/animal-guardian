import logo from './logo.svg';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Landscape from './components/Landscape/Landscape';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Canvas className="landscape">
        <Suspense fallback={null}>
          <Landscape />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
