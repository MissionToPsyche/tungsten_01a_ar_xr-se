/*

  How it works:
  - The application initializes a Three.js scene with a horizontal screen for draggable satellite pieces, snap zones for object placement, and a greyed-out complete satellite.
  - Users can interact with the scene using WebXR controllers for VR/AR interaction and touch events on mobile devices.
  - The code includes touch event handlers for selecting and moving objects by touch.
  - Object snapping logic is implemented to snap dragged objects to predefined snap zones when they are close enough.
  
  TODO: 
  - Need to add 3D models for satellite pieces and refine the object interaction.
  */

import React, { useRef, useState } from 'react';
import { XRController, XRHand } from 'react-xr';
import * as THREE from 'three';

const App = () => {
  const [draggedObject, setDraggedObject] = useState(null);

  // Initialize Three.js scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create a horizontal screen for draggable satellite pieces
  const screenGeometry = new THREE.PlaneGeometry(5, 2);
  const screenMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC });
  const screen = new THREE.Mesh(screenGeometry, screenMaterial);
  screen.position.set(0, -2, -5);
  scene.add(screen);

  // Create an array to store snap zones (positions where objects can snap)
  const snapZones = [];

  // Create snap zones (e.g., positions where satellite pieces should snap)
  const snapZone1 = new THREE.Vector3(1, 0, -5);
  const snapZone2 = new THREE.Vector3(-1, 0, -5);
  snapZones.push(snapZone1, snapZone2);

  // Create a greyed-out complete satellite
  const satelliteCompleteGeometry = new THREE.BoxGeometry(2, 2, 2);
  const satelliteCompleteMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
  const satelliteComplete = new THREE.Mesh(satelliteCompleteGeometry, satelliteCompleteMaterial);
  satelliteComplete.position.set(0, 0, -5);
  scene.add(satelliteComplete);

// Create a placeholder mesh for satellite pieces
const satellitePieceGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const satellitePieceMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const satellitePiece = new THREE.Mesh(satellitePieceGeometry, satellitePieceMaterial);
scene.add(satellitePiece);

// Set up raycaster and mouse vector for touch interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Function to handle object selection
const handleObjectSelection = (event) => {
  event.preventDefault();

  mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.touches[0].clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(satellitePiece);

  if (intersects.length > 0) {
    const object = intersects[0].object;
    // Handle object selection
    setDraggedObject(object);
  }
};

// Function to handle object movement
const handleObjectMovement = (event) => {
  event.preventDefault();

  mouse.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.touches[0].clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  if (draggedObject) {
    // Update the position of the dragged object
    const position = new THREE.Vector3();
    draggedObject.getWorldPosition(position);
    position.z = 1; //TODO: Adjust based on scene
    draggedObject.position.copy(position);
  }
};

// Set up WebXR session
const onControllerSelect = (controller) => {
  if (draggedObject) return;

  const intersections = controller.intersectObject(satellitePiece);

  if (intersections.length > 0) {
    // Start dragging the object
    setDraggedObject(controller);
  }
};

const onControllerDeselect = () => {
  if (draggedObject) {
    // Stop dragging the object
    setDraggedObject(null);
  }
};

const animate = () => {
  renderer.render(scene, camera);

  if (draggedObject) {
    // Update the position of the dragged object
    const position = new THREE.Vector3();
    draggedObject.getWorldPosition(position);
    position.z = 1; //TODO: Adjust based on scene
    draggedObject.position.copy(position);
  }

  requestAnimationFrame(animate);
};

  // Function to check for object snapping
  const checkForSnap = (objectPosition) => {
    for (const zone of snapZones) {
      if (objectPosition.distanceTo(zone) < 0.2) {
        return zone; // Object is close enough to snap
      }
    }
    return null; // Object doesn't snap to any zone
  };

  // TODO:  ----- FOR LATER IMPLEMENTATION-----
  // I've added basic object snapping logic. We will want to fine-tune
  // the snap zone positions and distances to ensure smooth snapping
  // behavior when the user interacts with the scene once we create models.


  return (
    <div onTouchStart={handleObjectSelection} onTouchMove={handleObjectMovement}>
      <XRController onSelect={onControllerSelect} onSqueeze={onControllerDeselect}>
        <XRHand />
      </XRController>
      <XRController onSelect={onControllerSelect} onSqueeze={onControllerDeselect}>
        <XRHand />
      </XRController>
    </div>
  );
};

export default App;
