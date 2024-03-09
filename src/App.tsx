import { Canvas } from "@react-three/fiber";
import {
  GizmoHelper,
  GizmoViewport,
  Environment,
  OrbitControls,
} from "@react-three/drei";

const App = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <Environment preset="sunset" />

      <OrbitControls />

      <GizmoHelper>
        <GizmoViewport />
      </GizmoHelper>
    </Canvas>
  );
};

export default App;
