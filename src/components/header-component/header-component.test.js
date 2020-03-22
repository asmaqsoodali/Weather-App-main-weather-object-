import React from 'react';
import {configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import{HeaderComponent} from './header-component';

configure({adapter: new Adapter()});


describe('<App />', () => {

    it('renders the header', () => {
      const wrapper = shallow(<HeaderComponent/>);
      expect(wrapper.text()).to.contain('Weather data');
    });
});

