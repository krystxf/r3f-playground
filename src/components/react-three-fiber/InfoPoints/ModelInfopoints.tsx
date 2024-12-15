import { Html } from "@react-three/drei";
import { Tooltip } from "@/components/Tooltip";
import { InfoPointMarker } from "@/components/react-three-fiber/InfoPoints/InfoPointMarker";
import type { Infopoints } from "./infopoints.types";
import type { GLTF } from "three-stdlib";
import type { ObjectMap } from "@react-three/fiber";

type Props = {
  infoPoints: Infopoints;
  model: GLTF & ObjectMap;
};

export const ModelInfopoints = (props: Props) => {
  const { infoPoints, model } = props;

  const points = Object.entries(infoPoints)
    .filter(([key]) => Boolean(model.nodes[key]))
    .map(([key, value]) => ({
      key,
      position: model.nodes[key].position,
      ...value,
    }));

  return points.map((detail, index) => (
    <Html position={detail.position} key={`${detail.key}-${index}`}>
      <Tooltip.Provider>
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
      </Tooltip.Provider>
    </Html>
  ));
};
