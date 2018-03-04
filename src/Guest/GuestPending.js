import React from 'react';
import PropTypes from 'prop-types';



export default class GuestPending extends React.Component{

  static PropTypes = {
    name: PropTypes.string,
  };

  render(){
    return(
      <li className="pending"><span>{this.props.name}</span></li>
      );
  }
}
