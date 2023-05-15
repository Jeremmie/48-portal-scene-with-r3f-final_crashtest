import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Swimming(props) {
  const group = useRef();
  const swimming = useGLTF('./model/swimming.gltf')
  const { nodes, materials } = useGLTF("./model/swimming.gltf");
  const animations = useAnimations(swimming.animations, swimming.scene)

  useEffect(() => {
    const action = animations.actions.swimming
    action.play()
}, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature001">
          <primitive object={swimming.scene} position={[7, 0, 0]}>
          <skinnedMesh
            name="perso"
            geometry={nodes.perso.geometry}
            material={materials.material_1}
            skeleton={nodes.perso.skeleton}
            animations={nodes.animations}
            
          />
          </primitive>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./model/swimming.gltf");


/* import { useAnimations, useGLTF, Html, Sphere } from '@react-three/drei'
import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'

export default function Swimming()
{   
    const swimming = useGLTF('./model/swimming.gltf')
    const animations = useAnimations(swimming.animations, swimming.scene)
    const { nodes } = useGLTF("./model/swimming.gltf");

    useEffect(() => {
        const action = animations.actions.swimming
        action.play()
    }, [])

    // Parcourir tous les matériaux de la scène et mettre en mode wireframe
    

    const placeHolder = useRef()
    const [hidden, set] = useState()

    return <>
    <primitive
    object={swimming.scene}
    position={[7, 0, 0]}
    
    >
        <Html
                 position={ [ 0.1, 0.1, 0.0 ] }
                 wrapperClass="label"
                 center
                 distanceFactor={ 3 }
                 occlude={[placeHolder]}
                 onOcclude={set}
                    style={{
                    transition: 'all 0.5s',
                    opacity: hidden ? 0 : 1,
                    transform: `scale(${hidden ? 0.5 : 1})`
                }}
                 > <p>this is a man</p> 
            </Html>
    </primitive >

    <Sphere material ref={placeHolder} position={[7, 0, 0]} scale={3} />
    </>
}
 */