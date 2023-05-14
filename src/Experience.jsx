import { shaderMaterial, useAnimations, Sparkles, Center, useTexture, useGLTF, OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef } from 'react'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import Swimming from "./swimming.jsx"

const PortalMaterial = shaderMaterial(
    {
        uTime: 0,
        uColorStart: new THREE.Color('#ffffff'),
        uColorEnd: new THREE.Color('#000000')
    },
    portalVertexShader,
    portalFragmentShader
)

extend({ PortalMaterial })

export default function Experience()
{
    const { nodes } = useGLTF('./model/tower.glb')

    const bakedTexture = useTexture('./model/baked.jpg')
    bakedTexture.flipY = false
    
    const portalMaterial = useRef()

    

   /*  useFrame((state, delta) =>
    {
        portalMaterial.current.uTime += delta
    }) */

    return <>

        <color args={["#D489F3"]} attach={"background"} />

        <OrbitControls makeDefault />

        <Center>
            <mesh geometry={ nodes.tower.geometry }>
                <meshBasicMaterial wireframe />
            </mesh>

            <mesh geometry={ nodes.terrain.geometry }>
                <meshBasicMaterial wireframe />
            </mesh>

            <mesh geometry={ nodes.cube.geometry }>
                <meshBasicMaterial wireframe />
            </mesh>

            <Swimming>
                <meshBasicMaterial wireframe />
            </Swimming>

            

            

           {/*  <mesh geometry={ nodes.poleLightA.geometry } position={ nodes.poleLightA.position }>
                
                <meshBasicMaterial color="#ffffe5" />
            </mesh>

            <mesh geometry={ nodes.poleLightB.geometry } position={ nodes.poleLightB.position }>
            <Html
                 
                position={ [ 0.1, 0.1, 0.0 ] }
                wrapperClass="label"
                center
                distanceFactor={ 3 }
                > <p>this is a lamp</p> 
                </Html>
                <meshBasicMaterial color="#ffffe5" />
            </mesh>

            <mesh geometry={ nodes.portalLight.geometry } position={ nodes.portalLight.position } rotation={ nodes.portalLight.rotation }>
                <portalMaterial ref={ portalMaterial } />
            </mesh> */}

            <Sparkles
		        size={ 6 }
                scale={ [ 4, 2, 4 ] }
                position-y={ 1 }
                speed={ 0.2 }
                count={ 40 }
            />
        </Center>

    </>
}