import React from 'react';
import { shallow } from 'enzyme';
import {Wallet} from './Wallet.js';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }
  const wallet = shallow(<Wallet {...props}/>) 

  it('render correctly', () => {
    expect(wallet).toMatchSnapshot();
  })

  it('displays the balance from props', () => {
      expect(wallet.find("[data-test='balance']").text()).toEqual('Wallet Balance: 20');
  })

  it('create an input to withraw or deposit the wallet', () => {
    expect(wallet.find("[data-test='input-wallet']").exists()).toBe(true);
  })

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet.find("[data-test='input-wallet']")
        .simulate('change', { target: { value: userBalance } })
    })

    it('update the local wallet balence in `state` and covert it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
    })

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find("[data-test='btn-deposit']").simulate('click');
      })

      it('dispatches the deposit() it recieves from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
      })
    })

    describe('and the user wants to make a withdraw', () => {
      beforeEach(() => {
        wallet.find("[data-test='btn-withdraw']").simulate('click');
      })

      it('dispatches the withdraw() it recieves from props with local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10))
      })
    })
  })

})
