import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { assets } from "@/utils";

export const Model = () => {
  const model = useLoader(GLTFLoader, assets.ingenuity.base);

  return <primitive object={model.scene} />;
};
