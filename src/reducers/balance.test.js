import * as constants from '../actions/constants';
import balanceReducer from './balance';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        const action = { type: constants.SET_BALANCE, balance }
        expect(balanceReducer(undefined, action)).toEqual(balance)
    })

    it('deposit into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        const action = { type: constants.DEPOSIT, deposit }
        expect(balanceReducer(initialState, action)).toEqual(initialState+deposit)
    })

    it('withdraw from the balance', () => {
        const withdrawal = 10;
        const initialState = 20;
        const action = { type: constants.WITHDRAW, withdrawal }
        expect(balanceReducer(initialState, action)).toEqual(initialState-withdrawal)
    })
})