import {
    ModelInfopoints,
    type Infopoints,
} from "@/components/react-three-fiber/InfoPoints";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

type Props = {
    modelPath: string;
    infopoints: Infopoints;
};

export const ModelWithInfopoints = (props: Props) => {
    const { modelPath, infopoints } = props;

    const model = useGLTF(modelPath);

    return (
        <>
            <Suspense>
                <primitive object={model.scene} />
            </Suspense>

            <Suspense>
                <ModelInfopoints model={model} infoPoints={infopoints} />
            </Suspense>
        </>
    );
};
