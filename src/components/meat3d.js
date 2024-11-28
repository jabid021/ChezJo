import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Bounds } from "@react-three/drei";
const RotatingModel = () => {
  const { scene } = useGLTF("/assets/meat/scene.gltf"); // This work is based on "Meat" (https://sketchfab.com/3d-models/meat-fdcbd368e9454f559364a4ee794453a9) by Coffeek (https://sketchfab.com/coffe0wolf) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  const modelRef = useRef();

  // Animation pour faire tourner le modèle
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotation autour de l'axe Y
      modelRef.current.rotation.x += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.5} />;
};

const Meat = () => {
  return (
    <div style={{ height: "500px", background: "white" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Bounds fit clip observe margin={1}>
          <RotatingModel />
        </Bounds>
        <RotatingModel />
      </Canvas>
    </div>
  );
};

export default Meat;
