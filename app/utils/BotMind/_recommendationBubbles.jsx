import questions from './BotMindFlows/';
import recommendationBags from './recommendationBags';

const recommendationBubbleIds = {}
recommendationBags.forEach((recommendation) => {
  recommendationBubbleIds[recommendation.name] = recommendation.goToBubbleId
})

export const getRecommendationBubble = (bags) => {
  let biggerPoints = 0;
  let recommendation;
  Object.keys(bags).forEach (bagKey => {
    if (bags[bagKey] >= biggerPoints) {
      biggerPoints = bags[bagKey];
      recommendation = bagKey;
    }
  });

  return {
    hash: questions[recommendationBubbleIds[recommendation]],
    key: recommendationBubbleIds[recommendation]
  };
};