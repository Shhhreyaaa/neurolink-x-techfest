import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AICore3D() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Get containers dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050816, 0.05);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 10;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x0b1020, 1.5);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x00d4ff, 3, 20);
    pointLightBlue.position.set(2, 3, 4);
    scene.add(pointLightBlue);

    const pointLightPurple = new THREE.PointLight(0x8b5cf6, 3, 20);
    pointLightPurple.position.set(-2, -3, 4);
    scene.add(pointLightPurple);

    // 5. Parent Group for Interactive Rotation
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 6. Central AI Core (Glowing Wireframe Icosahedron)
    const coreGeo = new THREE.IcosahedronGeometry(2, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // Dynamic inner core sphere
    const innerGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 7. Rotating Energy Rings
    const rings = [];
    const ringConfig = [
      { radius: 3.2, tube: 0.05, color: 0x00d4ff, speedX: 0.015, speedY: 0.02, tiltX: 0.5, tiltY: 0.4 },
      { radius: 3.8, tube: 0.025, color: 0x8b5cf6, speedX: -0.01, speedY: 0.015, tiltX: -0.6, tiltY: 0.8 },
      { radius: 4.4, tube: 0.015, color: 0x22d3ee, speedX: 0.02, speedY: -0.008, tiltX: 0.8, tiltY: -0.5 }
    ];

    ringConfig.forEach((cfg) => {
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 8, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = cfg.tiltX;
      ringMesh.rotation.y = cfg.tiltY;
      coreGroup.add(ringMesh);
      rings.push({ mesh: ringMesh, speedX: cfg.speedX, speedY: cfg.speedY });
    });

    // 8. Holographic Circular Grid Helper (Base)
    const gridHelper = new THREE.GridHelper(12, 24, 0x00d4ff, 0x8b5cf6);
    gridHelper.position.y = -4;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    gridHelper.material.blending = THREE.AdditiveBlending;
    coreGroup.add(gridHelper);

    // 9. Floating Particles (Starfield)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorBlue = new THREE.Color(0x00d4ff);
    const colorPurple = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      // Random coordinates in a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 4.5 + Math.random() * 3.5; // Radius between 4.5 and 8.0

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Interpolate colors
      const mixedColor = colorBlue.clone().lerp(colorPurple, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material using standard canvas texture or default square with glowing properties
    const particleMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particles);

    // 10. Orbiting Data Stream Particles (Nodes orbiting on rings)
    const dataStreamCount = 24;
    const streamParticles = [];
    const streamGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const streamMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < dataStreamCount; i++) {
      const mesh = new THREE.Mesh(streamGeo, streamMat);
      // Assign an orbit configuration
      const ringIndex = i % 3;
      const ringC = ringConfig[ringIndex];
      const speed = 0.5 + Math.random() * 1.5;
      const offset = Math.random() * Math.PI * 2;

      scene.add(mesh);
      streamParticles.push({
        mesh,
        ringIndex,
        speed,
        offset,
        radius: ringC.radius,
        tiltX: ringC.tiltX,
        tiltY: ringC.tiltY
      });
    }

    // 11. Mouse Movement Interaction Listeners
    const handleMouseMove = (event) => {
      // Normalize mouse coordinates (-1 to 1)
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.targetX = x * 0.4; // Sensitivity factor
      mouseRef.current.targetY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 12. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 13. Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth mouse interpolation (easing)
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Apply parallax to core group
      coreGroup.rotation.y = time * 0.05 + mouseRef.current.x;
      coreGroup.rotation.x = mouseRef.current.y;

      // Rotate central meshes
      coreMesh.rotation.y = time * 0.2;
      coreMesh.rotation.x = time * 0.1;

      innerMesh.rotation.y = -time * 0.4;
      innerMesh.rotation.z = time * 0.2;

      // Pulse inner core scale
      const scaleVal = 1.0 + Math.sin(time * 3) * 0.08;
      innerMesh.scale.set(scaleVal, scaleVal, scaleVal);

      // Pulse core mesh opacity
      coreMat.opacity = 0.5 + Math.sin(time * 2) * 0.15;

      // Rotate orbital rings
      rings.forEach((r) => {
        r.mesh.rotation.z += r.speedX * 0.3;
        r.mesh.rotation.y += r.speedY * 0.3;
      });

      // Rotate particle cloud independently
      particles.rotation.y = -time * 0.02;

      // Update orbiting stream nodes
      streamParticles.forEach((sp) => {
        const angle = time * sp.speed + sp.offset;
        
        // Calculate raw circular orbit position
        const localX = Math.cos(angle) * sp.radius;
        const localY = Math.sin(angle) * sp.radius;
        
        // Formulate 3D coordinates based on corresponding ring tilt
        const pos = new THREE.Vector3(localX, 0, localY);
        pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), sp.tiltX);
        pos.applyAxisAngle(new THREE.Vector3(0, 1, 0), sp.tiltY);
        
        // Apply group rotation offsets to match the coreGroup position
        pos.applyEuler(coreGroup.rotation);
        
        sp.mesh.position.copy(pos);
      });

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // 14. Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Clean up Three.js nodes
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      streamGeo.dispose();
      streamMat.dispose();
      gridHelper.material.dispose();
      gridHelper.geometry.dispose();

      rings.forEach((r) => {
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
      });

      streamParticles.forEach((sp) => {
        sp.mesh.geometry.dispose();
        sp.mesh.material.dispose();
        scene.remove(sp.mesh);
      });

      scene.remove(coreGroup);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto" />
  );
}
