import { shaderMaterial, useAnimations, Sparkles, Center, useTexture, useGLTF, OrbitControls, Html, Box } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef, useState } from 'react'
import portalVertexShader from './shaders/portal/vertex.glsl'
import portalFragmentShader from './shaders/portal/fragment.glsl'
import Swimming from "./swimming.jsx"
import Computer_man from './computer_man.jsx'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'

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
    /**perf
     * 
     */
    <Perf position="top-left" />

    /**
     * debug pannel
     */
    const {orbitCamera} = useControls({ orbitCamera: true })
    



    const { nodes } = useGLTF('./model/tower.glb')

    const bakedTexture = useTexture('./model/baked.jpg')
    bakedTexture.flipY = false
    
    const portalMaterial = useRef()
    const placeHolder = useRef()

    const [hidden, set] = useState()
    
    
   /*  useFrame((state, delta) =>
    {
        portalMaterial.current.uTime += delta
    }) */

    return <>

        <color args={["#D489F3"]} attach={"background"} />

        
        { orbitCamera && <OrbitControls makeDefault /> }

        <Center>
            <mesh geometry={ nodes.tower.geometry }>
                <meshBasicMaterial wireframe />
            </mesh>

            <mesh geometry={ nodes.terrain.geometry }>
                <meshBasicMaterial wireframe />
            </mesh>

            <mesh geometry={ nodes.cube.geometry }>
            <Html
                 position={ [ 2, 1, 0 ] }
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
                 > <p>this is a tower</p> 
            </Html>

                <meshBasicMaterial wireframe />
            </mesh>

            <Swimming></Swimming>

            <Computer_man></Computer_man>

            
           
            

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

