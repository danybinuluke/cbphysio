'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import Reveal from '../ui/reveal';

const PART_TO_PAIN_MAPPING: Record<string, string> = {
  Hand1: 'Hand Pain',
  Hand2: 'Hand Pain',
  Head: 'Neck Pain',
  Neck: 'Neck Pain',
  Shoulder: 'Shoulder Pain',
  Hip: 'Hip Pain',
  Knee: 'Knee Pain',
  Knee1: 'Knee Pain',
  Foot: 'Foot Pain',
  Elbow1: 'Elbow Pain',
  Elbow2: 'Elbow Pain',
  Tricep: 'Tricep Pain',
  Tricep1: 'Tricep Pain',
  Back: 'Back Pain',
};

const PainDescriptions: Record<string, string> = {
  'Hand Pain': 'Hand pain may be due to repetitive stress, arthritis, or nerve compression like carpal tunnel syndrome.',
  'Neck Pain': 'Neck pain could result from poor posture, whiplash, or cervical disc issues.',
  'Shoulder Pain': 'Causes may include rotator cuff injuries, frozen shoulder, or impingement syndrome.',
  'Hip Pain': 'Hip pain might stem from arthritis, bursitis, or hip labral tears.',
  'Knee Pain': 'Knee pain is often caused by ligament injuries, arthritis, or meniscus tears.',
  'Foot Pain': 'May come from plantar fasciitis, flat feet, or sprains.',
  'Elbow Pain': 'Often caused by repetitive motions like tennis elbow or golfer’s elbow.',
  'Tricep Pain': 'Usually results from strain due to overuse or lifting.',
  'Back Pain': 'Common causes include muscle strain, disc issues, or poor ergonomics.',
  'General Pain': 'General discomfort possibly due to posture, fatigue, or overuse.',
};

const PainIcons: Record<string, JSX.Element> = {
  'Hand Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l4 4-2 6-6 2-4-4 8-8z" /></svg>,
  'Neck Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="7" r="5" /></svg>,
  'Shoulder Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4 12h16v2H4z" /></svg>,
  'Hip Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="16" r="4" /></svg>,
  'Knee Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><rect x="10" y="10" width="4" height="8" /></svg>,
  'Foot Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l6-6 6 6" /></svg>,
  'Elbow Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4l8 8-4 4-8-8z" /></svg>,
  'Tricep Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M2 12h20v2H2z" /></svg>,
  'Back Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2v20" /></svg>,
  'General Pain': <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>,
};

type PainPointData = {
  position: [number, number, number];
  painType: string;
};

const PainPoint = ({ position, painType }: PainPointData) => (
  <>
    <mesh position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
    </mesh>
    <Html position={[position[0], position[1] + 0.1, position[2]]} center>
      <div className="z-20 flex items-center space-x-2 text-white bg-black/80 p-2 rounded-lg shadow-lg text-sm">
        <div className="w-5 h-5 text-red-400">{PainIcons[painType] || PainIcons['General Pain']}</div>
        <h3 className="font-semibold">{painType}</h3>
      </div>
    </Html>
  </>
);

const Model = React.forwardRef(function Model(
  { onBodyClick }: { onBodyClick: (painType: string, position: THREE.Vector3) => void },
  ref: React.Ref<THREE.Group>
) {
  const { scene } = useGLTF('/models/human1.glb');

  useEffect(() => {
    scene.scale.set(0.2, 0.2, 0.2);
    scene.position.set(0, -1.5, 0);
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.name !== 'node1') {
        child.userData.clickable = true;
      }
    });
  }, [scene]);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.object.name === 'node1' || !e.object.name) return;
    const clickedPart = e.object.name;
    const pos = e.point;
    const painType = PART_TO_PAIN_MAPPING[clickedPart] || 'General Pain';
    onBodyClick(painType, pos);
  };

  return (
    <group ref={ref}>
      <primitive
        object={scene}
        onPointerDown={handlePointerDown}
        onPointerOver={() => (document.body.style.cursor = 'pointer')}
        onPointerOut={() => (document.body.style.cursor = 'auto')}
      />
    </group>
  );
});

const TestimonialsSection = () => {
  const [currentPainPoint, setCurrentPainPoint] = useState<PainPointData | null>(null);
  const modelRef = useRef<THREE.Group>(null);

  const addPainPoint = (painType: string, pos: THREE.Vector3) => {
    setCurrentPainPoint({ position: [pos.x, pos.y, pos.z], painType });
  };

  const simulateClickByPainType = (painType: string) => {
    const group = modelRef.current;
    if (!group) return;
    const matchingPartNames = Object.keys(PART_TO_PAIN_MAPPING).filter(
      (key) => PART_TO_PAIN_MAPPING[key] === painType
    );
    let found = false;
    group.traverse((child) => {
      if (found || !(child instanceof THREE.Mesh)) return;
      if (matchingPartNames.includes(child.name)) {
        const box = new THREE.Box3().setFromObject(child);
        const center = new THREE.Vector3();
        box.getCenter(center);
        addPainPoint(painType, center);
        found = true;
      }
    });
    if (!found) addPainPoint(painType, new THREE.Vector3(0, 0.5, 0));
  };

  const uniquePainTypes = Array.from(new Set(Object.values(PART_TO_PAIN_MAPPING)));

  const splitVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const splitTextLines = (text: string) =>
    text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={splitVariant}
        initial="hidden"
        animate="visible"
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ));

  return (
    <section className="relative z-10 w-full bg-black text-white py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {splitTextLines('Click on body parts or tags to highlight pain locations')}
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              {splitTextLines('Understand your discomfort by clicking pain points on the 3D Interactive Model')}
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-6">
          <Reveal className="w-full lg:w-2/3 h-[60vh]">
            <Canvas camera={{ position: [0, 2.8, 6], fov: 50 }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[0, 3, 3]} intensity={1.2} />
              <Model onBodyClick={addPainPoint} ref={modelRef} />
              {currentPainPoint && (
                <PainPoint position={currentPainPoint.position} painType={currentPainPoint.painType} />
              )}
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </Reveal>

          <Reveal className="w-full lg:w-1/3 flex flex-col justify-start text-left">
            <div className="flex flex-wrap gap-2 mb-3">
              {uniquePainTypes.map((pain, index) => (
                <button
                  key={index}
                  onClick={() => simulateClickByPainType(pain)}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 transition rounded-full text-sm flex items-center gap-1"
                >
                  <span className="w-4 h-4">{PainIcons[pain]}</span>
                  {pain}
                </button>
              ))}
              <button
                onClick={() => simulateClickByPainType('General Pain')}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 transition rounded-full text-sm flex items-center gap-1"
              >
                <span className="w-4 h-4">{PainIcons['General Pain']}</span>
                General Pain
              </button>
            </div>

            {currentPainPoint && (
              <div className="bg-white/5 p-3 rounded-lg">
                <h3 className="text-xl font-semibold mb-1">{currentPainPoint.painType}</h3>
                <p className="text-gray-300 text-sm">
                  {PainDescriptions[currentPainPoint.painType] || PainDescriptions['General Pain']}
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
