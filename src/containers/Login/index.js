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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
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

        <h5>{ texts.login.title }</h5>
    
        <StyledForm className="control">
          <Input name="email" type="email" placeholder="Email" icon="far fa-envelope" onChange={this.onChange} />
          <Input name="password" type="password" placeholder="Password" icon="fas fa-lock" onChange={this.onChange} />
          <Button onClick={this.onSubmit}>{ texts.login.btn }</Button>
        </StyledForm>

        <hr/>

        <FooterLinks className="bottom-link-1st">
          { texts.signup.complementary }{' '} 
          <Link to={`${process.env.PUBLIC_URL}/signup`} href={`${process.env.PUBLIC_URL}/signup`}>{ texts.signup.text }</Link>
        </FooterLinks>

        <FooterLinks className="bottom-link-2nd">
          { texts.password.text }{' '}
          <Link to={`${process.env.PUBLIC_URL}/forgot`} href={`${process.env.PUBLIC_URL}/forgot`}>{ texts.password.title }</Link>
        </FooterLinks>

        <FooterLinks className="bottom-link-2nd">
          { texts.email.text }{' '}
          <Link to={`${process.env.PUBLIC_URL}/verify`} href={`${process.env.PUBLIC_URL}/verify`}>{ texts.email.title }</Link>
        </FooterLinks>

      </Card>
     );
  }
}
 
export default Login;