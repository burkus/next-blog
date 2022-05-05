import styled from 'styled-components';
const small = '768px';

export const PostWrapper = styled.div`
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.background};
    transition: all 300ms linear;
    width: 100%;
    padding-bottom: 100px;
    @media only screen and (max-width: ${small}) {
            margin-left: 10px;
    }

    h1,h2,h3,h4,h5,h6 {
        margin-left: 120px;
        margin: 10px;
    }

    p {
        margin-left: 120px;
        margin-right: 20%;
        padding: 5px;
        @media only screen and (max-width: ${small}) {
            margin-left: 12px;
            margin-right: 10px;
        }
    }

    li, ul {
        margin-left: 80px;
        @media only screen and (max-width: ${small}) {
            margin-left: 20px;
        }
    }

    div.remark-highlight {
        margin-left: 120px;
        margin-right: 20%;
        @media only screen and (max-width: ${small}) {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;

export const Title = styled.h1`
    color: ${props => props.theme.main};
    margin-left: 120px;
    margin-top: -60px;
    border-bottom: solid 2px ${props => props.theme.main};
    position: absolute;

    @media only screen and (max-width: ${small}) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const Root = styled.div`
    min-height: 100%;
    min-width: 100%;
`