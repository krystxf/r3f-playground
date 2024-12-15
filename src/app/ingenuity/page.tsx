"use client";

import { assets } from "@/utils/assets";
import { infopoints } from "@/constants/infopoints";
import { Canvas } from "@/components/react-three-fiber/Canvas";
import { ModelWithInfopoints } from "@/components/react-three-fiber/ModelWithInfopoints";

export default function IngenuityPage() {
  return (
    <div className="w-full h-screen absolute top-0 left-0 z-0">
      <Canvas>
        <ModelWithInfopoints
          modelPath={assets.ingenuity}
          infopoints={infopoints.ingenuity}
        />
      </Canvas>
    </div>
  );
}
