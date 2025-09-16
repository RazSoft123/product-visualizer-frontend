import { Suspense, useRef, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();
  const { camera, size } = useThree();

  useEffect(() => {
    if (ref.current) {
      // Compute bounding box of the model
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = box.getCenter(new THREE.Vector3());
      const sizeBox = box.getSize(new THREE.Vector3());

      // Re-center the model
      //   ref.current.position.x = (ref.current.position.x - center.x) / 2;
      //   ref.current.position.y = (ref.current.position.y - center.y) / 2;
      //   ref.current.position.z = (ref.current.position.z - center.z) / 2;
      ref.current.position.sub(center);

      // Adjust camera distance to fit model in view
      const maxDim = Math.max(sizeBox.x, sizeBox.y, sizeBox.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = maxDim / (2 * Math.tan(fov / 2));

      camera.position.set(0, 0, cameraZ * 2); // move camera back a bit
      camera.lookAt(0, 0, 0);
    }
  }, [scene, camera, size]);

  return <primitive object={scene} ref={ref} />;
}

export default function ProductCanvas3D({ modelUrl }) {
  return (
    <div id="canvas-container" className="w-full h-full">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ fov: 45, near: 0.1, far: 1000 }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 3]} />
        <color attach="background" args={["#A0B7E1"]} />
        <OrbitControls
          enablePan={false}
          minDistance={1}
          maxDistance={2}
          autoRotate={false}
        />
        <Suspense fallback={null}>
          <Model url={modelUrl} />
        </Suspense>
      </Canvas>
    </div>
  );
}
