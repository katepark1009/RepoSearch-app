import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';


const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: black;
    color: white;
    margin: 0 10px;
    text-align: center;
    &:active, &:hover {
      color: pink;
    }
    font-size: 1rem;
    &:focus, &:visited, &:link {
      text-decoration: none;
    }
`;

export default (props) => <StyledLink {...props} />;