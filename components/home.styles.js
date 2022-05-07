import styled from "styled-components";
import tw from 'twin.macro'
const small = '768px';


export const Root = styled.div`
    margin: 0.75em 0;
`

export const Title = styled.h1(() => [
    `
    margin: inherit;
    margin-left: 1em;
    @media only screen and (max-width: ${small}) {
        
    }`,
    tw`text-2xl`
])

export const Subtitle = styled.h2(() => [
    `
    margin: inherit;
    margin-left: 2em;
    @media only screen and (max-width: ${small}) {
        
    }
`,
    tw`text-xl`
])

export const PostsWrapper = styled.div(() => [
    `
    margin: inherit;
    h1,h2,h3,h4,h5,h6 {
        margin-left: 3em;
        @media only screen and (max-width: ${small}) {
            margin-left: 10px;
        }
    }`,
    tw`text-xl flex flex-col gap-4`
])

export const PostLink = styled.h2`
    transition: all 300ms ease-in-out;
    cursor: pointer;
    transform-origin: left;
    border-bottom: 2px solid ${props => props.theme.main};
    padding: 0.25em;
    margin-right: 1em;
    max-width: fit-content;
    &:hover {
        transform: scale(1.2);
        border-bottom: 4px solid ${props => props.theme.main};
    }
`;
