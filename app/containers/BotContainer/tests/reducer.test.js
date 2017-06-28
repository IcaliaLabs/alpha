
import { fromJS } from 'immutable';
import botContainerReducer from '../reducer';

describe('botContainerReducer', () => {
  it('returns the initial state', () => {
    expect(botContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
