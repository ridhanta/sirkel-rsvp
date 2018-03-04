import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

export default class List extends Component{

  static propTypes = {
    arrayOfBuah:PropTypes.array,

  };


  render()
  {
    return(
      <ListGroup>
          {
            this.props.arrayOfBuah.map((buah, index) => {
                  return (
                    <ListGroupItem>{buah}</ListGroupItem>
                    );
                }
              )
          }
        </ListGroup>
        );
  }
}
