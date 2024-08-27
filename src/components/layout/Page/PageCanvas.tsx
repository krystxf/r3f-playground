import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Grid, OrbitControls } from "@/components/r3f";

type Props = {
  children: React.ReactNode;
};

export const PageCanvas = (props: Props) => {
  const { children } = props;

  return (
    <Canvas className="w-full h-full bg-[#101010]" shadows>
      <Suspense>
        <Grid />
      </Suspense>
      <Suspense>
        <OrbitControls
          makeDefault
          autoRotate
          maxDistance={40}
          minDistance={5}
        />
      </Suspense>

      {children}
    </Canvas>
  );
};
