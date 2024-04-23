import { Html, OrbitControls, PivotControls, TransformControls, Text, Float, MeshReflectorMaterial } from "@react-three/drei"
import { useRef } from "react"
import { Mesh } from "three"

export default function Experience()
{

    const cube = useRef()
    const sphere = useRef()

    return <>

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <PivotControls 
            anchor={ [ 0, 0, 0 ] }
            depthTest={ false }
            lineWidth={ 2 }
            axisColors={ [ '#9381ff', '#ff4d6d', '#7ae582' ]}
            scale={ 75 }
            fixed={ true }
            >
            <mesh position-x={ - 2 } ref={ sphere }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html 
                    position={ [ 1, 1, 0 ] }
                    wrapperClass="label"
                    center
                    distanceFactor={ 6 }
                    occlude={[ cube, sphere ]}
                >
                    That's a sphere :)
                </Html>
            </mesh>
        </PivotControls>

        <mesh position-x={ 2 } scale={ 1.5 } ref={ cube }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={ cube } mode="translate" />

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            {/* <meshStandardMaterial color="greenyellow" /> */}
            <MeshReflectorMaterial 
                color="greenyellow" 
                resolution={ 512 }
                blur={ [ 1000, 1000 ] }
                mixBlur={ 1 }
                mirror={ 0.6 }
            />
        </mesh>

        <Float
            speed={ 5 }
            floatIntensity={ 2.5 }
        >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 1 }
                color={ 'salmon' }
                position-y={ 2 }
                maxWidth={ 2 }
                textAlign="center"
            >
                POW !
            </Text>
        </Float>
        

    </>
}