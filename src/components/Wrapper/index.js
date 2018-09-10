import React from 'react';
import styled from 'styled-components';

// Components
import Logo from '../Logo';
import Footer from '../Footer';

const WrapperStyled = styled.div`
 
`;

const Wrapper = props => {

    return ( 
        <WrapperStyled> 

            <Logo { ...props } />
            
            { props.children } 

            <Footer  { ...props } />

        </WrapperStyled>
      );
} 
 
export default Wrapper;