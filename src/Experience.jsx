import { Html, PresentationControls, Environment } from '@react-three/drei'
import MacintoshOS from './MacintoshOS'

export default function Experience({ computer })
{
    
    return <>
        <color attach="background" args={['#161515']} />

        <Environment preset="sunset" />
        
        <PresentationControls
            global
            polar={ [ - 0.2, 0.1 ] }
            azimuth={ [ - 0.5, 0.25 ] }
            config={ { mass: 1, tension: 100 } }
            snap={ { mass: 2, tension: 100 } }
        > 

                <primitive
                    object={ computer.scene }
                    position={ [ 0, 0.05, 0 ] }
                    rotation={ [ 0, 0, 0 ] }
                    // rotation-x={ 0.13 }
                >
                    {<Html
                        transform
                        distanceFactor={ 0.95 }
                        position={ [ 0, 0.49, 0.28 ] }
                    >
                        <MacintoshOS />
                    </Html>}
                </primitive>
        </PresentationControls>

    </>
}