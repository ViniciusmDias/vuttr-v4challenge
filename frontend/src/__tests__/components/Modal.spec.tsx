import React from 'react';

import { render } from '@testing-library/react';
import Modal from '../../components/Modal';

const handleToggleForm = jest.fn();
const toolsData = [{ id: 1, title: '', link: '', description: '', tags: [''] }];
const setToolsData = jest.fn();

describe('Modal component', () => {
  it('should be able to render a modal', () => {
    const { getAllByTestId } = render(
      <Modal
        handleToggleForm={handleToggleForm}
        toolsData={toolsData}
        setToolsData={setToolsData}
      />,
    );

    expect(getAllByTestId('modal-container')).toBeTruthy();
  });
});
