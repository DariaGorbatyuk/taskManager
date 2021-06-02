//https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const randomInt = (a = 1, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const COLORS = [`black`, `yellow`, `blue`, `green, pink`];

const generateDescription = () => {
  const descriptions = [
    `Make my homework`,
    `feed my dogs`,
    `Wash the dishes`,
  ];
  return descriptions[randomInt(0, randomInt.length - 1)];
};

export const generateTask = () => {
  return {
    description: generateDescription(),
    dueDate: null,
    repeat: {
      mo: randomInt(0, 1),
      tu: randomInt(0, 1),
      we: randomInt(0, 1),
      th: randomInt(0, 1), randomInt,
      fr: randomInt(0, 1),
      sa: randomInt(0, 1),
      su: randomInt(0, 1),
    },
    color: COLORS[randomInt(0, COLORS.length - 1)],
    isArchive: randomInt(0, 1),
    isFavorite: randomInt(0, 1),
  };
};
