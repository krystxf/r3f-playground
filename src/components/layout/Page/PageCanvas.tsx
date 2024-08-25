import { Environment, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls } from "../../r3f";

type Props = {
  children: React.ReactNode;
  showAxes?: boolean;
};

export const PageCanvas = (props: Props) => {
  const { children, showAxes = false } = props;

  return (
    <Canvas style={{ background: "#101010" }}>
      <Grid />
      <OrbitControls />
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
