import { createSelector } from 'reselect';

/**
 * Direct selector to the botHeaderContainer state domain
 */
const selectBotHeaderContainerDomain = () => (state) => state.get('botHeaderContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BotHeaderContainer
 */

const makeSelectBotHeaderContainer = () => createSelector(
  selectBotHeaderContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectBotHeaderContainer;
export {
  selectBotHeaderContainerDomain,
};
