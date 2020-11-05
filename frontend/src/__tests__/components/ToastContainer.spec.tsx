import React from 'react';

import { render } from '@testing-library/react';
import ToastContainer from '../../components/ToastContainer';

const message = [{ id: '', title: '' }];

describe('ToastContainer component', () => {
  it('should be able to render a toastContainer', () => {
    const { getAllByTestId } = render(<ToastContainer messages={message} />);

    expect(getAllByTestId('toast-container')).toBeTruthy();
  });
});
