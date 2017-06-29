  import * as C from './constants';
  import * as StateFormatter from '../../BotMind/StateFormatter';


  export const activateBot = () => ({
    type: C.ACTIVATE_BOT,
  });

  export const toggleExpandedBot = () => ({
    type: C.TOGGLE_EXPANDED_BOT,
  });

  export const deactivateBot = () => ({
    type: C.DEACTIVATE_BOT,
  });

  export const addDialogueFromUser = (dialogue) => ({
    type: C.ADD_DIALOGUE_FROM_USER,
    dialogue,
  });

  export const addDialogueFromBot = (dialogue) => ({
    type: C.ADD_DIALOGUE_FROM_BOT,
    dialogue,
  });

  export const setCurrentInput = (currentInput) => ({
    type: C.SET_CURRENT_INPUT,
    currentInput,
  });

  export const resetCurrentInput = () => ({
    type: C.RESET_CURRENT_INPUT,
    defaultInput: StateFormatter.defaultUserInput(),
  });

  export const enableSubmit = () => ({
    type: C.ENABLE_SUBMIT,
  });

  export const disableSubmit = () => ({
    type: C.DISABLE_SUBMIT,
  });

  export const addAnswer = (answer) => ({
    type: C.ADD_ANSWER,
    answer,
  });

  export const turnOnBotThinking = () => ({
    type: C.TURN_ON_BOT_THINKING,
  });

  export const turnOffBotThinking = () => ({
    type: C.TURN_OFF_BOT_THINKING,
  });

  export const setCurrentBotBubble = (currentBotBubble) => ({
    type: C.SET_CURRENT_BOT_BUBBLE,
    currentBotBubble,
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

  export const sumToBags = (sumToBagsValues) => ({
    type: C.ADD_POINTS_TO_BAGS,
    sumToBags: sumToBagsValues,
  });

  export const saveUserEmail = (userEmail) => ({
    type: C.SAVE_USER_EMAIL,
    userEmail,
  });

  export const saveUserName = (userName) => ({
    type: C.SAVE_USER_NAME,
    userName,
  });

  export const saveCompanyName = (companyName) => ({
    type: C.SAVE_COMPANY_NAME,
    companyName,
  });

  export const saveUserPhone = (userPhone) => ({
    type: C.SAVE_USER_PHONE,
    userPhone,
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
    type: C.INIT_CONVERSATION,
  });

  export const sendMessageFromUser = (userMessage, toBotBubbleId) => ({
    type: C.SEND_MESSAGE,
    payload: {
      userMessage,
      toBotBubbleId,
    },
  });

  export const estimateRecommendation = (bags) => ({
    type: C.ESTIMATE_RECOMMENDATION_NOW,
    payload: bags,
  });

