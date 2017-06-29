/*
 *
 * BotContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

const initialState = fromJS({
  botName: 'Alpha',
  active: true,
  expanded: false,
});

function botHeaderReducer(state = initialState, action) {
  switch (action.type) {
    case C.ACTIVATE_BOT:
      return state.set('active', true);
    case C.DEACTIVATE_BOT:
      return state.set('active', false);
    case C.TOGGLE_EXPANDED_BOT:
      return state.set('expanded', !state.get('expanded'));
    default:
      return state;
  }
}

export default botHeaderReducer;
