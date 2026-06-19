"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Text } from "@react-three/drei";
// @ts-expect-error - no types available
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function ParticleSwarm(props: any) {
  const ref = useRef<THREE.Points>(null);
  const sphere = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#d40000"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function CanvasScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Text
          position={[0, 0, -2]}
          fontSize={1.5}
          color="#d40000"
          fillOpacity={0.1}
          letterSpacing={0.2}
          anchorX="center"
          anchorY="middle"
        >
          MADBIRD
        </Text>
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
