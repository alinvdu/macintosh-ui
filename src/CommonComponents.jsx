import styled from 'styled-components';

export const ScrollableComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 16px;
        height: 100%;
        background-color: black;
    }

    ::-webkit-scrollbar-track {
        background-color: black;
        border-left: 1px solid white;
    }

    ::-webkit-scrollbar-thumb {
        background-color: white;
    }

    ::-webkit-scrollbar-button:vertical:start:decrement {
        height: 20px;
        border-left: 1px solid white;
        background-image: url('/images/up-arrow.svg');
        background-repeat: no-repeat;
        background-position-y: center;
    }

    ::-webkit-scrollbar-button:vertical:end:increment {
        height: 20px;
        border-left: 1px solid white;
        background-image: url('/images/down-arrow.svg');
        background-repeat: no-repeat;
        background-position-y: center;
    }
`;

export const ThreeLinesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    flex: 1;
    height: 10px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: white;
`;
