import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import styled from 'styled-components'
import React from "react"
import { useSpring, animated } from '@react-spring/three';
import { Loader, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const StyledStartGame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'VT323', monospace;
    color: white;
    font-size: 42px;
`;

const TextWrapper = styled.div`
    position: absolute;
    bottom: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-align: center;
`;

const StyledTextWapper = styled.div`
    padding: 10px 20px;
    border: 3px solid white;
    text-align: center;
    margin-top: 25px;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
`;

const AnimatedCamera = ({ initialPosition, finalPosition, isStarted, initialRotation, finalRotation }) => {
    const cameraRef = React.useRef();

    const { pos } = useSpring({
        pos: isStarted ? finalPosition : initialPosition,
        reset: isStarted,
        from: { pos: initialPosition },
        config: { duration: 400 },
    });

    const { rotation } = useSpring({
        rotation: isStarted ? finalRotation : initialRotation,
        reset: isStarted,
        from: { pos: initialRotation },
        config: { duration: 400 },
    });

    return (
        <animated.group position={pos} rotation={rotation}>
            <PerspectiveCamera
                makeDefault
                ref={cameraRef}
                fov={45}
                aspect={window.innerWidth / window.innerHeight}
            />
        </animated.group>
    );
};

const ContentLoader = () => {
    const [isStarted, setIsStarted] = React.useState(false);
    const computer = useGLTF('/models/computerv2.gltf')
    return (
        <>
            <Canvas>
                <AnimatedCamera initialRotation={[0, -0.1, 0]} finalRotation={[0, 0, 0]} initialPosition={[0, 0, 3]} finalPosition={[0, 0.28, 2.2]} isStarted={isStarted} />
                {<Suspense fallback={null}>
                    <Experience isStarted={isStarted} computer={computer} />
                </Suspense>}
            </Canvas>
            {(!isStarted && computer.scene) ? (
                <StyledStartGame>
                    <TextWrapper>
                        <span>MACINTOSH USER INTERFACE generated with AI</span>
                        <StyledTextWapper
                            onClick={() => {
                                setIsStarted(true);
                            }}
                        >
                            <span>PRESS TO START</span>
                        </StyledTextWapper>
                    </TextWrapper>
                </StyledStartGame>
            ) : null}
        </>
    );
};

const Content = () => {
    return (
        <>
            <Suspense fallback={null}>
                <ContentLoader />
            </Suspense>
            <Loader />
        </>
    );
};

root.render(<Content />)
