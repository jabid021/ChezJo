import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Bounds } from "@react-three/drei";

const RotatingModel = ({ setRotationCount }) => {
  const { scene } = useGLTF("/assets/meat/scene.gltf"); // This work is based on "Meat" (https://sketchfab.com/3d-models/meat-fdcbd368e9454f559364a4ee794453a9) by Coffeek (https://sketchfab.com/coffe0wolf) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  const modelRef = useRef();

  const lastRotationRef = useRef(0);

  useFrame(() => {
    if (modelRef.current) {
      // Faire tourner le modèle
      modelRef.current.rotation.y += 0.01; // Rotation autour de l'axe Y
      modelRef.current.rotation.x += 0.01;

      // Calculer les tours complets (axe Y comme référence)
      const currentRotationY = modelRef.current.rotation.y;
      if (
        currentRotationY % (2 * Math.PI) <
        lastRotationRef.current % (2 * Math.PI)
      ) {
        setRotationCount((prev) => prev + 1);
      }
      lastRotationRef.current = currentRotationY;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.5}
      onPointerOver={() => setRotationCount(0)}
    />
  );
};

const Meat = () => {
  const [rotationCount, setRotationCount] = useState(0);

  return (
    <div style={{ height: "500px", background: "white", position: "relative" }}>
      {/* Compteur affiché au-dessus de la 3D */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.8)",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#b22222",
        }}
      >
        Tours complets : {rotationCount}
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Bounds>
          <RotatingModel setRotationCount={setRotationCount} />
        </Bounds>
      </Canvas>
    </div>
  );
};

export default Meat;
