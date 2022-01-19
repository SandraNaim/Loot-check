import * as constants from '../actions/constants';
import balanceReducer from './balance';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        const action = { type: constants.SET_BALANCE, balance }
        expect(balanceReducer(undefined, action)).toEqual(balance)
    })
})