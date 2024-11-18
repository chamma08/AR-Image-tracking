import React from "react";
import { Canvas } from "@react-three/fiber";
import { ImageTracker, ZapparCamera, ZapparCanvas, Loader } from "@zappar/zappar-react-three-fiber";
import { useGLTF } from "@react-three/drei";

const ARScene = () => {
  const gltf = useGLTF("/models/ELE.glb"); 

  return (
    <ZapparCanvas>
      <ZapparCamera />
      <ImageTracker
        targetImage={"/e.jpg"} 
        onNotVisible={() => console.log("Target not visible")}
        onNewAnchor={() => console.log("New anchor detected")}
      >
        <primitive object={gltf.scene} scale={0.1} />
      </ImageTracker>
      <Loader />
    </ZapparCanvas>
  );
};

export default ARScene;
