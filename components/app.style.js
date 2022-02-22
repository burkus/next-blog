import styled from "styled-components";
const small = "768px";

export const Canvas = styled.canvas`
    position: absolute;
    z-index: -1;
    background-color: ${props => props.theme.background};
`;

export const Root = styled.div`
    transition: all 300ms linear;
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.background};
`;

export const HomeLink = styled.h1`
    color: ${props => props.theme.main};
    margin-left: 80px;
    transition: all 300ms linear;
    transform-origin: left;
    max-width: 100px;
    overflow: hidden;
    cursor: pointer;
    @media only screen and (max-width: ${small}) {
        margin-left: 10px;
    }
    &:hover {
        transform: scale(1.2);
        border-radius: 3px 1px 0 0;
    }
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: ${props => props.theme.main};
        transition: opacity 300ms, transform 300ms;
        opacity: 1;
        transform: translate3d(-100%, 0, 0);
    }
    &:focus:after {
        transform: translate3d(0, 0, 0);
    }
    &:hover:after {
        transform: translate3d(0, 0, 0);
    }
`;