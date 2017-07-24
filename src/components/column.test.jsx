import React, { Component } from 'react';
import {Column} from './column';

import {mount, shallow, render} from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());
var expect = chai.expect;
test('My column test', () => {
  const wrapper = shallow(
    <Column title='Complete'/>
  );
  expect(wrapper.instance().props.title)
    .deep.equal('Complete');
});
