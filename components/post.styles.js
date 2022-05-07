import styled from 'styled-components';
const small = '768px';

export const PostWrapper = styled.div`
    margin-left: 120px;
    padding-bottom: 50px;
    @media only screen and (max-width: ${small}) {
       margin-left: 0;
    }

    h1,h2,h3,h4,h5,h6 {
        
    }

    p {

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
        margin-right: 20%;
        @media only screen and (max-width: ${small}) {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;

export const Title = styled.h1`
    color: ${props => props.theme.main};
    margin-left: 3em;
    margin-bottom: 1em;
    border-bottom: solid 2px ${props => props.theme.main};
    max-width: fit-content;

    @media only screen and (max-width: ${small}) {
        font-size: 28px;
        margin-left: 0.2em;
        margin-bottom: 0.2em;
    }
`;

export const Root = styled.div`
   
`