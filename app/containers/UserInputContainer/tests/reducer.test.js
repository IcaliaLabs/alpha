
import { fromJS } from 'immutable';
import userInputContainerReducer from '../reducer';

describe('userInputContainerReducer', () => {
  it('returns the initial state', () => {
    expect(userInputContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
