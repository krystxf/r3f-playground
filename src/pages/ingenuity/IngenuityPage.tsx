import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { assets } from "@/utils";
import { PageLayout } from "@/components/layout/Page";
import { Stats } from "@/pages/ingenuity/components/Stats";
import { detailByPart } from "@/pages/ingenuity/part-details.const";

export const IngenuityPage = () => {
  const model = useLoader(GLTFLoader, assets.ingenuity);

  const details = Object.entries(detailByPart).map(([key, value]) => ({
    key,
    position: model.nodes[key].position,
    ...value,
  }));

  return (
    <>
      <PageLayout.Canvas>
        <primitive object={model.scene} />
        {details.map((detail) => (
          <Html position={detail.position}>
            <div className="relative flex h-4 w-4 hover:scale-125 hover:bg-slate-800/20 active:scale-95 hover:backdrop-blur-lg rounded-full transition-all -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full rounded-full border-white/80 border-2"></div>
            </div>
          </Html>
        ))}

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
