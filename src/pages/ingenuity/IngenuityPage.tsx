import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { PageLayout } from "@/components/layout/Page";
import { Stats } from "@/pages/ingenuity/components/Stats";
import { assets } from "@/utils";

export const IngenuityPage = () => {
  const model = useLoader(GLTFLoader, assets.ingenuity);

  return (
    <>
      <PageLayout.Canvas>
        <primitive object={model.scene} />

        <Html
          occlude="blending"
          transform
          rotation-x={-Math.PI / 2}
          position={[8, 0.01, 0]}
        >
          <Stats />
        </Html>
      </PageLayout.Canvas>

      <PageLayout.Title>Ingenuity</PageLayout.Title>
    </>
  );
};
