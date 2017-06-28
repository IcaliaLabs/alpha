  import * as C from './constants';
  import * as StateFormatter from '../../utils/BotMind/StateFormatter';
  import * as RTypes from '../../utils/BotMind/responseTypes';
  import * as BotMind from '../../utils/BotMind/BotMind';
  import * as BotMailer from '../../utils/BotMind/BotMailer';
  import Finder from '../../utils/BotMind/Interpreter';

  export const activateBot = () => ({
    type: C.ACTIVATE_BOT,
  });

  export const toggleExpandedBot = () => ({
    type: C.TOGGLE_EXPANDED_BOT
  })

  export const deactivateBot = () => ({
    type: C.DEACTIVATE_BOT,
  });

  export const addDialogueFromUser = dialogue => ({
    type: C.ADD_DIALOGUE_FROM_USER,
    dialogue,
  });

  export const addDialogueFromBot = dialogue => ({
    type: C.ADD_DIALOGUE_FROM_BOT,
    dialogue,
  });

  export const setCurrentInput = currentInput => ({
    type: C.SET_CURRENT_INPUT,
    currentInput,
  });

  export const resetCurrentInput = () => ({
    type: C.RESET_CURRENT_INPUT,
    defaultInput: StateFormatter.defaultUserInput()
  });

  export const enableSubmit = () => ({
    type: C.ENABLE_SUBMIT
  })

  export const disableSubmit = () => ({
    type: C.DISABLE_SUBMIT
  })

  export const addAnswer = answer => ({
    type: C.ADD_ANSWER,
    answer,
  });

  export const turnOnBotThinking = () => ({
    type: C.TURN_ON_BOT_THINKING,
  });

  export const turnOffBotThinking = () => ({
    type: C.TURN_OFF_BOT_THINKING,
  });

  export const setCurrentBotBubble = currentBotBubble => ({
    type: C.SET_CURRENT_BOT_BUBBLE,
    currentBotBubble
  });

  export const displayRecommendation = () => ({
    type: C.ESTIMATE_RECOMMENDATION,
  });

  export const dontEstimateRecommendation = () => ({
    type: C.DONT_ESTIMATE_RECOMMENDATION,
  });

  export const turnOnMailRecommendation = () => ({
    type: C.TURN_ON_MAIL_RECOMMENDATION,
  });

  export const turnOffMailRecommendation = () => ({
    type: C.TURN_OFF_MAIL_RECOMMENDATION,
  });

  export const sumToBags = sumToBagsValues => ({
    type: C.ADD_POINTS_TO_BAGS,
    sumToBags: sumToBagsValues,
  })

  export const saveUserEmail = userEmail => ({
    type: C.SAVE_USER_EMAIL,
    userEmail
  });

  export const saveUserName = userName => ({
    type: C.SAVE_USER_NAME,
    userName
  });

  export const saveCompanyName = companyName => ({
    type: C.SAVE_COMPANY_NAME,
    companyName
  });

  export const saveUserPhone = userPhone => ({
    type: C.SAVE_USER_PHONE,
    userPhone
  });

  export const sendMailToOwnerWithSummary = () => ({
    type: C.SEND_MAIL_TO_OWNER_WITH_SUMMARY,
  });

  export const dontSendMailToOwnerWithSummary = () => ({
    type: C.DONT_SEND_MAIL_TO_OWNER_WITH_SUMMARY,
  });

  export const resetConversation = () => ({
    type: C.RESET_CONVERSATION,
  });

  export const resetBags = () => ({
    type: C.RESET_BAGS,
  });

  export const initConversation = () => ({
    type: C.INIT_CONVERSATION
  })

  export const sendMessageFromUser = (userMessage, toBotBubbleId) => ({
    type: C.SEND_MESSAGE,
    payload: {
      userMessage: userMessage,
      toBotBubbleId: toBotBubbleId
    }
  });

  export const estimateRecommendation = (bags) => ({
    type: C.ESTIMATE_RECOMMENDATION_NOW,
    payload: bags
  })

  // export const sendMailRecommendation = (userName, bags, userEmail) => (dispatch) => {
  //   dispatch(turnOffMailRecommendation())

  //   let biggerPoints = 0;
  //   let recommendation;
  //   Object.keys(bags).forEach (bagKey => {
  //     if (bags[bagKey] >= biggerPoints) {
  //       biggerPoints = bags[bagKey];
  //       recommendation = bagKey;
  //     }
  //   });

  //   return BotMailer.mailRecommendation(userName, userEmail, recommendation)
  //   .then( response => {
  //   })
  //   .catch( error => {console.log(error)})
  // }

  // export const sendMailToOwner = (userName, userEmail, userPhone, conversation) => (dispatch) => {
  //   dispatch(dontSendMailToOwnerWithSummary())
  //   let digestedConversation = [];
  //   conversation.forEach( conv => {
  //     conv.bubbles.forEach( bubble => {
  //       let bub = {};
  //       bub[conv.from] = bubble.content
  //       digestedConversation.push(bub)
  //     });

  //   });

  //   return BotMailer.sendMailToOwner(userName, userEmail, userPhone, digestedConversation)
  //   .then( response => {
  //   })
  //   .catch( error => {console.log(error)})
  // }

function conversationStarter(initialBubble, dispatch) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch(turnOffBotThinking());
      dispatch(addDialogueFromBot(StateFormatter.botMessage(initialBubble.hash.botPrompt, initialBubble.hash.type, initialBubble.hash.varName)))
      dispatch(setCurrentBotBubble(initialBubble.key))
      if (!initialBubble.hash.input) {
        initialBubble.hash.input = StateFormatter.disabledFieldText();
      }
      if (initialBubble.hash.input.type === 'disabledFieldText') {
        dispatch(sendMessageFromUser('', initialBubble.key))
      }

    }, 100);

    resolve({});
  });
}

function botThinkingTime(message) {
  if (!message) {
    return 3000;
  }
  let time  = 1000
  if (window.location.href.indexOf("localhost") > -1) {
    time = 0
  }
  const messageLength = message.length
  if (messageLength < 100) {
    time = time*2
  } else if(messageLength > 100 && messageLength < 200) {
    time = time*3
  } else if(messageLength > 200 && messageLength < 300) {
    time = time*4
  } else if (messageLength > 300) {
    time = time*5
  }

  return time
}
