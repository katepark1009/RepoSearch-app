import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: black;
    color: white;
    margin: 0 15px;
    text-align: center;
    &:active, &:hover {
      color: pink;
    }
    font-size: 1em;
    &:focus, &:visited, &:link {
      text-decoration: none;
    }
`;

export default (props) => <StyledLink {...props} />;