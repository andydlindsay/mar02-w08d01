import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react';
import Result from '../Result';
import axios from 'axios';

jest.mock('axios');

const data = {
  resultCount: 3,
  results: [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Carol'}
  ]
};

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);

  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

// this function must be marked as `async` in order to use `await` within it
test('Axios test', async () => {
  const { getByTestId, findByText } = render(<Result status="Waiting" />);
  const button = getByTestId('fetch-highscores');

  // mock any calls to axios.get with hardcoded return value `data`
  axios.get.mockResolvedValueOnce({ data });

  // firing this event causes the axios call to happen
  fireEvent.click(button);

  // findBy functions return a promise which we can `await`
  await findByText('Bob');
});

test('functions', () => {
  const mockFn = jest.fn();
  let result = mockFn('hello');

  expect(result).toBeUndefined();
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('hello');
  expect(mockFn).toHaveBeenCalledTimes(1);

  const mockFn2 = jest.fn(() => 'world');
  result = mockFn2('hello');
  
  expect(result).toBe('world');
});
