import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../static/img/hw-logo.svg';
import { texts } from '../../config';

const Logo = (props) => {
    const { width, logo, title, style, noFooter } = props;

    return (
      <img style={style} src={logo} width={width} alt={title} aria-label={title} className={ noFooter ? "is-invisible" : null }/>
    );
};
  
Logo.propTypes = {
    label: PropTypes.string,
    width: PropTypes.number,
    style: PropTypes.object,
    logo: PropTypes.string,
};

Logo.defaultProps = {  
    width: 180,
    style: {
        display: "block",
        margin: "0 auto"
    },
    title: texts.title,
    logo
};

export default Logo;

