import { createSelector } from 'reselect';

/**
 * Direct selector to the botContainer state domain
 */
const selectBotContainerDomain = () => (state) => state.get('botContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BotContainer
 */

const makeSelectBotContainer = (state) => createSelector(
  selectBotContainerDomain(state),
  (substate) => substate.toJS()
);

export default makeSelectBotContainer;
export {
  selectBotContainerDomain,
};
