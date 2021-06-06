//https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
import dayjs from "dayjs";

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
    `kiss my kat`,
  ];
  return descriptions[randomInt(0, randomInt.length - 1)];
};

const generateDate = () => {
  const isDate = Boolean(randomInt(0, 1));

  if (!isDate) {
    return null;
  }
  const MAX_GAP = 7;
  const day = randomInt(-MAX_GAP, MAX_GAP);
  return dayjs().add(day, `day`).toDate();
};

export const generateTask = () => {
  return {
    description: generateDescription(),
    dueDate: generateDate(),
    repeat: {
      mo: Boolean(randomInt(0, 1)),
      tu: Boolean(randomInt(0, 1)),
      we: Boolean(randomInt(0, 1)),
      th: Boolean(randomInt(0, 1)),
      fr: Boolean(randomInt(0, 1)),
      sa: Boolean(randomInt(0, 1)),
      su: Boolean(randomInt(0, 1)),
    },
    color: COLORS[randomInt(0, COLORS.length - 1)],
    isArchive: randomInt(0, 1),
    isFavorite: randomInt(0, 1),
  };
};
