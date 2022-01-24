import React from "react";
import { shallow } from "enzyme";
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  })

  it('contain a wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })

  it('contain a loot component', () => {
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  })
})