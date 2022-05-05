import styled from "styled-components";
const small = '768px';

export const Root = styled.div`
    margin: 0.75em 0;
`

export const Title = styled.h1`
    color: ${props => props.theme.main};
    margin: inherit;
    margin-left: 1em;
    @media only screen and (max-width: ${small}) {
        
    }
`;

export const Subtitle = styled.h2`
    color: ${props => props.theme.main};
    margin: inherit;
    margin-left: 2em;
    @media only screen and (max-width: ${small}) {
        
    }
`;

export const PostsWrapper = styled.div`
    margin: inherit;
    color: ${props => props.theme.main};
    h1,h2,h3,h4,h5,h6 {
        margin-left: 3em;
        @media only screen and (max-width: ${small}) {
            margin-left: 10px;
        }
    }
`;

export const PostLink = styled.h2`
    transition: all 300ms linear;
    cursor: pointer;
    transform-origin: left;
    border-bottom: 2px solid black;
    padding: 0.25em;
    margin-right: 1em;
    max-width: fit-content;
    &:hover {
        transform: scale(1.2);
    }
`;
