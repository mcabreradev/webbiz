import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

// components
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import FooterLink from '../../components/Footer/Link';
import Wrapper from '../../components/Wrapper';

// configuration
import { texts } from '../../config';

const StyledForm = styled.div`
  margin-top: 1.5rem;
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
      <Wrapper>
        <Card>
          <h5>{ texts.login.title }</h5>
          <StyledForm className="control">
            <Input name="email" type="email" placeholder="Email" icon="far fa-envelope" onChange={this.onChange} />
            <Input name="password" type="password" placeholder="Password" icon="fas fa-lock" onChange={this.onChange} />
            <Button onClick={this.onSubmit}>{ texts.login.btn }</Button>
          </StyledForm>

          <hr/>

          <FooterLink className="bottom-link-1st">
            { texts.signup.complementary }{' '} 
            <Link to={`${process.env.PUBLIC_URL}/signup`} href={`${process.env.PUBLIC_URL}/signup`}>{ texts.signup.text }</Link>
          </FooterLink>

          <FooterLink className="bottom-link-2nd">
            { texts.forgot.text }{' '}
            <Link to={`${process.env.PUBLIC_URL}/forgot`} href={`${process.env.PUBLIC_URL}/forgot`}>{ texts.forgot.title }</Link>
          </FooterLink>
          
          <FooterLink className="bottom-link-2nd">
            { texts.verify.text }{' '}
            <Link to={`${process.env.PUBLIC_URL}/verify`} href={`${process.env.PUBLIC_URL}/verify`}>{ texts.verify.title }</Link>
          </FooterLink>
        </Card>
      </Wrapper>
     );
  }
}
 
export default Login;