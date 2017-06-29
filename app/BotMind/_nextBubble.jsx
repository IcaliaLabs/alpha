import questions from './BotMindFlows/';

export const getNextBubble = (bubbleId, userAnswer = "") => {
  const jumpTo = questions[bubbleId].answers;
  let jumpToBubbleId;
  let sumToBags;
  if (jumpTo.length > 1) {
    if (Array.isArray(userAnswer)) {
      sumToBags = { designSprint: 0, simpleMvp: 0, notSoSimpleMvp: 0, superCustom: 0 };

      jumpTo.forEach(j => {
        if (userAnswer.includes(j.answer)) {
          j.sumToBags.forEach( bag => {
            sumToBags[bag.name] += bag.points
          });
        }
      });

      jumpToBubbleId = jumpTo[0];
    } else {
        jumpToBubbleId = jumpTo.find(j => {
          if (j.answer instanceof RegExp) {
            return userAnswer.match(j.answer)
          } else {
            return j.answer === userAnswer
          }
        });
      sumToBags = jumpToBubbleId.sumToBags
    }
  } else {
    jumpToBubbleId = jumpTo[0];
    sumToBags = jumpToBubbleId.sumToBags
  }

  const nextBubble = {
    hash: questions[jumpToBubbleId.nextId],
    key: jumpToBubbleId.nextId
  };
  const shouldEstimateRecommendation = jumpToBubbleId.shouldEstimateRecommendation;
  const shouldMailRecommendation = jumpToBubbleId.shouldMailRecommendation;
  const catchMail = jumpToBubbleId.catchMail;
  const catchName = jumpToBubbleId.catchName;
  const catchCompanyName = jumpToBubbleId.catchCompanyName;
  const catchPhone = jumpToBubbleId.catchPhone;
  const finishConversation = jumpToBubbleId.finishConversation;
  const sendAnalytics = jumpToBubbleId.sendAnalytics;

  return { nextBubble,
           sumToBags,
           shouldEstimateRecommendation,
           shouldMailRecommendation,
           catchMail,
           catchPhone,
           finishConversation,
           catchName,
           catchCompanyName,
           sendAnalytics 
         };
};