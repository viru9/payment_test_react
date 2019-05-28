import {ADD_PAYMENT} from './../../actions/home';

export default function(state = {}, action) {

  switch (action.type) {

    case ADD_PAYMENT:
      return action.payload;

    default:
      return state;
  }

}
