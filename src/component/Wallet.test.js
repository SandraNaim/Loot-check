import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const wallet = shallow(<Wallet/>)  

  it('render correctly', () => {
    expect(wallet).toMatchSnapshot();
  })

  it('displays the balance from props', () => {
      expect(wallet.find("[data-test='balance']").text()).toEqual('Wallet Balance: ');
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
  })
})
