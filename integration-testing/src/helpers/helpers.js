export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const chooseRobotItem = (cheating, playerSelection) => {
  const lookup = {
    Axe: 'Moai',
    Tree: 'Axe',
    Moai: 'Tree'
  };
  if (cheating) {
    return lookup[playerSelection];
  } else {
    const options = ['Axe', 'Moai', 'Tree'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
};
