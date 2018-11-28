import {FETCH_HOME_VALUES} from './../../actions/home';

export default function(state = {}, action) {

  switch (action.type) {

    case FETCH_HOME_VALUES:
      return action.payload;

    default:
      return state;
  }

}
