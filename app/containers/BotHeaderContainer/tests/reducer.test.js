
import { fromJS } from 'immutable';
import botHeaderContainerReducer from '../reducer';

describe('botHeaderContainerReducer', () => {
  it('returns the initial state', () => {
    expect(botHeaderContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
