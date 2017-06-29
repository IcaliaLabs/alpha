import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as C from './constants';
import * as StateFormatter from '../../BotMind/StateFormatter';
import * as RTypes from '../../BotMind/responseTypes';
import * as BotMind from '../../BotMind/BotMind';
import Finder from '../../BotMind/Interpreter';
import {
  turnOnBotThinking,
  activateBot,
  turnOffBotThinking,
  addDialogueFromBot,
  setCurrentBotBubble,
  sendMessageFromUser,
  setCurrentInput,
  displayRecommendation,
  saveUserEmail,
  saveUserName,
  saveCompanyName,
  saveUserPhone,
  turnOnMailRecommendation,
  deactivateBot,
  dontEstimateRecommendation,
  addDialogueFromUser,
  sumToBags,
  resetConversation,
  resetCurrentInput,
  resetBags,
} from './actions';
// Individual exports for testing
export function* conversationStarter(initialBubble) {
  yield call(delay, 200);
  yield put(turnOffBotThinking());
  yield put(addDialogueFromBot(StateFormatter.botMessage(initialBubble.hash.botPrompt, initialBubble.hash.type, initialBubble.hash.varName)));
  yield put(setCurrentBotBubble(initialBubble.key));
  if (!initialBubble.hash.input || (initialBubble.hash.input.type === 'disabledFieldText')) {
    yield put(sendMessageFromUser('', initialBubble.key));
  }
}

export function* initConversationNow() {
  yield put(turnOnBotThinking());
  yield put(activateBot());
  const initialBubble = BotMind.getInitialBubble();
  yield call(conversationStarter, initialBubble);
}

export function* restartConversationNow() {
  yield put(activateBot());
  yield put(resetConversation());
  yield put(resetCurrentInput());
  yield put(turnOnBotThinking());
  yield put(resetBags());
  const initialBubble = BotMind.getRestartBubble();
  yield call(conversationStarter, initialBubble);
}

export function* sendMessageFromUserNow(action) {
  const userMessage = action.payload.userMessage;
  const toBotBubbleId = action.payload.toBotBubbleId;
  // Send array message
  if (Array.isArray(userMessage) && userMessage.length > 0) {
    yield put(addDialogueFromUser(StateFormatter.userMessage(userMessage, 'array')));
  } else if (userMessage !== '') {
    yield put(addDialogueFromUser(StateFormatter.userMessage(userMessage)));
  }
  const response = BotMind.getNextBubble(toBotBubbleId, userMessage);
  const nextBubble = response.nextBubble;
  yield put(turnOnBotThinking());

  if (response.sumToBags) {
    yield put(sumToBags(response.sumToBags));
  }

  if (nextBubble.key) {
    if (!nextBubble.hash.input) {
      nextBubble.hash.input = StateFormatter.disabledFieldText();
    }
    if (!nextBubble.hash.type) {
      nextBubble.hash.type = RTypes.TEXT;
    }
    yield call(delay, botThinkingTime(nextBubble.hash.botPrompt));
    yield put(turnOffBotThinking());


    if (response.catchMail) {
      let userEmail = userMessage.match(/^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi);

      if (userEmail) {
        userEmail = userEmail[0];
      } else {
        userEmail = userMessage;
      }

      yield put(saveUserEmail(userEmail));
    }

    if (response.catchName) {
      const foundNames = [];
      Finder.name(userMessage).forEach((finding) => {
        if (finding) {
          foundNames.push(finding);
        }
      });
      const theName = foundNames[0] || "Capt'n";
      const userName = theName.charAt(0).toUpperCase() + theName.substr(1).toLowerCase();
      yield put(saveUserName(userName));
    }

    if (response.catchCompanyName) {
      const foundNames = [];
      Finder.company(userMessage).forEach((finding) => {
        if (finding) {
          foundNames.push(finding);
        }
      });
      const companyName = foundNames[0] || 'Really';
      yield put(saveCompanyName(companyName));
    }

    if (response.catchPhone) {
      const userPhone = userMessage;
      yield put(saveUserPhone(userPhone));
    }

    if (response.shouldMailRecommendation) {
      yield put(turnOnMailRecommendation());
    }

    if (response.finishConversation) {
      yield put(deactivateBot());
    }
    if (!response.shouldEstimateRecommendation) {
      yield put(addDialogueFromBot(StateFormatter.botMessage(nextBubble.hash.botPrompt, nextBubble.hash.type, nextBubble.hash.varName)));
      yield put(setCurrentBotBubble(nextBubble.key));
      yield put(setCurrentInput(nextBubble.hash.input));
      if (nextBubble.hash.input.type === 'disabledFieldText') {
        yield put(sendMessageFromUser('', nextBubble.key));
      }
    } else {
      yield put(displayRecommendation());
    }
  } else if (response.shouldEstimateRecommendation) {
    yield put(displayRecommendation());
  }
}

export function* shouldEstimateRecommendationNow(action) {
  const bags = action.payload;
  yield put(dontEstimateRecommendation());
  const estimationBubble = BotMind.getRecommendationBubble(bags);
  yield put(turnOnBotThinking());
  yield call(delay, botThinkingTime(estimationBubble.hash.botPrompt));
  yield put(turnOffBotThinking());

  yield put(addDialogueFromBot(StateFormatter.botMessage(estimationBubble.hash.botPrompt, estimationBubble.hash.type, estimationBubble.hash.varName)));
  yield put(setCurrentBotBubble(estimationBubble.key));
  if (!estimationBubble.hash.input) {
    estimationBubble.hash.input = StateFormatter.disabledFieldText();
  }
  yield put(setCurrentInput(estimationBubble.hash.input));
  if (estimationBubble.hash.input.type === 'disabledFieldText') {
    yield put(sendMessageFromUser('', estimationBubble.key));
  }
}

export function* rootSaga() {
  yield takeLatest(C.INIT_CONVERSATION, initConversationNow);
  yield takeLatest(C.RESTART_CONVERSATION, restartConversationNow);
  yield takeLatest(C.SEND_MESSAGE, sendMessageFromUserNow);
  yield takeLatest(C.ESTIMATE_RECOMMENDATION_NOW, shouldEstimateRecommendationNow);
}

function botThinkingTime(message) {
  if (!message) {
    return 3000;
  }
  let time = 1000;
  if (window.location.href.indexOf('localhost') > -1) {
    time = 0;
  }
  const messageLength = message.length;
  if (messageLength < 100) {
    time *= 2;
  } else if (messageLength > 100 && messageLength < 200) {
    time *= 3;
  } else if (messageLength > 200 && messageLength < 300) {
    time *= 4;
  } else if (messageLength > 300) {
    time *= 5;
  }
  return time;
}


export default [
  rootSaga,
];
