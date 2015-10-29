import expect from 'expect';
import TabbedContent from '../src/sui-tabbed-content';
import React from 'react';
import {createComponent, shallowRender} from './utilities';

describe('sui-tabbed-content component test suite', function () {

  describe('loading', function() {
    it('all components are loaded properly', function () {
      expect(TabbedContent).toNotBe(undefined);
    });
  });

  describe('TabbedContent component', function() {
    let card;

    beforeEach(() => {
      card = shallowRender(TabbedContent, { landscapeLayout: false });
    });

    afterEach(() => {
      card = null;
    });

    it('renders correctly', function() {
      expect(card).toExist();
    });
  });
});
