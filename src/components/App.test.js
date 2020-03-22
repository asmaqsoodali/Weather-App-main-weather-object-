import React from 'react';
import {configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import{App} from './App';

configure({adapter: new Adapter()});


describe('<App />', () => {

    // it('renders the header', () => {
    //   const wrapper = shallow(<App/>);
    //   expect(wrapper.text()).to.contain('Weather data');
    // });

    it('simulates click events', () => {
        const onClick = sinon.setView();
        const wrapper = shallow(<App/>);
        wrapper.find('<li className="active" />').simulate('click');
        expect(onClick).to.have.property('main');
    });
  });

