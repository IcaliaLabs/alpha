  import * as C from './constants';
  import * as StateFormatter from '../../utils/BotMind/StateFormatter';
  import * as RTypes from '../../utils/BotMind/responseTypes';
  import * as BotMind from '../../utils/BotMind/BotMind';
  import * as BotMailer from '../../utils/BotMind/BotMailer';
  import Finder from '../../utils/BotMind/Interpreter';



  export const enableSubmit = () => ({
    type: C.ENABLE_SUBMIT
  })

  export const disableSubmit = () => ({
    type: C.DISABLE_SUBMIT
  })

  export const restartConversation = () => ({
    type: C.RESTART_CONVERSATION
  })

  export const sendMessageFromUser = (userMessage, toBotBubbleId) => ({
    type: C.SEND_MESSAGE,
    payload: {
      userMessage: userMessage,
      toBotBubbleId: toBotBubbleId
    }
  });

  export const resetCurrentInput = () => ({
    type: C.RESET_CURRENT_INPUT,
    defaultInput: StateFormatter.defaultUserInput()
  });