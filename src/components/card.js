import React, {Component} from 'react';
import MainNav from './main_nav';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import Cards from 'react-credit-cards';

import { Field, reduxForm } from 'redux-form';
import {validate} from './form_validation';
import renderField from '../common/render_input';
import { Container, Row, Col } from 'reactstrap';

class CardComponent extends Component {

  constructor(props) {
    super(props);
  }

  onCardAdd(val){
    console.log('onCardAdd::: ',val);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, card_component } = this.props;

if(card_component.form.cardForm){
console.log('card_component.form.cardForm: ',card_component.form.cardForm);
}


    return (
      <Container>
      <Row>
      <Col xs="6" sm="6">
      <form onSubmit={handleSubmit(this.onCardAdd.bind(this))}>
            <Row>
               <Col xs="10" sm="10">
                <Field name="card_number" type="text" component={renderField} label="Card number"/>
               </Col>
             </Row>
             <Row>
             <Col xs="10" sm="10">
              <Field name="user_name" type="text" component={renderField} label="Username"/>
             </Col>
             </Row>
             <Row>
             <Col xs="10" sm="10">
              <Field name="expiry" type="text" component={renderField} label="Expiry"/>
             </Col>
             </Row>
             <Row>
             <Col xs="10" sm="10">
             <Field name="security_number" type="text" component={renderField} label="CVS"/>
             </Col>
             </Row>
       <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
      </Col>
        <Col xs="6" sm="6">
        <Cards
             number={card_component.form.cardForm
               && card_component.form.cardForm.values
               && card_component.form.cardForm.values.card_number ? card_component.form.cardForm.values.card_number : ''}
             name={card_component.form.cardForm
               && card_component.form.cardForm.values
               && card_component.form.cardForm.values.user_name ? card_component.form.cardForm.values.user_name : ''}
             expiry={card_component.form.cardForm
               && card_component.form.cardForm.values
               && card_component.form.cardForm.values.expiry ? card_component.form.cardForm.values.expiry : ''}
             cvc={card_component.form.cardForm
               && card_component.form.cardForm.values
               && card_component.form.cardForm.values.security_number ? card_component.form.cardForm.values.security_number : ''}
             focused={card_component.form.cardForm
               && card_component.form.cardForm.fields
               && card_component.form.cardForm.fields.security_number
               && card_component.form.cardForm.fields.security_number.active  ? 'cvc' : 'card_number'}
           />
        </Col>
      </Row>
</Container>
    );
  }
}

function mapStateToProps(state) {
  return {card_component: state};
}

let cardForm = reduxForm({validate, form: 'cardForm'})(CardComponent);
export default connect(mapStateToProps, {})(cardForm);
