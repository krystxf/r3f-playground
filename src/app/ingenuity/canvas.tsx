"use client";
import { assets } from "@/utils/assets";
import { infopoints } from "@/constants/infopoints";
import { Canvas } from "@/components/react-three-fiber/Canvas";
import { ModelWithInfopoints } from "@/components/react-three-fiber/ModelWithInfopoints";

export function IngenuityPageCanvas() {
    return (
        <div className="absolute left-0 top-0 z-0 h-screen w-full">
            <Canvas>
                <ModelWithInfopoints
                    modelPath={assets.ingenuity}
                    infopoints={infopoints.ingenuity}
                />
            </Canvas>
        </div>
    );
}
