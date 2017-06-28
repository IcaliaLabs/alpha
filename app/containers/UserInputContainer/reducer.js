/*
 *
 * BotContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';
import { combineReducers } from 'redux';
import * as StateFormatter from '../../utils/BotMind/StateFormatter';

const initialState = fromJS({
  currentInput: StateFormatter.defaultUserInput(),
  canSubmit: false,
  currentBotBubble: 0,
  userName: '',
});

function userInputReducer(state = initialState, action) {
  switch (action.type) {
    case C.SET_CURRENT_INPUT:
      return state.set('currentInput', action.currentInput);
    case C.RESET_CURRENT_INPUT:
      return state.set('currentInput', action.defaultInput);
    case C.ENABLE_SUBMIT:
      return state.set('canSubmit', true);
    case C.DISABLE_SUBMIT:
      return state.set('canSubmit', false);
    case C.SET_CURRENT_BOT_BUBBLE:
      return state.set('currentBotBubble', action.currentBotBubble);
    case C.SAVE_USER_NAME:
     //ga("send", "event", "botInputs", "Caught Username");
      return state.set('userName', action.userName);
    default:
      return state
  }
}

export default userInputReducer;
