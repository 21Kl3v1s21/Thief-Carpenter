'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

const HouseModel = () => {
  const { scene } = useGLTF('/models/house.glb')
  return <primitive object={scene} scale={1.8} />
}

const HouseCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 3, 6], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} />
      <Suspense fallback={null}>
        <HouseModel />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default HouseCanvas
