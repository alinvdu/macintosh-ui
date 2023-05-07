import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import { Line, ScrollableComponent, ThreeLinesWrapper } from './CommonComponents';

const StyledProjects = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 290px;
    height: 290px;
    box-sizing: border-box;
    border: 1px solid white;
    background: black;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    font-size: 17px;
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

const ProjectWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
`;

const ProjectIcon = styled.img`
    width: 48px;
`;

const ProjectTitle = styled.div`
    font-size: 22px;
    margin-bottom: 8px;
`;

const ProjectDescription = styled.div`
    font-size: 18px;
`;

const LinkButton = styled.div`
    border: 1px solid white;
    padding: 2px 4px;
    margin-right: 5px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background: white;
        color: black;
    }
`;

const ProjectDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
    box-sizing: border-box;
    text-align: left;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 12px;
`;

const LineSeparatorWrapper = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 15px;
`;

const LineSeparator = styled.div`
    width: 100%;
    height: 1px;
    background: white;
`;

const ProjectsWindow = ({ close, zIndex }) => {
    return (
        <StyledProjects zIndex={zIndex}>
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
                    Projects
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
                <ProjectWrapper>
                    <ProjectIcon src="/images/strawberry-ui-icon.png" />
                    <ProjectDescriptionWrapper>
                        <ProjectTitle>
                            Strawberry UI
                        </ProjectTitle>
                        <ProjectDescription>
                            A vibrant and visually stunning UI library inspired by the sweet and juicy fruit - the strawberry. Build with MidJourney and ChatGPT.
                        </ProjectDescription>
                        <ButtonsWrapper>
                            <LinkButton onClick={() => {
                                window.open("https://strawberryui.com")
                            }}>
                                Website
                            </LinkButton>
                            <LinkButton onClick={() => {
                                window.open("https://github.com/bobergsatoko/strawberryui");
                            }}>
                                Github
                            </LinkButton>
                        </ButtonsWrapper>
                    </ProjectDescriptionWrapper>
                </ProjectWrapper>
                <LineSeparatorWrapper>
                    <LineSeparator />
                </LineSeparatorWrapper>
                <ProjectWrapper>
                    <ProjectIcon src="/images/neural-icon.png" />
                    <ProjectDescriptionWrapper>
                        <ProjectTitle>
                            Emotiv Neural Commands
                        </ProjectTitle>
                        <ProjectDescription>
                            Move and train a game character in the web browser using your brain. Powered by Emotiv API neural commands with NodeJS API.
                        </ProjectDescription>
                        <ButtonsWrapper>
                            <LinkButton onClick={() => {
                                window.open("https://github.com/bobergsatoko/js-game-neural-commands");
                            }}>
                                Github
                            </LinkButton>
                        </ButtonsWrapper>
                    </ProjectDescriptionWrapper>
                </ProjectWrapper>
                <LineSeparatorWrapper>
                    <LineSeparator />
                </LineSeparatorWrapper>
                <ProjectWrapper>
                    <ProjectIcon src="/images/computer-icon.png" />
                    <ProjectDescriptionWrapper>
                        <ProjectTitle>
                            Speech to WebApp
                        </ProjectTitle>
                        <ProjectDescription>
                            Create a javascript application by talking, using google cloud and GPT3.
                        </ProjectDescription>
                        <ButtonsWrapper>
                            <LinkButton onClick={() => {
                                window.open("https://github.com/bobergsatoko/speech-to-webapp");
                            }}>
                                Github
                            </LinkButton>
                        </ButtonsWrapper>
                    </ProjectDescriptionWrapper>
                </ProjectWrapper>
                <LineSeparatorWrapper>
                    <LineSeparator />
                </LineSeparatorWrapper>
                <ProjectWrapper>
                    <ProjectIcon src="/images/homo-habilis-icon.png" />
                    <ProjectDescriptionWrapper>
                        <ProjectTitle>
                            Homo Habilis Reconstruction in 3D
                        </ProjectTitle>
                        <ProjectDescription>
                            Reconstruction of Homo Habilis based on John Gurche art (https://gurche.com/homo-floresiensis-1).
                        </ProjectDescription>
                        <ButtonsWrapper>
                            <LinkButton onClick={() => {
                                window.open("https://www.youtube.com/shorts/y1pag3zVPbg");
                            }}>
                                Youtube
                            </LinkButton>
                        </ButtonsWrapper>
                    </ProjectDescriptionWrapper>
                </ProjectWrapper>
            </ScrollableComponent>
        </StyledProjects>
    )
}

export default ProjectsWindow;
