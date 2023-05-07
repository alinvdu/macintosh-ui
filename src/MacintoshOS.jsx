import styled from 'styled-components';
import AboutMeWindow from './AboutMeWindow';
import { useState } from 'react';
import ProjectsWindow from './ProjectsWindow';
import ContactWindow from './ContactWindow';
import LoveWindow from './LoveWindow';

const StyledWrapper = styled.div`
    width: 338px;
    height: 362px;
    background-color: #0E0E0E;
    border-radius: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 2px;
    border-radius: 12px;

    color: white;
    font-family: 'VT323', monospace;

    &:hover {
        cursor: default;
    }
    font-size: 18px;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    flex: 1;
`;

const Header = styled.div`
    background: black;
    border-bottom: 1px solid rgba(255, 255, 255, 0.79);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    padding: 0px 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;

const ContentWrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    background: radial-gradient(56.11% 59.42% at 50% 54.42%, #EBEFE6 0%, #638046 100%);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`;

const CheckerBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .3;
    background: url(/images/checker.jpg);
    background-size: 20px 20px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`;

const MainFolder = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 260px;
    height: 260px;
    box-sizing: border-box;
    border: 1px solid white;
    background: black;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    z-index: ${({ zIndex }) => zIndex};
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 15px;
    box-sizing: border-box;
`;

const LogoWrapper = styled.div``;

const AppleLogo = styled.img`
  width: 13px;
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    align-items: center;
    margin-left: 12px;
`;

const MenuItem = styled.div`
    font-size: 19px;
    line-height: 15px;
    margin-right: 25px;
    height: 100%;
    padding: 4px 3px;
    display: flex;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
    }
`;

const MainFolderHeader = styled.div`
    background: black;
    border-bottom: 1px solid white;
    padding: 2px 8px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainFolderSubHeader = styled.div`
    background: black;
    border-bottom: 1px solid white;
    padding: 2px 8px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    width: 50px;
`;

const Title = styled.div`
    color: white;
`;

const Folder = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 19px;
    margin-right: 20px;
    align-items: center;

    cursor: pointer;

    &:hover {
        ${Title} {
            background-color: white;
            color: black;
        }
    }
`;

const SmallDivider = styled.div`
    width: 100%;
    height: 2px;
    border-bottom: 1px solid white;
`;

const StyledTextWrapper = styled.div`
    background-color: black;
    color: white;
    font-size: 17px;
`;

const IconFolderAlin = styled.div`
    position: absolute;
    right: 10px;
    top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 2px 2px 0px 2px;
    cursor: pointer;
    &:hover {
        ${StyledTextWrapper} {
            background-color: white;
            color: black;
        }

        background-color: white;
    }
`;

const DesktopIcon = styled.img`
    width: 38px;
`;

const LoveIconWrapper = styled.div`
    position: absolute;
    right: 10px;
    top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    cursor: pointer;

    &:hover {
        ${StyledTextWrapper} {
            background-color: white;
            color: black;
        }

        background-color: white;
    }
`;

const ToolbarRight = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 18px;
    height: calc(100% - 17px);
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    box-sizing: border-box;
`;

const ToolbarBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 17px);
    height: 18px;
    border-right: 1px solid white;
    border-top: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;
    box-sizing: border-box;
`;

export const Arrow = ({ className }) => (
    <svg className={className} width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7.5L8 1L14 7.5H10.7692V12.5H5.23077V7.5H2Z" stroke="white" />
    </svg>
);

const StyledArrowUp = styled(Arrow)`
`;

const StyledArrowDown = styled(Arrow)`
    transform: rotate(180deg);
`;

const StyledArrowLeft = styled(Arrow)`
    transform: rotate(-90deg);
`;

const StyledArrowRight = styled(Arrow)`
    transform: rotate(90deg);
`;

const MacintoshOS = () => {
    const [isAboutMeOpen, toggleAboutMe] = useState(false);
    const [isProjectsOpen, toggleProjects] = useState(false);
    const [isContactOpen, toggleContact] = useState(false);
    const [isLoveOpen, toggleLove] = useState(false);

    const MainFolderComponent = ({ zIndex }) => {
        return (
            <MainFolder zIndex={zIndex}>
                <MainFolderHeader>
                    Alin's Folder
                </MainFolderHeader>
                <MainFolderSubHeader>
                    3 items | 69k in disk
                </MainFolderSubHeader>
                <SmallDivider />
                <Content>
                    <ToolbarRight>
                        <StyledArrowUp />
                        <StyledArrowDown />
                    </ToolbarRight>
                    <ToolbarBottom>
                        <StyledArrowLeft />
                        <StyledArrowRight />
                    </ToolbarBottom>
                    <Folder onClick={() => {
                        handleZIndexes(2);
                        toggleProjects(true);
                    }}>
                        <Icon src="/images/projects-icon.png" />
                        <Title>
                            Projects
                        </Title>
                    </Folder>
                    <Folder onClick={() => {
                        handleZIndexes(1);
                        toggleAboutMe(true);
                    }}>
                        <Icon src="/images/experience-icon.png" />
                        <Title>
                            About me
                        </Title>
                    </Folder>
                    <Folder onClick={() => {
                        handleZIndexes(3);
                        toggleContact(true);
                    }}>
                        <Icon src="/images/contact-icon.png" />
                        <Title>
                            Contact
                        </Title>
                    </Folder>
                </Content>
            </MainFolder>
        );
    }

    const components = [{
        component: 'MainFolder'
    }, {
        component: 'AboutMeWindow',
        props: {
            close: () => {
                toggleAboutMe(false);
            }
        }
    }, {
        component: 'ProjectsWindow',
        props: {
            close: () => {
                toggleProjects(false);
            }
        }
    }, {
        component: 'ContactWindow',
        props: {
            close: () => {
                toggleContact(false);
            }
        }
    }, {
        component: 'LoveWindow',
        props: {
            close: () => {
                toggleLove(false);
            }
        }
    }];

    const [zIndexes, setZIndexes] = useState(Array.from({ length: components.length }, (v, i) => i + 1));
    const handleZIndexes = (index) => {
        setZIndexes((prevZIndexes) => {
            const maxZIndex = components.length;
            const clickedZIndex = prevZIndexes[index];
            const updatedZIndexes = prevZIndexes
              .map((zIndex, i) =>
                i === index ? maxZIndex : zIndex > clickedZIndex ? zIndex - 1 : zIndex
              );
      
            return updatedZIndexes;
        });
    };

    return (
        <StyledWrapper>
            <StyledContainer>
                <Header>
                    <LogoWrapper>
                        <AppleLogo src="/images/white-logo-apple.png" />
                    </LogoWrapper>
                    <MenuList>
                        <MenuItem>File</MenuItem>
                        <MenuItem>Edit</MenuItem>
                        <MenuItem>View</MenuItem>
                    </MenuList>
                </Header>
                <ContentWrapper>
                    <CheckerBackground />
                    <IconFolderAlin onClick={() => {
                        handleZIndexes(0);
                    }}>
                        <DesktopIcon src="/images/folder-icon.png" />
                        <StyledTextWrapper>
                            <span>Alin's<br />Folder</span>
                        </StyledTextWrapper>
                    </IconFolderAlin>
                    <LoveIconWrapper onClick={() => {
                        handleZIndexes(4);
                        toggleLove(true);
                    }}>
                        <DesktopIcon src="/images/love-icon.png" />
                        <StyledTextWrapper>
                            <span>Love Is<br /> Awesome</span>
                        </StyledTextWrapper>
                    </LoveIconWrapper>
                    {components.map(({ component, props }, index) => {
                        switch (component) {
                            case 'MainFolder':
                                return <MainFolderComponent key={index} zIndex={zIndexes[index]} />;
                            case 'AboutMeWindow':
                                if (!isAboutMeOpen) return null;
                                return <AboutMeWindow key={index} {...props} zIndex={zIndexes[index]} />;
                            case 'ProjectsWindow':
                                if (!isProjectsOpen) return null;
                                return <ProjectsWindow key={index} {...props} zIndex={zIndexes[index]} />;
                            case 'ContactWindow':
                                if (!isContactOpen) return null;
                                return <ContactWindow key={index} {...props} zIndex={zIndexes[index]} />;
                            case 'LoveWindow':
                                if (!isLoveOpen) return null;
                                return <LoveWindow key={index} {...props} zIndex={zIndexes[index]} />;
                            default:
                                return null;
                        }
                    })}
                </ContentWrapper>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default MacintoshOS;
