import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { assets } from "@/utils";

export const PerseveranceDetail = () => {
  const perseverance = useLoader(GLTFLoader, assets.perseverance);
  perseverance.scene.position.set(0, -0.5, 0);

  return (
    <Canvas className="bg-transparent aspect-square">
      <Environment preset="sunset" />
      <PerspectiveCamera makeDefault position={[10, 5, 0]} fov={60} zoom={3} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={-2}
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
      />

      <primitive object={perseverance.scene} />
    </Canvas>
  );
};
