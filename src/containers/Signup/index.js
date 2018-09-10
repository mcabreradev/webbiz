import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import PasswordBar from '../../components/Input/Password';

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

const style2 = {
  position: "absolute",
  marginTop: ".3rem",
  marginLeft: "-1.25rem",
  paddingLeft: "1.25rem",
}

const style3 = {
  marginLeft: "30px",
}

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordType: 'password',
      isChecked: false,
    };

    // binding
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.viewPassword = this.viewPassword.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("Submited", this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onToggle (e) {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  }

  viewPassword (e) {
    e.preventDefault();
    this.setState({passwordType: this.state.passwordType === "text" ? "password" : "text"});
  }


  render() { 
    const { isChecked, password, passwordType } = this.state;

    return ( 
      <Card>

        <h5>{ texts.signup.title }</h5>
    
        <StyledForm className="control">
          <Input name="firstname" type="text" placeholder="First Name" icon="fas fa-user-plus" onChange={this.onChange} />
          <Input name="lastname" type="email" placeholder="Last Name" icon="fas fa-user-plus" onChange={this.onChange} />
          <Input name="email" type="email" placeholder="Email" icon="far fa-envelope" onChange={this.onChange} />
          
          <Input name="password" 
            type={passwordType} 
            placeholder="Password" 
            onChange={this.onChange} 
            onClick={this.viewPassword}
            onKeyPress={this.viewPassword}
            nonStatic
            icon={ passwordType === "password" ? password.length === 0 ? "fas fa-lock" : "far fa-eye" : "far fa-times-circle"}
          />

          { password.length > 0 && ( <PasswordBar password={ password } /> ) } 

          <div className="field" style={style3}>
            <label className="checkbox">
              <input name="isChecked" type="checkbox" style={style2} checked={ isChecked } onChange={this.onToggle} /> I agree to the terms and condtions*
            </label>
          </div>
          
          <Button className={ isChecked ? null : "disabled" } onClick={this.onSubmit}>{ texts.signup.btn }</Button>

        </StyledForm>

        <hr/>

        <FooterLinks className="bottom-link-1st">
          { texts.login.complementary }{' '} 
          <Link to={`${process.env.PUBLIC_URL}/`} href={`${process.env.PUBLIC_URL}/`}>{ texts.login.text }</Link>
        </FooterLinks>

        <FooterLinks className="bottom-link-2nd">
          { texts.email.text }{' '}
          <Link to={`${process.env.PUBLIC_URL}/verify`} href={`${process.env.PUBLIC_URL}/verify`}>{ texts.email.title }</Link>
        </FooterLinks>

      </Card>
     );
  }
}
 
export default Signup;