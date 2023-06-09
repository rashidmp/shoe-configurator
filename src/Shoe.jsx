/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/shoe.glb
*/

import { proxy, useSnapshot } from 'valtio';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const state = proxy({
  current: null,
  items: {
    laces: '#ffffff',
    mesh: '#ff0000',
    caps: '#000000',
    inner: '#ffffff',
    sole: '#000000',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff',
  },
});

import { useGLTF } from '@react-three/drei';

export function Shoe(props) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -0.2 - (1 + Math.sin(t / 1.5)) / 20
    );

    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  const snap = useSnapshot(state);

  console.log(snap.current);

  const { nodes, materials } = useGLTF('/shoe.glb');
  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      onPointerDown={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </group>
  );
}

useGLTF.preload('/shoe.glb');
