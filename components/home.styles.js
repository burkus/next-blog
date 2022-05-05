import styled from "styled-components";
const small = '768px';

export const Title = styled.h1`
    background: none;
    color: ${props => props.theme.main};
    margin-left: 80px;
    @media only screen and (max-width: ${small}) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const Subtitle = styled.h2`
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.background};
    margin-left: 85px !important;
    @media only screen and (max-width: ${small}) {
        margin-left: 11px;
        margin-right: 11px;
    }
`;

export const PostsWrapper = styled.div`
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.background};
    h1,h2,h3,h4,h5,h6 {
        margin: 10px;
        margin-left: 120px;
        @media only screen and (max-width: ${small}) {
            margin-left: 10px;
        }
    }

    li, ul {     
        margin-left: 100px;
        @media only screen and (max-width: ${small}) {
            margin-left: 20px;
        }
    }
`;

export const PostLink = styled.h2`
    transition: all 300ms linear;
    cursor: pointer;
    transform-origin: left;
    &:hover {
        transform: scale(1.2);
    }
`;
