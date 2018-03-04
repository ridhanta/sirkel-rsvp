import React, { Component } from 'react';
import * as firebase from 'firebase';

//Component
import Header from './Header';
import HideBox from './HideBox';
import Counter from './Counter';
import Guest from './Guest';

class App extends Component
{


  constructor(){
    super();

    this.state = {
      guestForm: "",

      isHideUnconfirmed:false,

      listOfGuest : [],

      title:"ridhan",

    };

    //initialize guest database reference
    this.guestRef = firebase.database().ref('Guests');

  }

  //Fungsi yang dipanggil setelah fungsi render selesai
  componentDidMount(){
    //update nilai listOfGuest sesuai firebase
    //Get guest database reference
    this.guestRef.on('value', (snapshot) => {
      if(snapshot.val()){
        this.setState({
        listOfGuest : snapshot.val(),
       })
      }else{
        this.setState({listOfGuest:[],})

        }

    })

  }

  onIsConfirmChange = (index) =>{
    this.state.listOfGuest[index].isConfirm = !this.state.listOfGuest[index].isConfirm ;
    this.guestRef.set(this.state.listOfGuest);
  }
  //Create delete onCange
  isDeleteGuest = (index) =>{
    this.state.listOfGuest.splice(index,1);
    this.guestRef.set(this.state.listOfGuest);
  }



  onChangeGuestForm = (value) => {
    this.setState({
      guestForm: value,
    });
  }

  onHideGuestForm = (value) => {
    this.setState({
      isHideUnconfirmed : !this.state.isHideUnconfirmed,
    });
  }

  //Edit name
  onEditName = (name,index) => {
    this.state.listOfGuest[index].name = name;
    this.guestRef.set(this.state.listOfGuest);
  }

  onAddGuest = (e) => {
    e.preventDefault();

    var newGuest = {
        name: this.state.guestForm,
        isConfirm: false,
      }
    this.state.listOfGuest.unshift(newGuest);
    this.state.guestForm = "";
    this.setState(this.state);
    this.guestRef.set(this.state.listOfGuest);
  }




  render()
  {
    var listOfGuest = ""
    if(this.state.isHideUnconfirmed){
      listOfGuest = this.state.listOfGuest.filter((guest,i) => {return !guest.isConfirm})
    } else{
      listOfGuest = this.state.listOfGuest
    }

    //state : guestform (berbagi sama guest), onChange untuk mengubahnya
    return (
    <div className="App">

    <Header
    value={this.state.guestForm}
    onChangeValue = {this.onChangeGuestForm}
    onSubmit = {this.onAddGuest}
      title = {this.state.title}/>

      <div className="main">

        <HideBox
        isChecked = {this.state.isHideUnconfirmed}
        onChange = {this.onHideGuestForm}/>

        <Counter
        attending = {this.state.listOfGuest.filter((guest,i) => {return guest.isConfirm}).length}
        unconfirmed = {this.state.listOfGuest.filter((guest,i) => {return !guest.isConfirm}).length}
        total = {this.state.listOfGuest.length}/>

        <Guest
        pendingName = {this.state.guestForm}
        listOfGuest={listOfGuest}
        onClick = {this.onIsConfirmChange}
        onDelete = {this.isDeleteGuest}
        onEditName = {this.onEditName}
        />
      </div>
    </div>

    );
  }
}

export default App;
