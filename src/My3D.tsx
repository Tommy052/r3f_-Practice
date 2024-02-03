import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Mesh } from "three";

const My3D = () => {
  const meshref = useRef<Mesh>(null);
  useFrame((_,delta) => {
    if(meshref.current)(
      meshref.current.rotation.y += delta
    )
  })
  return(<>
  <directionalLight position={[1,1,1]} ></directionalLight>
  <mesh ref={meshref} rotation={[0,45,0]}>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
  </>)
}
export default My3D