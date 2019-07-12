import React from 'react';
import renderer from 'react-test-renderer';

import StarWarsList from '../components/StarWarsList';

describe('<StarWarsList/>', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<StarWarsList/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});