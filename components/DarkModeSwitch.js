import React from 'react';
import { BsSunFill } from 'react-icons/bs';
import styled from 'styled-components';

const Button = styled.button`
    color: ${props => props.theme.main};
    background: none;
    width: 32px;
    height: 32px;
    margin: 10px;
    margin-left: 80px;
    border: none;
    @media only screen and (max-width: 768px){
        margin-left: 10px;
    }
`;

const DarkModeSwitch = ({ handler }) => {
    return (
        <Button onClick={handler}>
            <BsSunFill size={'100%'}/>
        </Button>
    );
}

export default DarkModeSwitch;