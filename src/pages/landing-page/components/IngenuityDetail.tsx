import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { assets } from "@/utils";
import { Suspense } from "react";

export const IngenuityDetail = () => {
  const ingenuity = useLoader(GLTFLoader, assets.ingenuity.base);

  return (
    <Canvas className="bg-transparent aspect-square">
      <Suspense>
        <Environment preset="sunset" />
      </Suspense>

      <PerspectiveCamera
        makeDefault
        position={[10, 8, 0]}
        fov={60}
        zoom={0.75}
      />

      <Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={-2}
          enableRotate={false}
          enablePan={false}
          enableZoom={false}
        />
      </Suspense>

      <Suspense>
        <primitive object={ingenuity.scene} />
      </Suspense>
    </Canvas>
  );
};
