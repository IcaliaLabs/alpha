import questions from './BotMindFlows/';

export const getInitialBubble = () => {
  return {
    hash: questions["start"],
    key: "start"
  }
};


export const getRestartBubble = () => {
  return {
    hash: questions["start"],
    key: "start"
  };
};