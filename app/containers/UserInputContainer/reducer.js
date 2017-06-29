/*
 *
 * BotContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';
import * as StateFormatter from '../../BotMind/StateFormatter';

const initialState = fromJS({
  currentInput: StateFormatter.defaultUserInput(),
  canSubmit: false,
  currentBotBubble: '',
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
      return state.set('userName', action.userName);
    default:
      return state;
  }
}

export default userInputReducer;
