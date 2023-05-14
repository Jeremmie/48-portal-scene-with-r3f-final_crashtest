import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function swimming()
{   
    const swimming = useGLTF('./model/swimming.glb')
    const animations = useAnimations(swimming.animations, swimming.scene)
    
    

    console.log(swimming)

    useEffect(() =>
    {
        const action = animations.actions.swimming
        action.play()
    }, [])

    return <primitive
    object={swimming.scene}
    
     />
}