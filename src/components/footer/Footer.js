import React from 'react';
import PropTypes from 'prop-types';


class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="columns is-mobile">
          <div className="column">
                <p className="title"> TOTAL </p>
          </div>

          <div className="column">
              <p>  TOTAL HT </p>
              <p> {this.props.ht}</p>
          </div>

          <div className="column">
              <p>  TOTAL TTC </p>
              <p> {this.props.ttc}</p>
          </div>
      </div>
    );
  }
}


Footer.propTypes = {
    ht: PropTypes.number,
    ttc: PropTypes.number
};

export default Footer;
