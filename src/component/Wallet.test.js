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
})
