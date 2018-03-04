import React from 'react';
import PropTypes from 'prop-types';



export default class GuestRespond extends React.Component{

  static propTypes = {
    name : PropTypes.string,
    isChecked: PropTypes.bool,
    onClick : PropTypes.func,
    onDelete : PropTypes.func,
    onEditName : PropTypes.func,
  };

  constructor(props){
    super(props)
    this.state = {
      isEdit: false,
    };
  }

  onIsEdit = () =>{
    this.state.isEdit = !this.state.isEdit ;
    this.setState(this.state);
  }




  render(){

    var classRespond = "";
    var a ;
    var saveOrEdit;
    if (this.props.isChecked){
      classRespond = "responded"
    }

    if (!this.state.isEdit){
      a = <span>{this.props.name}</span>
      saveOrEdit = "edit"
    }else{
      a = <input type="text"
      value={this.props.name}
      onChange={(e) =>this.props.onEditName(e.target.value)}/>
      saveOrEdit = "save"
    }

    return(
      <li className={classRespond}>

            {a}
            <label>
          {/*On click input : trigger untuk parent mengubah state*/}
              <input
              type="checkbox"
              checked={this.props.isChecked}
              onClick={this.props.onClick}
              /> Confirmed
            </label>
            <button
            onClick={this.onIsEdit}>{saveOrEdit}</button>
            <button
            onClick={this.props.onDelete}>remove</button>
      </li>
      );
  }
}

