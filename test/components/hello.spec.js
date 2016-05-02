import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import Hello from '../../src/components/hello';


describe('Hello component', function() {

  it('should contain Tortillas', function() {
    let output = render(<Hello />);

    expect(output.text()).to.contain('Tortillas');
  });
});
