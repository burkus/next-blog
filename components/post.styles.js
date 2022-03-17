import styled from 'styled-components';
const small = '768px';

export const PostWrapper = styled.div`
    min-height: 100vh;
    color: ${props => props.theme.main};
    background-color: ${props => props.theme.background};
    transition: all 300ms linear;
    width: 100%;

    h1,h2,h3,h4,h5,h6 {
        margin: 10px;
        margin-left: 120px;
        @media only screen and (max-width: ${small}) {
            margin-left: 10px;
        }
    }

    p {
        margin-left: 130px;
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
    margin-left: 80px;
    border-bottom: solid 2px ${props => props.theme.main};
    inline-size: max-content;
    overflow: hidden;
    @media only screen and (max-width: ${small}) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;