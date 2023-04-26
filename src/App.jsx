/* eslint-disable react/no-unknown-property */
import { ContactShadows, OrbitControls } from '@react-three/drei';
import './App.css';

import { Canvas } from '@react-three/fiber';
import { Shoe, state } from './Shoe';
import { useSnapshot } from 'valtio';
import { HexColorPicker } from 'react-colorful';
import { Suspense } from 'react';

export function Picker() {
  const snap = useSnapshot(state);
  return (
    <div
      className="color-container"
      style={{ display: snap.current ? 'flex' : 'none' }}
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Picker />
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} castShadow />
        <spotLight position={[10, 15, 10]} intensity={0.5} angle={0.1} />
        <Suspense fallback={null}>
          <Shoe />
        </Suspense>
        <Shoe />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
      </Canvas>
    </>
  );
}

export default App;
