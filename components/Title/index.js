import React from "react";
import styled from 'styled-components';

const TitleEle = styled.h1`
padding: 0px 10px;
font-size: 1.3rem;
color:#fff;
mix-blend-mode:unset !important;
`;

export default function Title(props){
    return <TitleEle>{props.text}</TitleEle>
}