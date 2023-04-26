/* eslint-disable react/no-unknown-property */

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export function Box() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(t, t, t);
  });
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  );
}
