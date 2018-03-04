import React from 'react';
import PropTypes from 'prop-types';



export default class HideBox extends React.Component{

  static PropTypes = {
    isChecked: PropTypes.bool,
    onChange : PropTypes.func
  };

  render(){
    return(
      <div>
        <h2>Invitees</h2>
        <label>
          <input type="checkbox" checked={this.props.isChecked} onClick={this.props.onChange}/> Hide those who haven't responded
        </label>
      </div>
      );
  }
}
