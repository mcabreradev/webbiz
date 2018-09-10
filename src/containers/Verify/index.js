import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { texts, colors } from '../../config';

const StyledForm = styled.div`
  margin-top: 1.5rem;
`;

const FooterLinks = styled.p`
  font-weight: 500;
  margin-bottom: .25rem;
  a { 
    font-weight: 500;
    color: ${colors.black} !important;
    &:hover {
      color: ${colors.orange} !important;
      text-decoration: none; 
    } 
  }
`;

class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    // binding
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("Submited", this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() { 

    return ( 
      <Card>

        <h5>{ texts.forgot.title }</h5>

        <FooterLinks className="bottom-link-1st">
          { texts.verify.complementary }{' '} 
        </FooterLinks>
    
        <StyledForm className="control">
          <Input name="email" type="email" placeholder="Email" icon="far fa-envelope" onChange={this.onChange} />
          <Button onClick={this.onSubmit}>{ texts.verify.btn }</Button>
        </StyledForm>

        <hr/>

        <FooterLinks className="bottom-link-1st">
          { texts.forgot.complementary }{' '} 
          <Link to={`${process.env.PUBLIC_URL}/login`} href={`${process.env.PUBLIC_URL}/login`}>{ texts.login.text }</Link>
        </FooterLinks>

      </Card>
     );
  }
}
 
export default Verify;