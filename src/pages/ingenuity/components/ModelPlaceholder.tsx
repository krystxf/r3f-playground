import { assets } from "@/utils";
import { WireframeScene } from "@/components/r3f";

const SpotLights = () => {
  const spotlightLocations = [
    [10, 0, 10],
    [10, 10, 0],
    [0, 10, 10],
    [-10, 0, -10],
    [-10, 10, 0],
    [0, 10, -10],
  ] as const;

  return spotlightLocations.map((position, index) => (
    <spotLight key={`spotlight-${index}`} position={position} intensity={200} />
  ));
};

export const ModelPlaceholder = () => {
  return (
    <>
      <SpotLights />
      <WireframeScene url={assets.ingenuity.without_textures} />
    </>
  );
};
