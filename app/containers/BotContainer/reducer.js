/*
 *
 * BotContainer reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';
import recommendationBags from '../../BotMind/recommendationBags';

const defaultBags = {};
recommendationBags.forEach((recommendation) => {
  defaultBags[recommendation.name] = recommendation.defaultValue;
});

const initialState = fromJS({
  active: true,
  expanded: false,
  conversation: [],
  botThinking: false,
  bags: defaultBags,
  displayRecommendation: false,
  mailRecommendation: false,
  userEmail: '',
  companyName: '',
  userName: '',
  userPhone: '',
  sendMailToOwnerWithSummary: true,
});

function botContainerReducer(state = initialState, action) {
  switch (action.type) {

    case C.ACTIVATE_BOT:
      {
       // ga("send", "event", "botActions", "Activated Bot");
        return state.set('active', true);
      }

    case C.DEACTIVATE_BOT:
     // ga("send", "event", "botActions", "Deactivated Bot");
      return state.set('active', false);

    case C.TOGGLE_EXPANDED_BOT:
      return state.set('expanded', true);

    case C.ADD_DIALOGUE_FROM_USER:
      {
        const theConversation = state.get('conversation');
        if (theConversation.length > 0 && theConversation[theConversation.length - 1].from === 'user') {
          const userDialogue = theConversation[theConversation.length - 1];
          userDialogue.bubbles = [...userDialogue.bubbles, ...action.dialogue.bubbles];
          return state.set('conversation', [...theConversation.slice(0, theConversation.length - 1), userDialogue]);
        }
        return state.set('conversation', [...theConversation, { id: theConversation.length + 1, ...action.dialogue }]);
      }

    case C.ADD_DIALOGUE_FROM_BOT:
      {
        const theConversation = state.get('conversation');
        if (theConversation.length > 0 && theConversation[theConversation.length - 1].from === 'bot') {
          const botDialogue = theConversation[theConversation.length - 1];
          botDialogue.bubbles = [...botDialogue.bubbles, ...action.dialogue.bubbles];
          return state.set('conversation', [...theConversation.slice(0, theConversation.length - 1), botDialogue]);
        }

        return state.set('conversation', [...theConversation, { id: theConversation.length + 1, ...action.dialogue }]);
      }

    case C.RESET_CONVERSATION:
      {
     // ga("send", "event", "botActions", "Conversation Reset");
        return state.set('conversation', []);
      }

    case C.TURN_OFF_BOT_THINKING:
      return state.set('botThinking', false);

    case C.TURN_ON_BOT_THINKING:
      return state.set('botThinking', true);

    case C.ADD_POINTS_TO_BAGS:
      {
        const sumToBags = action.sumToBags;
        const currentBags = state.get('bags').toJS();
        if (Array.isArray(sumToBags)) {
          sumToBags.forEach((bag) => {
            currentBags[bag.name] += bag.points;
          });
        } else {
          Object.keys(sumToBags).forEach((bagKey) => {
            currentBags[bagKey] += sumToBags[bagKey];
          });
        }
        return state.set('bags', fromJS(currentBags));
      }

    case C.RESET_BAGS:
      return state.set('bags', defaultBags);

    case C.ESTIMATE_RECOMMENDATION:
     // ga("send", "event", "botActions", "Gave Recommendation");
      return state.set('displayRecommendation', true);

    case C.DONT_ESTIMATE_RECOMMENDATION:
      return state.set('displayRecommendation', false);

    case C.TURN_ON_MAIL_RECOMMENDATION:
     // ga("send", "event", "botActions", "Sent recommendation via Email");
      return state.set('mailRecommendation', true);

    case C.TURN_OFF_MAIL_RECOMMENDATION:
      return state.set('mailRecommendation', false);

    case C.SAVE_USER_EMAIL:
     // ga("send", "event", "capturedEmails", action.userEmail);
      return state.set('userEmail', action.userEmail);

    case C.SAVE_COMPANY_NAME:
     // ga("send", "event", "botInputs", "Caught Company Name");
      return state.set('companyName', action.companyName);

    case C.SAVE_USER_NAME:
     // ga("send", "event", "botInputs", "Caught Username");
      return state.set('userName', action.userName);

    case C.SAVE_USER_PHONE:
     // ga("send", "event", "botInputs", "Caught Phone");
      return state.set('userPhone', action.userPhone);

    case C.SEND_MAIL_TO_OWNER_WITH_SUMMARY:
      return state.set('sendMailToOwnerWithSummary', true);

    case C.DONT_SEND_MAIL_TO_OWNER_WITH_SUMMARY:
      return state.set('sendMailToOwnerWithSummary', false);

    default:
      return state;
  }
}

export default botContainerReducer;
