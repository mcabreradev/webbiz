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
      isChecked: false
    };

    // binding
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log("Submited", this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  onToggle (e) {
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  }

  render() { 
    const { isChecked } = this.state;

    return ( 
      <Card>

        <h5>{ texts.signup.title }</h5>
    
        <StyledForm className="control">
          <Input name="firstname" type="text" placeholder="First Name" icon="fas fa-user-plus" onChange={this.onChange} />
          <Input name="lastname" type="email" placeholder="Last Name" icon="fas fa-user-plus" onChange={this.onChange} />
          <Input name="email" type="email" placeholder="Email" icon="far fa-envelope" onChange={this.onChange} />
          <Input name="password" type="password" placeholder="Password" icon="fas fa-lock" onChange={this.onChange} />
          
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
          <Link to="/" href="/">{ texts.login.text }</Link>
        </FooterLinks>

        <FooterLinks className="bottom-link-2nd">
          { texts.email.text }{' '}
          <Link to="/verify" href="/verify">{ texts.email.title }</Link>
        </FooterLinks>

      </Card>
     );
  }
}
 
export default Signup;