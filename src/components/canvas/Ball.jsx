import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Add Decal as a sibling to material and geometry */}
        <Decal position={[0, 0, 1]} map={decal} rotation={[ 2 * Math.PI, 0, 6.25]}/>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
