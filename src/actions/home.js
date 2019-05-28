import axios from 'axios';
import {ROOT_BASE_URL} from './../common/common';
import { Field, reduxForm, reset } from 'redux-form';

export const ADD_PAYMENT = 'add_payment';
const ADD_PAYEMENT_API = 'api/add_payment';


export function addPayment(val){
  // const request = axios.post(`${ROOT_BASE_URL}${ADD_PAYEMENT_API}`);//consider api call success!
  const request = {status: true};
      return (dispatch) => {
        let data = true;//consider api call success!
          if (data) {
            setTimeout( () => {
            dispatch({type: ADD_PAYMENT, payload: request});
            dispatch(reset('cardForm'));
          }, 2000);//api response delay time
          }
      };
}
