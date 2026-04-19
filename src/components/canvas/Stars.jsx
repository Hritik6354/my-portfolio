import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Stars() {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 3000; i++) {
      vertices.push(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      );
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.5 });
    const stars = new THREE.Points(geometry, material);

    scene.add(stars);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0002;
      stars.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={mountRef} id="canvas-bg" />;
}