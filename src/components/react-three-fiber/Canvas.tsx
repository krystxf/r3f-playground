import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import { Suspense, type ReactNode } from "react";
import { Grid, OrbitControls } from "@/components/react-three-fiber";

type Props = {
    children: ReactNode;
    camera?: ReactNode;
};

export const Canvas = (props: Props) => {
    const { children, camera } = props;

    return (
        <ReactThreeCanvas className="h-full w-full" shadows>
            <Grid />

            <Suspense>
                <Environment preset="sunset" />
            </Suspense>

            {camera ?? (
                <PerspectiveCamera
                    makeDefault
                    position={[10, 8, 10]}
                    rotation={[0, Math.PI / 2, 0]}
                    fov={60}
                />
            )}
            <OrbitControls
                makeDefault
                autoRotate
                maxDistance={40}
                minDistance={5}
            />

            {children}
        </ReactThreeCanvas>
    );
};
