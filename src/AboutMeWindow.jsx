import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import { Line, ScrollableComponent, ThreeLinesWrapper } from './CommonComponents';

const StyledAboutMe = styled.div`
    position: absolute;
    top: 80px;
    left: 80px;
    width: 240px;
    height: 240px;
    box-sizing: border-box;
    border: 1px solid white;
    background: black;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    font-size: 18px;
    z-index: ${({ zIndex }) => zIndex};
`;

const Header = styled.div`
    background: black;
    border-bottom: 1px solid white;
    padding: 2px 4px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin-left: 5px;
        margin-right: 5px;
    }
`;

const StyledAvatarIcon = styled.img`
    width: 40px;
`;

const StyledAboutTitle = styled.span`
    font-size: 20px;
    width: 100%;
`;

const AboutMeWindow = ({ close, zIndex }) => {
    return (
        <StyledAboutMe zIndex={zIndex}>
            <Header>
                <CloseButton close={close} />
                <ThreeLinesWrapper style={{
                    marginLeft: 5
                }}>
                    <Line />
                    <Line />
                    <Line />
                </ThreeLinesWrapper>
                <span>
                    About Me
                </span>
                <ThreeLinesWrapper>
                    <Line />
                    <Line />
                    <Line />
                </ThreeLinesWrapper>
            </Header>
            <ScrollableComponent style={{
                textAlign: 'center'
            }}>
                <StyledAvatarIcon src="/images/avatar.jpg" />
                <div>
                    My name is Alin
                </div>
                <div><br />
                <StyledAboutTitle>EXPERIENCE</StyledAboutTitle><br /> I've been working for the last 7 years as a front end developer because I love to create beautiful and functional interfaces that connect humans to machines.<br /><br />
                I just don't love creating things, I love learning new things.<br /><br/>
                <StyledAboutTitle>KNOWLEDGE</StyledAboutTitle><br />
                    I like to play with brain signals, visualize and learn about them.<br /><br />
                    Learn psychology and unlock the secrets of the human mind.<br /><br />
                    I like to learn about AI systems and how they can help us to improve our lives.<br /><br />
                    And... Spend countless hours thinking about the nature of reality, existence, pain, pleasure, belief systems, simulation theory, and the meaning of life.<br /><br />
                    <StyledAboutTitle>MY VISION</StyledAboutTitle><br />
                    I envision a future where humans are post-scarcity & inter planetary specie, we become friends with robots and artificial life (a.k.a alien life) and form a symbiotic relationship with them.<br /><br />
                    That's not to say it will be easy, we will have to overcome many challenges, work together to improve AI safety and make sure humanity and AI goals safely align.<br /><br />
                </div>
            </ScrollableComponent>
        </StyledAboutMe>
    )
}

export default AboutMeWindow;
