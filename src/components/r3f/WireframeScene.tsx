import { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type Props = {
  url: string;
};

export const WireframeScene = (props: Props) => {
  const { url } = props;
  const { scene } = useLoader(GLTFLoader, url);

  useEffect(() => {
    scene.traverse((child) => {
      // @ts-expect-error Property 'isMesh' does not exist on type 'Object3D'.
      if (child.isMesh) {
        // @ts-expect-error Property 'isMesh' does not exist on type 'Object3D'.
        child.material.wireframe = true;
      }
    });
  }, [scene, url]);

  return <primitive object={scene} />;
};
