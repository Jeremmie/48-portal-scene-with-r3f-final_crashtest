import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import App from "/App.jsx";

/* Tuto theatre part */
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense } from "react";

/* studio.extend(extension); */
/* studio.initialize();
 */

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
     <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>
    <Canvas
        flat
        /* camera={ {
            fov: 45,
            near: 0.1,
            far: 50,
            position: [ 1, 2, 6 ]
        } } */
    >
        <color args={ [ '#030202' ] } attach="background" />
        
        <Experience />
        
    </Canvas>
   
    </>
)