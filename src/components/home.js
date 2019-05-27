import React, {Component} from 'react';
import MainNav from './main_nav';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import CardComponent from './card';

class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <MainNav/>
        <CardComponent/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {})(Home);
