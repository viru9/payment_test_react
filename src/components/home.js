import React, {Component} from 'react';
import MainNav from './main_nav';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import Cards from 'react-credit-cards';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number:'',
      name:'',
      expiry:'',
      cvc:'',
      focused:false
    }
  }


  render() {
    return (
      <div>
        <MainNav/>

        <Cards
             number={this.state.number}
             name={this.state.name}
             expiry={this.state.expiry}
             cvc={this.state.cvc}
             focused={this.state.focused}
           />


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {})(Home);
