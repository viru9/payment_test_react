import React, {Component} from 'react';
import MainNav from './main_nav';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import Cards from 'react-credit-cards';

import { Field, reduxForm } from 'redux-form';
import {validate} from './form_validation';
import renderField from '../common/render_input';

class CardComponent extends Component {

  constructor(props) {
    super(props);
  }

  onCardAdd(val){
    console.log('onCardAdd::: ',val);
  }

  componentWillReceiveProps(next, prev){
    // console.log('next: ', next.card_component.form.cardForm.values);
    // console.log('prev: ', prev);
  }


  render() {
    const { handleSubmit, pristine, reset, submitting, card_component } = this.props;
    return (

      <div>
        <Cards
             number={card_component.form.cardForm && card_component.form.cardForm.values ? card_component.form.cardForm.values.card_number : ''}
             name={card_component.form.cardForm && card_component.form.cardForm.values ? card_component.form.cardForm.values.user_name : ''}
             expiry={card_component.form.cardForm && card_component.form.cardForm.values ? card_component.form.cardForm.values.expiry : ''}
             cvc={card_component.form.cardForm && card_component.form.cardForm.values ? card_component.form.cardForm.values.security_number : ''}
             focused={false}
           />

    <form onSubmit={handleSubmit(this.onCardAdd.bind(this))}>

           <Field name="card_number" type="text" component={renderField} label="Card number"/>
           <Field name="user_name" type="text" component={renderField} label="Username"/>
           <Field name="expiry" type="text" component={renderField} label="Expiry"/>
           <Field name="security_number" type="text" component={renderField} label="CVS"/>

     <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>

    </form>

      </div>

    );
  }
}

function mapStateToProps(state) {
  return {card_component: state};
}

// export default connect(mapStateToProps, {})(CardComponent);

let cardForm = reduxForm({validate, form: 'cardForm'})(CardComponent);
export default connect(mapStateToProps, {})(cardForm);
