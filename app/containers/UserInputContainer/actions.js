  import * as C from './constants';
  import * as StateFormatter from '../../BotMind/StateFormatter';

  export const enableSubmit = () => ({
    type: C.ENABLE_SUBMIT,
  });

  export const disableSubmit = () => ({
    type: C.DISABLE_SUBMIT,
  });

  export const restartConversation = () => ({
    type: C.RESTART_CONVERSATION,
  });

  export const sendMessageFromUser = (userMessage, toBotBubbleId) => ({
    type: C.SEND_MESSAGE,
    payload: { userMessage, toBotBubbleId },
  });

  export const resetCurrentInput = () => ({
    type: C.RESET_CURRENT_INPUT,
    defaultInput: StateFormatter.defaultUserInput(),
  });
