import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import { Line, ScrollableComponent, ThreeLinesWrapper } from './CommonComponents';

const StyledLove = styled.div`
    position: absolute;
    top: 170px;
    left: 30px;
    width: 280px;
    height: 120px;
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

const StyledLoveImg = styled.img`
    width: 50px;
`;

const LoveWindow = ({ close, zIndex }) => {
    return (
        <StyledLove zIndex={zIndex}>
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
                    Love
                </span>
                <ThreeLinesWrapper>
                    <Line />
                    <Line />
                    <Line />
                </ThreeLinesWrapper>
            </Header>
            <ScrollableComponent style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'left'
            }}>
                <StyledLoveImg src="/images/love-icon.png" />
                <span style={{
                    marginLeft: 10
                }}>
                    Love is the ability to go beyond local maximums and minimums.
                </span>
            </ScrollableComponent>
        </StyledLove>
    )
}

export default LoveWindow;
