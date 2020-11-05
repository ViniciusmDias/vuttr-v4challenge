import React from 'react';

import { render } from '@testing-library/react';
import Tooltip from '../../components/Tooltip';

const textExample = 'Lorem Ipsum';

describe('Tooltip component', () => {
  it('should be able to render a tooltip', () => {
    const { getAllByTestId } = render(
      <Tooltip title={textExample}>
        <span>{textExample}</span>
      </Tooltip>,
    );

    expect(getAllByTestId('tooltip-container')).toBeTruthy();
  });
});
