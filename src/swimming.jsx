import { useAnimations, useGLTF, Html } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function Swimming()
{   
    const swimming = useGLTF('./model/swimming.glb')
    const animations = useAnimations(swimming.animations, swimming.scene)
    const { nodes, materials } = useGLTF("./model/swimming.glb");

    useEffect(() => {
        const action = animations.actions.swimming
        action.play()
    }, [])

    // Parcourir tous les matériaux de la scène et mettre en mode wireframe
    Object.values(materials).forEach((material) => {
        material.wireframe = true;
    });

    return <primitive 
    object={swimming.scene}
    position={[7, 0, 0]}
    
    >
        <Html
                 position={ [ 0.1, 0.1, 0.0 ] }
                 wrapperClass="label"
                 center
                 distanceFactor={ 3 }
                 > <p>this is a man</p> 
            </Html>
    </primitive>;
}