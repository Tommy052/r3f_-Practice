import { useFrame } from "@react-three/fiber";
import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
const My3D = () => {
  const meshref = useRef<Mesh>(null);
  useFrame((_,delta) => {
    if(meshref.current)(
      meshref.current.rotation.z += delta
    )
  })
  return (
    <>
      <directionalLight position={[1, 1, 1]}></directionalLight>
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh
        ref={meshref}
        position={[2, 0, 0]}
        rotation={[0, THREE.MathUtils.degToRad(45), 0]}
        scale={[1,2,1]}
      >
        <boxGeometry />
        <meshStandardMaterial color={'orange'} opacity={0.5} transparent={true}/>
        <axesHelper/>
        <mesh scale={[0.1,0.2,0.1]} position={[0,1.5,0]}>
          <sphereGeometry />
          <meshStandardMaterial color={'red'}/>
        </mesh>
      </mesh>
    </>
  );
};
export default My3D;
