import React from 'react';
import styled from 'styled-components';

import { texts, colors } from '../../config';

const StyledFooter = styled.div`
    background: ${colors.white};
    width: 240px;
    margin: 0px auto;
    margin-top: 1rem!important;
    padding: 15px;
`;

const StyledParagraph = styled.p`
    font-size: 12px;
    line-height: 1;
    font-weight: 400;
    padding-top: 15px;
`;

const Footer = () => {
    return (
        <StyledFooter>
            { texts.notices.map( (notice, key) => {
                return (<StyledParagraph key={ key }>{ notice }</StyledParagraph>)
            }) }
        </StyledFooter>
    );
}
 
export default Footer;