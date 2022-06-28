import React from 'react';
import './AnimalDetailsPage.scss';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Landscape from './components/Landscape/Landscape';

function AnimalDetailsPage() {
    return (
        <div>
            <Canvas className="landscape">
                <Suspense fallback={null}>
                    <Landscape />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default AnimalDetailsPage