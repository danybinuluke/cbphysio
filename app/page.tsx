'use client'; // This is needed if HomePage (imported below) uses client-side hooks

import HomePage from './HomePage'; // Import your actual HomePage component

// All loading screen logic and transitions are now handled by src/app/layout.tsx.
// This page component should simply render the main content of your application.
export default function Home() {
  return (
    <HomePage />
  );
}

