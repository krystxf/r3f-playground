import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import { Suspense, type ReactNode } from "react";
import { Grid, OrbitControls } from "@/components/react-three-fiber";

type Props = {
  children: ReactNode;
};

export const Canvas = (props: Props) => {
  const { children } = props;

  return (
    <ReactThreeCanvas className="w-full h-full" shadows>
      <Suspense>
        <Grid />
      </Suspense>

      <Suspense>
        <Environment preset="sunset" />
      </Suspense>

      <PerspectiveCamera
        makeDefault
        position={[10, 8, 10]}
        rotation={[0, Math.PI / 2, 0]}
        fov={60}
      />

      <Suspense>
        <OrbitControls
          makeDefault
          autoRotate
          maxDistance={40}
          minDistance={5}
        />
      </Suspense>

      {children}
    </ReactThreeCanvas>
  );
};
