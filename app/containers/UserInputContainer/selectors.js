import { createSelector } from 'reselect';

/**
 * Direct selector to the userInputContainer state domain
 */
const selectUserInputContainerDomain = () => (state) => state.get('userInputContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserInputContainer
 */

const makeSelectUserInputContainer = () => createSelector(
  selectUserInputContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectUserInputContainer;
export {
  selectUserInputContainerDomain,
};
