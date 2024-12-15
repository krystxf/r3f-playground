import { GridProps, Grid as GridR3f } from "@react-three/drei";

type Props = GridProps;

export const Grid = (props: Props) => {
  return (
    <GridR3f
      infiniteGrid
      cellSize={0.5}
      sectionSize={5}
      cellThickness={0.5}
      sectionThickness={1}
      cellColor="#444"
      sectionColor="#3a2600"
      fadeDistance={500}
      fadeStrength={10}
      followCamera
      {...props}
    />
  );
};
