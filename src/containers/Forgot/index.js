import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Input, Button,  FooterLink, Wrapper } from '../../components';
import { texts } from '../../config';
import styled from 'styled-components';

const StyledForm = styled.div`
  margin-top: 1.5rem;
`;

class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

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
          <h5>{ texts.forgot.title }</h5>

          <StyledForm className="control">
            <Input name="email" type="email" placeholder="Email" icon="far fa-envelope" onChange={this.onChange} />
            <Button onClick={this.onSubmit}>{ texts.forgot.btn }</Button>
          </StyledForm>

          <hr/>

          <FooterLink className="bottom-link-1st">
            { texts.forgot.complementary }{' '} 
            <Link to={`${process.env.PUBLIC_URL}/login`} href={`${process.env.PUBLIC_URL}/login`}>{ texts.login.text }</Link>
          </FooterLink>

        </Card>
      </Wrapper>
     );
  }
}
 
export default Forgot;