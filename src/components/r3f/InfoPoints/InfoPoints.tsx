import { Html } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { Tooltip } from "@/components/Tooltip";
import { InfoPointMarker } from "@/components/r3f/InfoPoints/InfoPointMarker";

type Props = {
  infoPoints: Record<`info_${string}`, { label: string; description: string }>;
  modelUrl: string;
};

export const InfoPoints = (props: Props) => {
  const { infoPoints, modelUrl } = props;
  const model = useLoader(GLTFLoader, modelUrl);

  const points = Object.entries(infoPoints)
    .filter(([key]) => Boolean(model.nodes[key]))
    .map(([key, value]) => ({
      key,
      position: model.nodes[key].position,
      ...value,
    }));

  return points.map((detail, index) => (
    <Html position={detail.position} key={`${detail.key}-${index}`}>
      <Tooltip
        sideOffset={10}
        side="right"
        style={{
          fontFamily: "'Noto Mono', monospace",
        }}
        className="relative -translate-y-2 text-white border border-zinc-400/30 px-4 py-2 rounded-lg backdrop-blur bg-zinc-800/10"
        trigger={<InfoPointMarker />}
      >
        {detail.label}
      </Tooltip>
    </Html>
  ));
};
