import React from 'react';
import MockAdapter from 'axios-mock-adapter';

import { render, fireEvent } from '@testing-library/react';
import ToolsCard, { toolsProps } from '../../components/ToolsCard';

import api from '../../services/api';

let value: toolsProps;

const apiMock = new MockAdapter(api);
const tools = [{ id: 1 }, { id: 2 }];
let confirmSpy;

beforeAll(() => {
  confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => true));
});
describe('ToolsCard component', () => {
  beforeAll(() => {
    confirmSpy = jest.spyOn(window, 'confirm');
    confirmSpy.mockImplementation(jest.fn(() => true));
  });
  it('should be able to render a ToolsCard', () => {
    const { getAllByTestId } = render(<ToolsCard toolDetail={value} />);

    expect(getAllByTestId('container-tools-card')).toBeTruthy();
  });

  it('shoud be able to delete a tool', async () => {
    const { getByText } = render(<ToolsCard toolDetail={value} />);
    const buttonElement = getByText('remove');

    fireEvent.click(buttonElement);

    expect(apiMock.onDelete(`/tools/${tools[0].id}`).reply(200)).toBeTruthy();
  });
});
