import React from 'react';
import styled from 'styled-components';

const Line1 = styled.div`
    width: 100%;
    height: 1px;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
`;

const Line2 = styled.div`
    width: 100%;
    height: 1px;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
`;

const StyledCloSeButtonWrapper = styled.div`
    width: 15px;
    height: 15px;
    border: 1px solid white;
    position: relative;

    &:hover {
        cursor: pointer;
        background: white;
        ${Line1} {
            background-color: black;
        }

        ${Line2} {
            background-color: black;
        }
    }
`;

const CloseButton = ({ close }) => {
    return (
        <StyledCloSeButtonWrapper onClick={() => close()}>
            <Line1 />
            <Line2 />
        </StyledCloSeButtonWrapper>
    )
};

export default CloseButton;
