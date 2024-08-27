import { Suspense } from "react";
import { Environment, Html, PerspectiveCamera } from "@react-three/drei";

import { PageLayout } from "@/components/layout/Page";
import {
  IngenuityInfoPoints,
  Model,
  ModelPlaceholder,
  Stats,
} from "@/pages/ingenuity/components";

export const IngenuityPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-full bg-black" />
      <Suspense>
        <PageLayout.Canvas>
          <PerspectiveCamera
            makeDefault
            position={[10, 8, 10]}
            rotation={[0, Math.PI / 2, 0]}
            fov={60}
          />

          <Suspense>
            <IngenuityInfoPoints />
          </Suspense>
          <Suspense fallback={<ModelPlaceholder />}>
            <Model />

            <Environment preset="sunset" />
          </Suspense>

          <Suspense>
            <Html
              occlude="blending"
              transform
              rotation-x={-Math.PI / 2}
              position={[8, 0.01, 0]}
            >
              <Stats />
            </Html>
          </Suspense>
        </PageLayout.Canvas>
      </Suspense>
      <PageLayout.Title>Ingenuity</PageLayout.Title>
    </>
  );
};
