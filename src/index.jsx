import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import App from "/App.jsx";

/* Tuto theatre part */
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React, { Suspense } from "react";

studio.extend(extension);
studio.initialize();
studio.ui.hide()


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    
      <Suspense fallback={null}>
    
     <App>
      <Canvas>
      <Experience />
    </Canvas>
    </App>
    </Suspense>
    
    
    
   
    </>

    
)

