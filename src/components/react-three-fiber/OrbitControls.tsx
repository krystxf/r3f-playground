import {
    OrbitControlsProps,
    OrbitControls as OrbitControlsR3f,
} from "@react-three/drei";

type Props = OrbitControlsProps;

export const OrbitControls = (props: Props) => {
    return (
        <OrbitControlsR3f
            autoRotate
            autoRotateSpeed={0.1}
            minPolarAngle={Math.PI / 8}
            maxPolarAngle={Math.PI - Math.PI / 1.8}
            {...props}
        />
    );
};
