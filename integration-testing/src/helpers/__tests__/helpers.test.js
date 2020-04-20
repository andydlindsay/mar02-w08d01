import { announceResult, chooseRobotItem } from '../helpers'

let fakeState;

beforeEach(() => {
  fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
});

describe('announceResult function', () => {
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('chooseRobotItem function', () => {
  test('given a player choice and cheating is true, return winning item', () => {
    fakeState.cheating = true;

    fakeState.playerSelection = 'Axe';
    let result = chooseRobotItem(fakeState.cheating, fakeState.playerSelection);
    expect(result).toBe('Moai');

    fakeState.playerSelection = 'Tree';
    result = chooseRobotItem(fakeState.cheating, fakeState.playerSelection);
    expect(result).toBe('Axe');

    fakeState.playerSelection = 'Moai';
    result = chooseRobotItem(fakeState.cheating, fakeState.playerSelection);
    expect(result).toBe('Tree');
  });

  test('given a player choice and cheating is false, return a valid choice', () => {
    fakeState.cheating = false;

    fakeState.playerSelection = 'Axe';
    const result = chooseRobotItem(fakeState.cheating, fakeState.playerSelection);
    const options = ['Axe', 'Moai', 'Tree'];
    expect(options.includes(result)).toBeTruthy();
  });
});
