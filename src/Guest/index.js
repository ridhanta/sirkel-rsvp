import React from 'react';
import PropTypes from 'prop-types';

//Component
import GuestRespond from './GuestRespond';
import GuestPending from './GuestPending';

export default class Guest extends React.Component{

  static PropTypes = {
    pendingName: PropTypes.string,
    listOfGuest: PropTypes.array,
    onClick : PropTypes.func,
    onDelete : PropTypes.func,
    onEditName : PropTypes.func,
  };

  render(){

    //sama dengan guestpending
    var guestPending = <GuestPending name={this.props.pendingName}/>

    if (this.props.pendingName === ""){
      guestPending = ""
    }

      return(
      <ul>

        {guestPending}

        {
          // masing - masing elemen dipecah per-guest
          this.props.listOfGuest.map(
            (guest,index) => {
              return(
                <GuestRespond
                name = {guest.name}
                isChecked={guest.isConfirm}
                // onClick : onClick guestRespond props
                //this.props.onClick : di dalam index
                // Untuk setiap guestRespond yang di render memiliki fungsi onClick dengan index sesuai item nya
                onClick={() => {this.props.onClick(index)}}
                onDelete={() => {this.props.onDelete(index)}}
                onEditName={(name) => this.props.onEditName(name,index)}
                />
                )
            })
        }

        </ul>
      );
  }
}
