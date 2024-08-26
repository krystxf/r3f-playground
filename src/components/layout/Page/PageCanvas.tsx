import { Environment, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Grid, OrbitControls } from "@/components/r3f";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  showAxes?: boolean;
};

export const PageCanvas = (props: Props) => {
  const { children, showAxes = false } = props;

  // TODO: add controls
  const [autoRotate] = useState<boolean>(true);

  return (
    <Canvas
      style={{
        background: "#101010",
      }}
    >
      <Grid />
      <OrbitControls autoRotate={autoRotate} />
      <Environment preset="sunset" />

      {children}

      {showAxes && (
        <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper>
      )}
    </Canvas>
  );
};
