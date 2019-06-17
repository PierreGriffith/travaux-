import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="columns is-mobile">
          <div className="column is-2"></div>
          <div className="column is-2">
              <h1 className="title">DEVIS</h1>
            <p>{this.props.name}</p>
            <p>{this.props.phoneNumber}</p>
          </div>
          <div className="column is-2"></div>
          <div className="column is-2"></div>
          <div className="column is-2"></div>
          <div className="column is-2"></div>
      </div>
    );
  }
}


Header.propTypes = {
    name: PropTypes.string,
    phoneNumber: PropTypes.string
};

export default Header;
