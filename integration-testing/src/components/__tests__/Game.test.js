import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import Game from '../Game';

describe('Game Component', () => {

  test('change the cheat state when robot icon is clicked', () => {
    const { container, getByTestId, debug } = render(<Game />);

    // const robotIcon = getByTestId(container, 'robot-icon');
    const robotIcon = getByTestId('robot-icon');
    
    // const dom = prettyDOM(container);
    // console.log(dom);
    
    fireEvent.click(robotIcon);
    expect(robotIcon).toHaveClass('cheating');
    
    // debug();
    fireEvent.click(robotIcon);
    expect(robotIcon).not.toHaveClass('cheating');
  });

});
