import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { assets } from "@/utils";

export const IngenuityDetail = () => {
  const ingenuity = useLoader(GLTFLoader, assets.ingenuity);

  return (
    <Canvas className="bg-transparent aspect-square">
      <Environment preset="sunset" />
      <PerspectiveCamera
        makeDefault
        position={[10, 8, 0]}
        fov={60}
        zoom={0.75}
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={-2}
        enableRotate={false}
        enablePan={false}
        enableZoom={false}
      />

      <primitive object={ingenuity.scene} />
    </Canvas>
  );
};
